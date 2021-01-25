import React, { useEffect, useState } from "react";
import Subpage from '../components/frontsub'
import { Div } from '../style/cardstyle'
import Yamazakicard  from './../components/YamazakiCard'
const Product = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchData = () => {
            fetch("./data/shosho.json")
                .then(res =>  res.json())
                .then(data => setData(data));
        };
        fetchData();
    }, []);
    console.log(Data)
    return (
        <>
           <Subpage title="SUSHI"/>
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

export default Product;
