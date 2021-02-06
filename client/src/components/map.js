import React,{useRef, useState} from 'react';
import {Input,Textarea,Button,Parentdiv,Twodiv,Onediv,Threediv,Inputdiv,Smalldiv} from "../style/mapstyle"
import {Commondiv} from '../style/navbarstyle'
import apis from '../api/api';
const Map  = () => {
    const spanStyle ={
        color:'red',
        fontFamily:'signika,sans-serif',
        fontSize:'12px',
        display:'none',
        fontWeight:'bold',
        margin:'2px 0'
    }
    let [message,setMessage] = useState({  name:'', email:'', msg:'',})
    const btnRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const spanRef = useRef();
    const spanRef1 = useRef();
    const spanRef2 = useRef();
    const emailCheck = (email)=>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

 const  handleSubmit = async ()=>{

    
     const span = [spanRef,spanRef1,spanRef2]
     const input = [nameRef.current,emailRef.current,messageRef.current];
     input.map((item,i) => item.value =='' ? span[i].current.style.display='block':span[i].current.style.display='none')
     if( !emailCheck(emailRef.current.value)){
        return
    };
   for(let  i = 0;i<=input.length-1;i++){
    if(input[i].value ==''){
        return
    }
    
       
   }
  
    
  


const payload = message;
await apis.insertReview(payload).then(alert('we will replay quickly'))

.then()
.then(setMessage({
    name:'',
email:'',
msg:''}))
.catch(err => console.log(err.error))

   }
    return ( 
        <Commondiv>
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
    <Smalldiv style={{marginBottom:'8px'}}>
    <Input type="text" placeholder="YOUR NAME" value={message.name} width="231px" ref={nameRef} height="53px" onChange={e => setMessage({...message,name:e.target.value})}></Input>
    <span style={spanStyle} ref={spanRef}>Please Enter your name</span>
    </Smalldiv>
   <Smalldiv>
   <Input type="email" placeholder="YOUR-EMAIL" width="231px" 
   ref={emailRef} value={message.email} height="53px" 
   onChange={e => setMessage({...message,email:e.target.value})}/>
   <span style={spanStyle} ref={spanRef1}>Please Enter your Email</span>
   </Smalldiv>
   </Inputdiv>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:'20px'}}>
        
    <Textarea placeholder="YOUR-MESSAGE"width="80%"ref={messageRef}  
    height="104px" value={message.msg} 
    onChange={e => setMessage({...message,msg:e.target.value})}></Textarea>
    <span ref={spanRef2} style={spanStyle}>please Enter your message</span>
    <Button onClick={ handleSubmit} ref={btnRef} >Send Message</Button>
   

    </div>

</div>
</div>
          </Threediv>
      </Parentdiv>
        </Commondiv>
     );
}
 
export default Map ;