import Particles from 'react-particles-js';

import Navigation from "./components/navigation/navigation.component";
import Logo from './components/logo/logo.component';
import Rank from './components/rank/rank.component';
import ImageLinkForm from './components/image-link-form/image-link-form.component';

import "./App.css";

const particleOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true, 
          value_area: 500
        }
      }
    }
  }


function App() {
  return (
    <div className='App'>
    <Particles 
    className='particles'
    params={particleOptions}
    style={{
      width: '100%',
    }}
  />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
          {/*
          <FaceRecognition /> */}
    </div>
  );
}

export default App;
