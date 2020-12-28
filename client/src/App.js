import React,{useState} from 'react';
import Nova from './images/Nova.png'
import apis from './api/api'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [data,setData] = useState({name:"",taste:'',deliverytime:'',money:'',clean:'',notes:''})
const submitRequest = async (e)=>{
  const{name,taste,deliverytime,money,clean,notes}=data;
  e.preventDefault()

 const payload = {name,taste,deliverytime,money,clean,notes}
 console.log(payload)
await apis.insertUser(payload).then(res => {
  
window.alert("we add this review successfully")

})
setData({
  name:"",
  taste:'',
  deliverytime:'',
  money:'',
  clean:'',
  notes:''
})
}
  return (
    <div className="App  ">

      <div style={{widht:"100vw",height:"170px",textAlign:"center"}}>
        <img src={Nova} alt="nova Logo" width="300px" height="140px" ></img>
      </div>
      <div className="container col-sm-12 bg-dark  ">
    <form onSubmit={submitRequest} className="mt-2">

   
     <div className="form-group row d-flex justify-content-center flex-column align-items-center  ">
    <label  className="col-sm-2 col-form-label h2 muted text-center  my-2 h22"> Name </label>
      <input type="text"  className="form-control  rounded " onChange={(e)=>setData({...data,name:e.target.value})}  placeholder="Please Enter your Name"  />
  </div>
     <div className="form-group row d-flex justify-content-center flex-column align-items-center">
    <label  className="col-sm-2 col-form-label h2 muted text-center  my-2 h22"> Quality-Taste </label>
      <input type="text" onChange={(e)=>setData({...data,taste:e.target.value})} className="form-control  " placeholder="What about Taste from One-Ten"  />
  </div>

        <div className="form-group row d-flex justify-content-center flex-column align-items-center">
    <label  className="col-sm-2 col-form-label h2 muted text-center my-2  h22"> Delivery Time </label>
      <input type="Number"onChange={(e)=>setData({...data,deliverytime:e.target.value})}  className="form-control  "  placeholder="Expected Time to Serve"/>
  </div>

        <div className="form-group row d-flex justify-content-center flex-column align-items-center">
    <label  className="col-sm-2 col-form-label h2 muted text-center my-2  h22"> Value of Money </label>
      <input type="text"  className="form-control" onChange={(e)=>setData({...data,money:e.target.value})} placeholder="Afordable or Expensive"/>
  </div>

        <div className="form-group row d-flex justify-content-center flex-column align-items-center">
    <label  className="col-sm-2 col-form-label h2 muted text-center my-2  h22" > Clean </label>
      <input type="number" onChange={(e)=>setData({...data,clean:e.target.value})}  className="form-control  safi"  placeholder="Staff Hygiene-Staff Performance"/>
  </div>


        <div className="form-group row d-flex justify-content-center flex-column align-items-center">
    <label  className="col-sm-2 col-form-label h2 muted text-center my-2 h22"> Any-Notes </label>

   <textarea className="form-control "
    onChange={(e)=>setData({...data,notes:e.target.value})} placeholder="how to improve our services"/>
    
  </div>
    

     <div className="row">
  <input type='submit' className="btn btn-primary mx-auto btn-lg" />
  </div>
    </form>
    </div>
    </div>
  );
}

export default App;