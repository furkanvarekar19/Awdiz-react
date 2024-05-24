import './App.css';
import { Route, Routes } from "react-router-dom";
import './component/Home'
import Home from './component/Home';
import Login from './component/Login';
import Mens from './component/Mens';
import Womens from './component/Womens';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/mens' element= {<Mens/>} />
        <Route path='/womens'element= {<Womens/>} />
   
      </Routes>
    </div>
  );
}

export default App;
