
function Maping({fruits}){
    // console.log(fruits);
  
    return (
        <div>
          <h1>Mapping</h1>  
          
          <div>
            {
            fruits.map((item)=>(
                <h2>{item}</h2>
            ))}
          </div>

        </div>
      );
    }


export default Maping;