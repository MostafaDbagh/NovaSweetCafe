import styled from 'styled-components'

const Navbarh = styled.div`
width:96%;
height:70px;
margin:0 auto;
box-shadow:0px 0px 2px 0px black;
display:flex;
justify-content:center;
align-items:center;
position:relative;
left:50%;
margin-left:-47%;

`
const Unorderlist = styled.ul`
display:flex;
margin:0;




`
const List = styled.li`
list-style:none;
padding:12px;
margin-right:12px;



`
const Anchor = styled.a`
f0nt-size:14px;
&:hover{
    text-decoration:none;
    color:red;
}

`

export {Navbarh,Unorderlist,List,Anchor}