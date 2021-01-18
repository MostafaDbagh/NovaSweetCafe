import styled,{keyframes} from 'styled-components'

const motionasidedivleft = keyframes`
0%{left:-100px;}
100%{left:0}
`
const motionasidedivright = keyframes`
0%{right:-100px;}
100%{right:0}
`

const Div = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:90%;
height:158px;
background:#443634;
margin:11px auto;
color:white;
box-shadow:0px 2px 5px 1px black; 
text-align:center;
`
const Asidiv=styled.div`
width:25%;
height:100%;

color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin:0 32px;
font-size:14px;
font-weight:bold;
font-family: 'Signika', sans-serif;
&:first-child{
    animation:${motionasidedivleft} .6s 1 ;
}
&:last-child{
    animation:${motionasidedivright} .9s 1 ;
}
position:relative;
over-flow:hidden;
@media(max-width:820px){
     visibility: hidden;
    
}
`
const Numberfont = styled.p`
font-size:21px;
font-weight:bold;

`
const Descdiv = styled.p`
font-family: 'Lobster', cursive;
text-align:center;
@media(max-width:550px){
    widht:100%;
}
`
 const Logodiv2 = styled.div`
 width:50%;
 height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:cetner;
@media(max-width:750px){
    width:100%;
}
`

export {Div,Asidiv,Numberfont,Descdiv,Logodiv2 }