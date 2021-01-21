import styled from 'styled-components'

const Footercon = styled.div`
width:90vw;

margin:0 auto;
background:#443634;
color:white;
border-radius:20px;
position:relative;


`
const Footerdiv = styled.div`
height:400px;
display:grid;
grid-template-columns:1fr 1fr 1fr;
align-content:center;
grid-row-gap:10px;
@media(max-width:650px){
    height:auto;
    grid-template-columns:1fr;
    grid-template-rows:1fr 1fr 1fr;
}
`
const Anchor = styled.a`
color:rgb(251,145,163)
`
const SmallFooterdiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;


`
const Footerpara = styled.div`
width:100%;
position:absolute;
left:50%;
bottom:10px;
text-align:center;
transform:translateX(-50%)

`
export{Footerdiv,SmallFooterdiv,Footercon,Footerpara,Anchor}