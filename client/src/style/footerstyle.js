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

display:flex;
justify-content:space-around;
flex-wrap:wrap;
`
const Anchor = styled.a`
color:rgb(251,145,163)
`
const SmallFooterdiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin:76px 0;
`
const Footerpara = styled.div`
position:absolute;
left:50%;
bottom:10px;
text-align:center;
transform:translateX(-50%)

`
export{Footerdiv,SmallFooterdiv,Footercon,Footerpara,Anchor}