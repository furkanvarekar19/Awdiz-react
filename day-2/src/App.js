import './App.css';
import './component/Home'
import Home from './component/Home';
import Login from './component/Login';
import Mens from './component/Mens';
import Womens from './component/Womens';

function App() {
  return (
    <div className="App">
      <Home/>
      <Login/>
      <Mens/>
      <Womens/>
    </div>
  );
}

export default App;
