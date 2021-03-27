import { VercelRequest, VercelResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb)
    return cachedDb;

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const dbName = url.parse(uri).pathname.substr(1);
  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export default async (request: VercelRequest, response: VercelResponse) => {
  const { login, level, currentExperience, challengesCompleted } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('users');

  await collection.updateOne({ login }, {
    $set: {
      level,
      currentExperience,
      challengesCompleted,
    }
  },
  );

  return response.status(201).json({ level, currentExperience, challengesCompleted });
}
