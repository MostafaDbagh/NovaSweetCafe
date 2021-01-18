import styled from 'styled-components'


const Rdiv = styled.div`
width:240px;
height:210px;
margin:20px;

overflow:hidden;

`
const Rimage = styled.img`
width:100%;
height:170px;
margin-bottom:20px;
transition:all 0.8s ease ;
&:hover{
    transform:scale(1.15)
}
`
const RPara = styled.p`
text-align:center;
font-family: 'Roboto', sans-serif;
font-weight:bold;
font-size:18px;
`
export{Rdiv,Rimage,RPara}