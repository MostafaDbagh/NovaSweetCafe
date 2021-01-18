import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin: auto;
  position: relative;
`;
const Minidiv = styled.div`
display:flex;
justify-content:center;
align-items:center;

`
const Span = styled.span`
font-family:signika,sans-serif;
width:100%;
height:30px;
font-size:24px;
color:black;
font-weight:bold;
line-height:40px;
text-align:center;


`
const Input = styled.input`
width:50px;
height:43px;
padding:0;
font-size:1.6rem;
margin-left:24px;


text-align:center;
`
const Cardbottom = styled.div`
display:flex;
justify-content:space-between;
position:absolute;
bottom:20px
`
const Modaldiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Card = styled.div`
  width: 280px;
  margin: 16px;
  word-wrap:break-word;
  position: relative;
`;

const Image = styled.img`
  
  width:100%;
  height: 100%;
  
  transition:.7s ease-in transform;

  &:hover{

 
  
      transform:scale(1.1) rotate(3deg)
    }
  




  `
const Imagediv = styled.div `
width:280px;
height:180px;

width:280px;
height:180px;

  transition:.7s all ease-out;

  

`
const Parag = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #5e6f64;
  margin:12px 0;
  text-align:center;

`;
const Button = styled.button`
  width: 217px;
  height: 50px;
  padding: 0 30px;
  background: #000;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin:20px auto 0;
  border-radius:4px;
  font-family:signika,sans-serif;
 
  &:hover{
    background:rgb(94 111 100);
    transition:.3s ease-in background;
  }
`;
const H4 = styled.h4`


  font-size: 22px;
  font-family:signika,sans-serif;
  color: #5e6f64;
  position: relative;
  text-transform: capitlize;
  
  text-align: center;
  margin:20px 0;

`
const Cardbody = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`
const MYButton = styled.button`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #100cbe;
  color: white;
  border: none;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  margin: 0 auto;
  opacity: 0.49;
`;
const Vdiv = styled.div`
  display: flex;
  justify-content: center;
`;
const H6 = styled.h6`
margin:0 3px;
color:#5e6f64;
font-size:16px;
font-weight:italic;
letter-spacing:1px
`

export {
  Div,
  H6,
  Card,

  Cardbottom,
  Image,
  Parag,
  Button,
  Imagediv,
  H4,
  Minidiv,
  MYButton,
  Modaldiv,
  Vdiv,
  Input,
  Cardbody,
  Span,
};
