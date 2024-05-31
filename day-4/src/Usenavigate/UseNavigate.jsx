import { useNavigate } from "react-router-dom";

function UseNavigate (){
   const navigate = useNavigate()

    return(
        <>
        <h1>UseNavigate</h1>
        <button onClick={()=> navigate("/")}> Go to home page</button>
        </>
    )
}
export default UseNavigate;