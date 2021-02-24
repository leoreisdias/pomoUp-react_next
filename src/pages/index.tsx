import ExperienceBar from '../components/ExperienceBar';
import Lottie from 'react-lottie';
import animationData from '../lotties/laptop-working.json';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="container">
      <ExperienceBar />
      <Lottie
        options={defaultOptions}
        height={'100%'}
        width={'100%'}
      />
    </div>
  );
}
