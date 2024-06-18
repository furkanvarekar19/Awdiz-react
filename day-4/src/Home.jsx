import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./contex/authcontext";

function Home(){
const {state} = useContext(AuthContext)

  const home = useNavigate()

    return(
        <div className="home">
            <h2>home page : {state?.user?.name}</h2>
            <button onClick={()=> home("UseNavigate")}> go to UseNavigate page</button>
            <button onClick={()=> home("todolist")}> go to Todo page</button>


        </div>
    )
}
export default Home;