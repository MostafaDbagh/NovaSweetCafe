import React,{useState} from 'react';
import {MapDiv,Seconddiv,Input,Lastinput,Button} from "../style/mapstyle"
import apis from '../api/api'
const Lastsection = () => {
    const [email,setEmail] = useState('');
    const handlesubscribe = async ()=>{
await apis.insertSubscriber(email)
.then(alert('we will subscribe you sir'))
    }
    return ( 

        <div>
              <h2 style={{textAlign:"center",marginBottom:"32px",letterSpacing:'2px',position:'relative',top:"20px" ,fontSize:'5rem',   color: "rgb(68, 54, 53)",fontFamily:"lobster,sans-serif"}}>WANT MORE ?</h2>  
              <h3 style={{textAlign:"center",marginBottom:"32px",letterSpacing:'2px',position:'relative',top:"20px" ,   color: "rgb(68, 54, 53)",fontFamily:"lobster,sans-serif"}}>get our newsletter</h3>
              <div style={{textAlign:'center',margin:'32px 0'}}>
                  <Lastinput 
                  style={{background:"rgb(252,145,164)",border:'none',color:'white', outline:'none'}}
                   onChange={(e)=>setEmail(e.target.value)} color="white" width="231px" height="53px" placeholder="ENTER YOUR EMAIL"></Lastinput>
                  <Button onClick={handlesubscribe}>SUBSCRIBE</Button>
              </div>
        </div>
     );
}
 
export default Lastsection;