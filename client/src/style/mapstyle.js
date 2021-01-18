import { urlencoded } from 'body-parser'
import styled from 'styled-components'
import bg from '../imagesC/shohada.jpg'







export const Parentdiv = styled.div`
width:90vw;
height:650px;

display:grid;
grid-template-columns:1fr 2fr;
grid-template-rows:1fr 1fr;
grid-gap:3px;
margin:0 auto;
@media(max-width:950px){
    grid-template-rows:270px  1fr;
    grid-template-columns:1fr 1fr;
    
}
`
export const Twodiv = styled.div`

background:red;


grid-row:2/3;
@media(max-width:950px){
  
    grid-column:1/2;
    grid-row:1/2;
}
`
export const Onediv= styled.div`

background:green;
grid-column:1/2;
@media(max-width:950px){
  
    grid-column:2/3;
}
`
export const Threediv= styled.div`


grid-column:2/3;
grid-row:1/3;
background:url(${bg});
@media(max-width:950px){
  
    grid-column:1/3;
    
    grid-row:2/3;
}
`
export const MapDiv  = styled.div`
width:90vw;
margin:0 auto;
display:grid;
height:530px;
grid-template-rows:repeat(2,1fr 2fr)
grid-template-columns:repeat(2,1fr 2fr)

`
 export const Novamap= styled.iframe`

`
export const Novamap2 = styled.iframe`

`
export const Seconddiv = styled.div`
gird-column:

text-align:center;
background:url(${bg})

`
export const Inputdiv = styled.div`
display:flex;
margin:"0 auto";
justifyContent:'space-around';
@media(max-width:600px){
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:20px;
}
`



export const Input = styled.input`
width:${props => props.width};
height:${props => props.height};
background:${props => props.background || 'white'}
padding:18px 19px 15px;
margin:0px 30px 30px 0;
font-family:signika,sans-serif;
&::placeholder{
    color:${props => props.color}
}
`
export const Textarea = styled.textarea`
width:${props => props.width};
height:${props => props.height};
padding:18px 19px 15px;
margin:0 0px 10px 0;
font-family:signika,sans-serif;
@media(max-width:600px){
    width:390px;

}
&::placeholder{
    color:rgb(34,32,29)
}
`
export const Button = styled.button`
width:156px;
height:52px;
padding:18px 22px 15px;
color:white;
background:rgb(252,145,162);
border:none;
outline:none;
font-family:signika,sans-serif;
font-size:14px;

`
export const Lastinput = styled.input`
width: 180px;
height:60px;
padding:20px 22px 19px;
backgroudn:rgb(251,145,163);
margin-right:30px;
font-family:signika,sans-serif;
&::placeholder{
    color:white
}
`
export const Lastbutton= styled.button`
width: 134px;
height:56px;
font-family:signika,sans-serif;
padding:20px 22px 19px;
backgroudn:rgb(251,145,163);
margin-right:30px;
&::placeholder{
    color:white
}
`

