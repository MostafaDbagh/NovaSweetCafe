import React ,{useState}from 'react';
import apis from '../api/api'
const Review = () => {
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
        <form onSubmit={submitRequest} >

   
     <div className="form-group row d-flex justify-content-center align-items-center mb-5">
    <label  className="col-sm-2 col-form-label h2 muted"> Name :</label>
    <div class="col-sm-6">
      <input type="text"  className="form-control   " onChange={(e)=>setData({...data,name:e.target.value})}  placeholder="Please Enter your Name"  />
      </div>
  </div>
     <div className="form-group row d-flex justify-content-center align-items-center mb-5">
    <label  className="col-sm-2 col-form-label h2 muted"> Quality-Taste : </label>
    <div class="col-sm-6">
      <input type="text" onChange={(e)=>setData({...data,taste:e.target.value})} className="form-control  " placeholder="What about Taste from One-Ten"  />
      </div>
  </div>

        <div className="form-group row d-flex justify-content-center  align-items-center mb-5">
    <label  className="col-sm-2 col-form-label h2 muted "> Delivery Time </label>
    <div className="col-sm-6">
      <input type="Number"onChange={(e)=>setData({...data,deliverytime:e.target.value})}  className="form-control  "  placeholder="Expected Time to Serve"/>
  </div>
  </div>
        <div className="form-group row d-flex justify-content-center align-items-center mb-5">
    <label  className="col-sm-2 col-form-label h2 muted "> Value of Money : </label>
    <div className="col-sm-6">
      <input type="text"  className="form-control" onChange={(e)=>setData({...data,money:e.target.value})} placeholder="Afordable or Expensive"/>
  </div>
  </div>
        <div className="form-group row d-flex justify-content-center align-items-center mb-5">
    <label  className="col-sm-2 col-form-label h2 muted " > Clean :</label>
    <div className="col-sm-6">
      <input type="number" onChange={(e)=>setData({...data,clean:e.target.value})}  className="form-control  safi"  placeholder="Staff Hygiene-Staff Performance"/>
  </div>
  </div>


        <div className="form-group row d-flex justify-content-center  align-items-center mb-5">
    <label  className="col-sm-2 col-form-label h2 muted  "> Any-Notes : </label>
<div className="col-sm-6">
   <textarea className="form-control "
    onChange={(e)=>setData({...data,notes:e.target.value})} placeholder="how to improve our services"/>
    </div>
  </div>
    

     <div className="row col-sm-4 mx-auto">
  <input type='submit' className="btn btn-primary mx-auto btn-block" />
  </div>
    </form>
    
     );
}
 
export default Review;