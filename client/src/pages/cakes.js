import React, { useEffect, useState } from "react";
import { Div } from '../style/cardstyle'

import Yamazakicard  from './../components/YamazakiCard'
const Product = () => {
    const [Data, setData] = useState([])
    // useEffect(() => {
    //     const fetchData = () => {
    //         fetch("http://localhost:3000/Data/cake.json")
    //             .then(res => {
    //                 console.log(res)
    //                 return res.json()
    //             })
    //             .then(data => setData(data));
    //     };
    //     fetchData();
    // }, []);

    return (
        <>
            <h2 style={{ textAlign: "center", color: "#5e6f64", marginBottom: "25px", fontFamily: "'Berkshire Swash', cursive" }}>Cake</h2>
            
              
             


        </>
    )
}

export default Product;
