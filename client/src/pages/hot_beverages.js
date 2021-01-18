import React, { useEffect, useState } from "react";
import { Div } from '../style/cardstyle'
import { Rdiv, Rimage, RPara } from '../style/product'
import Yamazakicard  from './../components/YamazakiCard'
const Product = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchData = () => {
            fetch("http://localhost:3000/Data/hot_beverages.json")
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
            <h2 style={{ textAlign: "center", color: "#5e6f64", marginBottom: "25px", fontFamily: "'Berkshire Swash', cursive" }}>Hot Beverages</h2>
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