import { VercelRequest, VercelResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url';

async function connectToDatabase(uri: string) {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const dbName = url.parse(uri).pathname.substr(1);
  const db = client.db(dbName);

  return db;
}

export default async (request: VercelRequest, response: VercelResponse) => {

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('users');

  const users = await collection.find().sort({ level: -1, challengesCompleted: -1 }).toArray();
  console.log(users);

  return response.json({ users });
}
