import  DogImage from './Component/Fetch';
import './App.css';
import RandomDogImage from './Component/axiosdog'

function App() {
  return (
    <div className="App">
      <DogImage/>
      <RandomDogImage/>
    </div>
  );
}

export default App;
