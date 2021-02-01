import React,{useState} from 'react';
import {MapDiv,Seconddiv,Input,Textarea,Button,Parentdiv,Twodiv,Onediv,Threediv,Inputdiv} from "../style/mapstyle"
import safi  from '../api/api'
import apis from '../api/api';
const Map  = () => {
    const [message,setMessage] = useState({  name:'', email:'', msg:'',})
  const handleClick = ()=>{
      apis.getuser().then( alert('hello user'))
  }
 const  handleSubmit = async ()=>{

const payload = message;
await apis.insertUser(payload).then(alert('we will replay quickly')).catch(err => console.log(err.error))
   }
    return ( 
        <>
        <h2 style={{textAlign:"center",marginBottom:"32px",letterSpacing:'2px',position:'relative',top:"20px" ,   color: "rgb(252, 145, 162)",fontFamily:"lobster,sans-serif"}}>
            Where You Can Find Us
            </h2>  
            <div style={{width:"100%",height:"42px"}}></div>
      <Parentdiv>
          <Onediv>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.418862030085!2d55.34485471511391!3d25.290127583852996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d8daa434dfd%3A0xcb0acb8c1e057326!2sNova%20Sweets%20and%20Cafe%20Century%20Mall!5e0!3m2!1sen!2sae!4v1609508875059!5m2!1sen!2sae"  frameborder="0" 
style={{border:0, allowfullscreen:"", ariaHidden:"false", tabindex:"0",width:'100%',height:'100%'}}></iframe>
          </Onediv>
          <Twodiv>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.492043466955!2d55.756214015093676!3d24.22456358435779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab6b53750a275%3A0x1d4fcf3ce5ab14d2!2sNova%20Sweets%20And%20Cafe!5e0!3m2!1sen!2sae!4v1609510472228!5m2!1sen!2sae"  frameborder="0" 
style={{border:0 , allowfullscreen:"", ariaHidden:"false", tabindex:"0",width:'100%',height:'100%'}}></iframe>

          </Twodiv>
          <Threediv>
          <div style={{width:"100%",height:'100%',background:'rgba(0,0,0,0.5)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
<div >
    <Inputdiv >
    <Input type="text" placeholder="YOUR NAME" width="231px" height="53px" onChange={e => setMessage({...message,name:e.target.value})}></Input>
    <Input type="text" placeholder="YOUR-EMAIL" width="231px" height="53px" onChange={e => setMessage({...message,email:e.target.value})}></Input>
    </Inputdiv>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <Textarea placeholder="YOUR-MESSAGE"width="80%" height="114px" onChange={e => setMessage({...message,msg:e.target.value})}></Textarea>
    <Button onClick={ handleSubmit}>Send Message</Button>
<button onClick={handleClick}>click me</button>
    </div>

</div>
</div>
          </Threediv>
      </Parentdiv>
        </>
     );
}
 
export default Map ;