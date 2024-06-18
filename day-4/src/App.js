import './App.css';
import Home from './Home';
import Pagenotfound from './Pagenotfound';
import Usestate from './usestate/Usestate';
import {Routes,Route} from "react-router-dom"
import UseEffect1 from './UseEffect/UseEffect1';
import UseEffect2 from './UseEffect/UseEffect2';
import UseEffect3 from './UseEffect/UseEffect3';
import UseEffect4 from './UseEffect/UseEffect4';
import UseNavigate from './Usenavigate/UseNavigate';
import Userdetail from './UseParams/Userdetail';
import Maping from './Mapping-data/Maping';
import Allprodcuts from './Mapping-data/Allprodcuts';
import Allproducts2 from './Mapping-data/Allproducts2';
import  Bgcolor  from './Bg-color-pro/Bg-color';
import FunctionProp from './Functions-props/FunctionProp';
import StyledComponents from './Functions-props/StyledComponents.J';
import InlineStyle from './Functions-props/InlineStyle';
import Todolist from './Todo-App/Todolist';
import BigCol2 from './Bg-color-pro/BigCol2';
import Todolist2 from './Todo-App/Todolist2';
import Register from './Register & Login/Register';
import Login from './Register & Login/Login';
import Register1 from './Register & Login/Register1';
import Login1 from './Register & Login/Login1';
import ParentChild from './Register & Login/ParentChild';
import Weather from './Weather/Weather';
import Reducer from './useReducer/Reducer';
import Counter from './usestate/counter';


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='*' element= {<Pagenotfound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/usestate' element= {<Usestate/>} />
        <Route path='/useEffect1' element={<UseEffect1/>} />
        <Route path='/useEffect2' element={<UseEffect2/>} />
        <Route path='/useEffect3' element= {< UseEffect3/>} />
        <Route path='/useEffect4' element= {< UseEffect4/>} />
        <Route path='/UseNavigate' element= {< UseNavigate/>} />
        <Route path='/:username' element= {<Userdetail/>} />
        <Route path='Maping' element= {<Maping fruits={["Apple","Banana","Papaya","Watermelon"]} />} />
        <Route path='Allprodcuts' element= {<Allprodcuts/>} />
        <Route path='Allprodcuts2' element= {<Allproducts2/>} />
        <Route path='bg-color' element= {<Bgcolor/>} />
        <Route path='BigCol2' element= {<BigCol2/>} />
        <Route path='FunctionProp' element= {<FunctionProp/>} />
        <Route path='StyledComponents' element= {<StyledComponents/>} />
        <Route path='InlineStyle' element= {<InlineStyle/>} />
        <Route path='todolist' element= {<Todolist/>} />
        <Route path='Todolist2' element= {<Todolist2/>} />
       <Route path='Register' element= {<Register/>}/>
       <Route path="/login" element={<Login/>} />
       <Route path='Register1' element= {<Register1/>}/>
       <Route path="/login1" element={<Login1/>} />
       <Route path="/ParentChild" element={<ParentChild/>} />
       <Route path="/Weather" element={<Weather/>} />
       <Route path="/Reducer" element={<Reducer/>} />
       <Route path="/counter" element={<Counter/>} />



      </Routes>
    </div>
  );
}

export default App;
