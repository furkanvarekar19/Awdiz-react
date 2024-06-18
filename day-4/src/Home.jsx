import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./contex/authcontext";
import { CounterContext } from "./contex/countercontext";

function Home(){
// const {state} = useContext(AuthContext)
const {state} = useContext(CounterContext)


  const home = useNavigate()
       
    return(
        <div className="home">
            {/* <h2>home page : {state?.user?.name}</h2> */}
            <h2>home page : {state?.counter}</h2>
            <button onClick={()=> home("counter")}> go to counter page</button>


            <button onClick={()=> home("UseNavigate")}> go to UseNavigate page</button>
            <button onClick={()=> home("todolist")}> go to Todo page</button>


        </div>
    )
}
export default Home;