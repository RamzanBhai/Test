import React, { useEffect } from 'react'
import CSV from '../assets/file.json'
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../Redux/SetData';
const Forms = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(setData(CSV));
  }, []); 

  return (
    <div>

      <h1>React Questions</h1>
      <h3>User View</h3>
      <div style={{display:"flex"}}>
      {
    product.data.map((Data)=>(
     <div key={Data.id}>
       <h1>{Data.id}</h1>
      <p> Name:{Data.name} </p> 
      <p> Role:{Data.Role} </p> 
      <p>  Feild : {Data.feild}  </p>
      <p> CNIC : {Data.CNIC} </p>
      <br />
     </div> 
    ))
   }
      </div>
      <h3>Admin  View</h3>
   <div style={{display:"flex"}}>

   {
    product.data.map((Data)=>(
     <div key={Data.id}>
       <h1>{Data.id}</h1>
      <p>Name:{Data.name}</p> 
      <p>Role:{Data.Role}</p> 
      <p>Feild:{Data.feild}</p>
      <p>CNIC: <span style={{opacity:"0.21"}}>{Data.CNIC}</span></p>
      <br />
     </div> 
    ))
   }
   </div>
    </div>
  )
}

export default Forms