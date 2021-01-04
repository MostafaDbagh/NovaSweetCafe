import styled from 'styled-components'
import coffeebg from '../images/nova.jpg'
export const Contentdiv = styled.div`
width:90%;
margin:15px auto;
height:500px;
position:relative;
background:url(${coffeebg});
background-position: right center;
background-repeat:no-repeat;
background-size:cover;
`
export const Wrapper = styled.div`
position:absolute;
width:100%;
height:100%;
background:rgba(0,0,0,0.6)
`
export const Flexdiv = styled.div`
width:90%;
height:290px;
margin: 0 auto;
display:flex;
justify-content:space-between;

`
export const Span = styled.span`
vertical-align: middle;
display:table-cell;
text-align:center;
font-size:27px;
font-family:signika,sans-serif;
color:white;
width:252px;
height:262px;
`
export const Div1 = styled.div`
width:275px;
height:285px;
background:rgb(28 27 29);
position:relative;
&:before{
position:absolute;
content:'';
width:0px;
height:100%;
transition:.9s width ease;
background:rgb(252, 145, 162);
opacity:0.85;
top:0;
left:0;
}
&:hover:before{
    width:100%;
  
}

`
export const Clipdiv = styled.div`
width:336px;
height:60px;
clip-path: polygon(0 0, 100% 0, 88% 45%, 100% 100%, 0 100%, 13% 50%);

background:rgb(252, 145, 162);
color:white;
font-family:lobster,sans-serif;
display:flex;
align-items:center;
position:relative;
font-size:24px;
left:14%;

`
export const Rectanglediv =styled.div`
width:325px;
height:47px;
background:rgb(28 27 29);
position:relative;
border-radius:5px;
margin-top:60px;
left:10%;
color:white;
font-family:lobster,sans-serif;
`
export const Shape = styled.div`
display:flex;
flex-direction:column;
`
export const Titlediv = styled.div`
color:white;
text-align:center;
margin:32px 0;
font-family:signika,sans-serif;
position:relative;
`
export const Button = styled.button`
width:26%;
height:60px;
background:rgb(28 27 29);
border:none;
outline:none;
cursor:pointer;
color:white;
font-family:lobster,sans-serif;
font-size:28px;
padding:10px 0;
border-radius:5px;

`
