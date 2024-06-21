import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./contex/authcontext";
import { CounterContext } from "./contex/countercontext";
import { themeContext } from "./contex/themecontext";

function Home(){
// const {state} = useContext(AuthContext)
const {state} = useContext(CounterContext);
const {themeState ,dispatch} = useContext(themeContext);
// console.log(themeState ,'themestate');



  const home = useNavigate()
       
    return(
        <div className="home" style={{backgroundColor : themeState.theme === "light" ? "lightgreen" : "darkorchid"}}>
            {/* <h2>home page : {state?.user?.name}</h2> */}
            <h2>home page : {state?.counter}</h2>

            <button onClick={()=> home("counter")} className="col"> go to counter page</button>
            <button onClick={()=> home("UseNavigate")} className="col"> go to UseNavigate page</button>
            <button onClick={()=> home("todolist")} className="col"> go to Todo page</button> <br />
            <button className="col" onClick={()=> dispatch({type : themeState?.theme === "light" ? "DARK" : "LIGHT"})}>Change {themeState?.theme === 'light'?"light" : 'dark'  } Theme</button>


        </div>
    )
}
export default Home;