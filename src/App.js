

import './App.css';
import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';
import MainComponent from './components/MainComponent';
//import { store } from './Components/redux/store';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>


    </div>
  );
}

export default App;

