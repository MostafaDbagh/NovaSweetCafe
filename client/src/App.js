import React,{useState} from 'react';
import apis from './api/api'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [name ,setName] = useState('')
  const [email ,setEmail] = useState('')

const handleName = (e)=>{
  setName(e.target.value)
}
const handleEmail = (e)=>{
  setEmail(e.target.value)
}
const submitRequest = async (e)=>{
  e.preventDefault()
 const payload = {name,email}
await apis.insertUser(payload).then(res => {
  window.alert('user added successfully')
  setEmail('')
  setName('')
})

}
  return (
    <div className="App">
    <form onSubmit={submitRequest} className="mt-5">

   
        <div className="form-group row">
    <label  className="col-sm-2 col-form-label h2 muted"> Name:</label>
    <div className="col-sm-5">
      <input type="text"  className="form-control" onChange={handleName} placeholder="Enter your Name"/>
    </div>
  </div>
    
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label h2 muted"> Email:</label>
    <div className="col-sm-5">
      <input type="email" className="form-control" onChange={handleEmail} placeholder="Enter your Email"  />
    </div>
  </div>
     <div className="row">
  <input type='submit' className="btn btn-primary mx-auto btn-lg" />
  </div>
    </form>
   
    </div>
  );
}

export default App;

