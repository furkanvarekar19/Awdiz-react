import { useNavigate } from "react-router-dom";

function Home(){
  const home = useNavigate()

    return(
        <div>
            <h2>home</h2>
            <button onClick={()=> home("UseNavigate")}> go to UseNavigate page</button>
        </div>
    )
}
export default Home;