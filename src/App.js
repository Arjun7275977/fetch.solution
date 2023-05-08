import  DogImage from './Component/Fetch';
import './App.css';
//import RandomDogImage from './Component/axiosdog'
import Hero from './Component/Hero'
import Header from './Component/Header'

function App() {
  return (
    <div className="App">
      {/* <DogImage/>
      <RandomDogImage/> */}
      <Header/>
      <Hero/>

    </div>
  );
}

export default App;
