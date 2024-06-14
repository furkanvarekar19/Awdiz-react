import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Weather.css'


function Weather() {
const [data , setData] = useState({});
const [loaction , setLoactions] = useState('');


//  const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5f2f8b31fa8b70e199932d4c680398c0`
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${loaction}&appid={5f2f8b31fa8b70e199932d4c680398c0}`

 function searchLoaction(event){
   if(event.key=== 'Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data);
    })
    
   }

 }

 
  return (
    <div className='weather'>
    <div className="serach">
      <input type="text"
      value={loaction} 
        onChange={event => setLoactions(event.target.value)}
        placeholder='Enter location'
      />
    </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>Mumbai</p>
          </div>
          <div className="temp">
            <h1>60 °F</h1>
          </div>
          <div className="desc">
            <p>Cloudes</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
          <p className='bold'>60 °F</p>
          <p>feels Like</p>
          </div>
          <div className="humidity">
            <p className='bold'>30%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
          <p className='bold'> 12 MPH</p>
          <p>Wind speed</p>
          </div>
        </div>
      </div>
        

    </div>
  )
}

export default Weather