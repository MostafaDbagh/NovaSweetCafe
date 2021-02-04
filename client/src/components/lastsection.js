import React,{useState,useRef} from 'react';
import {MapDiv,Seconddiv,Input,Lastinput,Button} from "../style/mapstyle"
import apis from '../api/api'
const Lastsection = () => {
    const [ sub_email,setSube_mail] = useState('');
    const btnRef = useRef();
    const spanRef = useRef();
    const handlesubscribe = async (e)=>{
        e.preventDefault();
        const payload = {'sub_email':sub_email};
    
await apis.insertSubscriber(payload)
.then(btnRef.current.disabled = true)
.then(spanRef.current.style.visibility='visible')
.then(setTimeout(() => {
    spanRef.current.style.visibility='hidden'
}, 3000))
    }

    return ( 

        <div style={{width:'90%',margin:'0 auto'}}>
              <h2 style={{textAlign:"center",marginBottom:"32px",letterSpacing:'2px',position:'relative',top:"20px" ,fontSize:'5rem',   color: "rgb(68, 54, 53)",fontFamily:"lobster,sans-serif"}}>WANT MORE ?</h2>  
              <h3 style={{textAlign:"center",marginBottom:"32px",letterSpacing:'2px',position:'relative',top:"20px" ,   color: "rgb(68, 54, 53)",fontFamily:"lobster,sans-serif"}}>get our newsletter</h3>
              <div style={{width:'100%',margin:'0 auto',}}>
                  <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>

                  <Lastinput 
                  style={{background:"rgb(252,145,164)",border:'none',color:'white', outline:'none'}}
                   onChange={(e)=>setSube_mail(e.target.value)} 
                   color="white" width="231px" height="53px" placeholder="ENTER YOUR EMAIL"></Lastinput>
                  <Button onClick={handlesubscribe} ref={btnRef} >SUBSCRIBE</Button>
                  </div>
                  <div style={{margin:'8px auto 22px'}}>
                  <span ref={spanRef} style={{visibility:'hidden',fontFamily:'signika,sans-serif'}}>Thank You For Subscribe </span>
                  </div>
               
              </div>
        </div>
     );
}
 
export default Lastsection;