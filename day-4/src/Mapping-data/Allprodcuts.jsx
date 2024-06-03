import { useEffect, useState } from 'react';
import './All-pro.css'
import axios from "axios";
function Allprodcuts(){
    const [allProducts,setallProducts] = useState([]);
    console.log(allProducts);

  async function GetProducts(){
    //   alert('hii')
     try{
        const response = await axios.get("https://fakestoreapi.com/products")
        // const response = await axios.get("https://api.escuelajs.co/api/v1/products") second api
    


        // console.log(response);
        setallProducts(response.data)

     }catch (error){
        console.log(error);

     }
   }



useEffect(()=>{
   GetProducts()
},[])



    return(
        <>
        <h1 className='all'>All-products</h1>

        <div className='flexs'>
            {allProducts.map((product)=>(
                <div className='box'>
                    <img src= {product.image} alt="img" />
                    <p className='title'> {product.title} </p>
                    <span className='price'> Price : ₹ {product.price}</span>
                    <p> id : {product.id} </p> 
                    <p className='decp'> {product.description} </p>
                    {/* <button>bynow</button> */}
                </div>
            ))}
          
        </div>

        </>
    )
}
export default Allprodcuts;