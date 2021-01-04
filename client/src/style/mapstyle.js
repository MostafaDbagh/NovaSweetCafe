import { urlencoded } from 'body-parser'
import styled from 'styled-components'
import bg from '../images/bg.jpg'
export const MapDiv  = styled.div`
display:grid;
width:90%;
height:600px;
margin:52px auto;
grid-template-columns : 1fr 2fr;
grid-template-rows:1fr 1fr ;
justify-content:;
align-item:center;
grid-gap:10px;

`
const Novamap= styled.iframe`
gird-column:
`
export const Seconddiv = styled.div`

grid-row:1/3;
grid-column:2/3;
text-align:center;
background:url(${bg})



`