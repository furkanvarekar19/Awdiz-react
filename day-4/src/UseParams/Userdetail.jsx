import { useParams } from "react-router-dom";
//   import {useEffect} from 'react'

function Userdetail(){
   const {username} = useParams();

    return(
        <>
        <h1> Userdetail : {username} </h1>
        </>
    )
}
export default Userdetail;