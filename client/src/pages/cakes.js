import React, { useEffect, useState } from "react";
import { Div } from '../style/cardstyle'

import Yamazakicard  from './../components/YamazakiCard'
const Product = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchData = () => {
            fetch("https://novasweetcafe.herokuapp.com/Data/cake.json")
                .then(res => {
                    console.log(res)
                    return res.json()
                })
                .then(data => setData(data));
        };
        fetchData();
    }, []);

    return (
        <>
            <h2 style={{ textAlign: "center", color: "#5e6f64", marginBottom: "25px", fontFamily: "'Berkshire Swash', cursive" }}>Cake</h2>
            
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
    )
}

export default Product;
