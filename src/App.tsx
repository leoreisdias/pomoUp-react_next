import './styles/global.css';
import ExperienceBar from './components/ExperienceBar';
import Lottie from 'react-lottie';
import animationData from './lotties/laptop-working.json';

function App() {
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

export default App;
