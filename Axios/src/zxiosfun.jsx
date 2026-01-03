import react,{ useEffect,useState} from "react";
import axios from "./Axios"; 
// this is not lib but a file created to set base url
import instance from "./Axios";



function Zxiosfun(){
  const[products,setProducts]=useState([]);
  const[error,setError]=useState("");

  useEffect(()=>{

    axios.get("products.json")
      .then((response)=>{
        // Firebase returns data directly, not nested in a products property
        const data = response.data;
        // Convert object to array if needed
        const productsArray = Array.isArray(data) ? data : Object.values(data || {});
        setProducts(productsArray);
      })
    .catch((error)=>setError(error.message));
  },[])
    return(
        <div>
            <h1>Axios funtional component</h1>
            {error && (
                <div style={{ 
                    backgroundColor: '#ffebee', 
                    color: '#c62828', 
                    padding: '15px', 
                    borderRadius: '5px',
                    border: '1px solid #ef5350',
                    margin: '10px 0'
                }}>
                    <h3>error:{error}</h3>
                </div>
            )}
            {products.map((product)=>(
                <div key={product.id}>
                    <h3>{product.title}-{product.brand}</h3>
                   <p>{product.description}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default Zxiosfun;