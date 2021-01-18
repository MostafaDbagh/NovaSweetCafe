import React, { useEffect, useState } from "react";
import { Div } from '../style/cardstyle'

import Yamazakicard  from './YamazakiCard'
const Mostsales = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchData = () => {
            fetch("http://localhost:3000/random.json")
                .then(res => {
                    console.log(res)
                    return res.json()
                })
                .then(data => setData(data));
        };
        fetchData();
    }, []);
    console.log(Data)
    return (
        <>
        <div>
<h2 style={{textAlign:"center",marginBottom:"32px",letterSpacing:'2px',position:'relative',top:"20px" ,   color: "rgb(252, 145, 162)",fontFamily:"lobster,sans-serif"}}>Most Sales Product</h2>
</div>
          
            <Div style={{ marginBottom: "35px" }}>
                {Data.map(i => (
                     <Yamazakicard
                     key={i.id}
                     image={i.image}
                     name={i.name}
                     price={i.price}
                     
                     />
                ))}
            </Div>


        </>
    );
};

export default Mostsales;



