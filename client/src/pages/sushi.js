import React, { useEffect, useState } from "react";
import { Div } from '../style/cardstyle'

import Yamazakicard  from './../components/YamazakiCard'
import { Rdiv, Rimage, RPara } from '../style/product'

const Product = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchData = () => {
            fetch("http://localhost:3000/Data/sushi.json")
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
            <h2 style={{ textAlign: "center", color: "#5e6f64", margin: "35px 0", fontFamily: "'Berkshire Swash', cursive" }}> Sushi</h2>
            <Div style={{ marginBottom: "85px" }}>
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