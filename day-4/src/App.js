import './App.css';
import Home from './Home';
import Pagenotfound from './Pagenotfound';
import Usestate from './usestate/Usestate';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element= {<Pagenotfound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/usestate' element= {<Usestate/>} />

      </Routes>
    </div>
  );
}

export default App;
