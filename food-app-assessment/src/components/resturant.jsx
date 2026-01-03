import React,{useState, useEffect}from 'react';

function Resturant() {
  const[RestName,setRestName]=useState("");
  const[address,setAddress]=useState("");
  const[type,setType]=useState("");
  const[parking,setParking]=useState("no");
  const[images,setImages]=useState("");
 const[resturants,setResturants]=useState([]);

 useEffect(()=>{
   const data=localStorage.getItem("resturants");
   if(data){
      setResturants(JSON.parse(data))
   }
  },[]);

  const submit=(e)=>{
    e.preventDefault();
    const newResturant={id:Date.now(),
      name:RestName,
      address:address,
      type:type,
      parking:parking,
      images:images};
    const updated=[...resturants,newResturant];
    setResturants(updated);
    localStorage.setItem("resturants",JSON.stringify(updated));
    setName("");
    setAddress("");
    setType("");
    setParking("");
    setImages("");
  }
        
  return (
    <div className="restaurant">
        <h2>Restaurant Component</h2>
        <form onSubmit={submit}>
          <input  placeholder="Enter Resturant Name" value={RestName} onChange={(e)=>setRestName(e.target.value)}/>

          <input  placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>

         

          <select value={type} onChange={(e)=>setType(e.target.value)}>
            <option value="rajasthan">rajasthan</option>
            <option value="thai">thai</option>
            <option value="south-indian">south-indian</option>
            <option value="chinese">chinese</option>
            <option value="italian">italian</option>
          </select>

          <select value={parking} onChange={(e)=>setParking(e.target.value)}>
            <option value="no">No Parking</option>
            <option value="yes">Parking Available</option>
          </select>

          <input  placeholder="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg" value={images} onChange={(e)=>setImages(e.target.value)}/>

          <button class="btn">Add</button>
          </form>
         <ul>
          {resturants.map(evalData=>
            <li key={(evalData.resturantId)}>{evalData.setRestName}</li>
          )}
         </ul>
    </div>
  )
}
export default Resturant;