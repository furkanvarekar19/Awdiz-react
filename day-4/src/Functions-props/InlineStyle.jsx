import React from 'react'


function InlineStyle() {
  return (
    <div className='margn'>
       <p style={{fontSize:'20px', color:"red"}}> Inline-Style</p>
       <h1 style={{fontSize:'45px', color:'blue'}}>Testing Inline Style </h1>
       <h2 className='test'>Testing className</h2>
       <h3 id='test-id'>Testing id</h3>

    </div>
  )
}

export default InlineStyle