import './App.css';
import Home from './Home';
import Pagenotfound from './Pagenotfound';
import Usestate from './usestate/Usestate';
import {Routes,Route} from "react-router-dom"
import UseEffect1 from './UseEffect/UseEffect1';
import UseEffect2 from './UseEffect/UseEffect2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element= {<Pagenotfound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/usestate' element= {<Usestate/>} />
        <Route path='/useEffect1' element={<UseEffect1/>} />
        <Route path='/useEffect2' element={<UseEffect2/>} />

      </Routes>
    </div>
  );
}

export default App;
