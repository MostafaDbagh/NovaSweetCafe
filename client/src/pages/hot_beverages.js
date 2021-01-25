import React, { useEffect, useState } from "react";
import { Div } from '../style/cardstyle'
 import Subpage from '../components/frontsub'
import Yamazakicard  from './../components/YamazakiCard'
const Product = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchData = () => {
            fetch("./data/hot_beverages.json")
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
           <Subpage title="HOT_BEVERAGE"/>
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
