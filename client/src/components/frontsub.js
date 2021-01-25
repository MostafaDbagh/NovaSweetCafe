import React from 'react';
import Subimg from '../images/sub.jpg'
const Subpage = (props) => {
    return ( 
        <>
       
        <div style={{width:"90%",height:"250px",margin:"12px auto",background:`url(${Subimg})`,backgroundPosition:'center center'}}>
            <div style={{width:'100%',height:'100%',background:'rgba(0,0,0,0.7)',display:'flex',justifyContent:'center',alignItems:'center'}}>
 <h2 style={{ textAlign: "center", color: "rgb(252,145,164)", marginBottom: "25px", fontFamily: "lobster, cursive",fontSize:'48px' }}>{props.title}</h2> 
            
 </div>
        </div>
        </>
     );
}
 
export default Subpage;