import axios from "axios"
import { useEffect, useState, } from "react"
import './All-pro.css'




function Allproducts2(){
const [Data,setData] = useState([]);
console.log(Data);
   
async function GetData(){

    try{
        let Datarespnse = await axios.get('https://api.escuelajs.co/api/v1/products')

        //   console.log(Datarespnse);
               setData(Datarespnse.data)
      }
      catch (error){
        console.log(error);

     }
        
    }
  

useEffect(()=>{
    GetData()
},[])

  return(
    <>
    <h1>Allproducts2</h1>

    <div className="dataflex">
        {
         Data.map((item)=>(
            <div className="databox">
                <img src= {item.images} alt="images" />
                <p> {item.title} </p>
                <p> {item.id} </p>
                <p> price : {item.price} </p>
            </div>
         ))
        }
    </div>



    </>
  )
}
export default Allproducts2