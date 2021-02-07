import React,{useState,useRef} from 'react';
import {MapDiv,Seconddiv,Input,Lastinput,Button} from "../style/mapstyle"
import apis from '../api/api'
import {Commondiv} from '../style/navbarstyle'
const Lastsection = () => {
    let [message,setMess] = useState('');
    const [ sub_email,setSube_mail] = useState('');
    const btnRef = useRef();
    const spanRef = useRef();
    const inputRef = useRef();
    const emailCheck = (email)=>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());

    }
   
    const handlesubscribe = async (e)=>{
    const payload = {'sub_email':sub_email};
    if(inputRef.current.value =='') return; 
    if( emailCheck(inputRef.current.value)){
       setMess('thank for sub')
        await apis.insertSubscriber(payload)
        btnRef.current.disabled = true
    }
   else{
       setMess('invalid email')
   }

   spanRef.current.style.visibility='visible'
 
   setTimeout(() => {
       spanRef.current.style.visibility='hidden'
   }, 3000)

 
    }

    return ( 

        <Commondiv>
              <h2 style={{textAlign:"center",marginBottom:"32px",letterSpacing:'2px',position:'relative',top:"20px" ,fontSize:'5rem',   color: "rgb(68, 54, 53)",fontFamily:"lobster,sans-serif"}}>WANT MORE ?</h2>  
              <h3 style={{textAlign:"center",marginBottom:"32px",letterSpacing:'2px',position:'relative',top:"20px" ,   color: "rgb(68, 54, 53)",fontFamily:"lobster,sans-serif"}}>get our newsletter</h3>
              <div style={{width:'100%',margin:'0 auto',}}>
                  <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>

                  <Lastinput  type="email"
                  ref={inputRef}
                  style={{background:"rgb(252,145,164)",border:'none',color:'white', outline:'none',fontSize:'12px'}}
                   onChange={(e)=>setSube_mail(e.target.value)} 
                   color="white" width="231px" height="53px" placeholder="ENTER YOUR EMAIL"></Lastinput>
                  <Button onClick={handlesubscribe} ref={btnRef} style={{fontSize:'12px'}} >SUBSCRIBE</Button>
                  </div>
                  <div style={{margin:'8px auto 22px' ,textAlign:'center'}}>
                      {console.log('this message'+message)}
                  <span ref={spanRef} style={{visibility:'hidden',fontFamily:'signika,sans-serif'}}>{message} </span>
                  </div>
               
              </div>
              </Commondiv>
     );
}
 
export default Lastsection;