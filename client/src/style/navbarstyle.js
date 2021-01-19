import styled from 'styled-components'

const Menu = styled.div`

display:flex;
flex-wrap:wrap;
align-items:center;





`
const Logo = styled.section`

text-align:center;


`
const Joindiv = styled.div`
display:flex;
`
const Image = styled.img`

height:90px;
width:260px;
margin:0 40px 0 40px;
@media(max-width:500px){
    margin:0
}
`
const Unorderlist = styled.ul`

display:flex;

padding:0;
`

const Listitem = styled.li`
list-style:none;
margin:0 12px;
padding:20px;


`
const Anchore = styled.a`
text-decoration:none;
font-size:14px;
color:#3e3e3e;
font-weight:bold;
font-family: 'Roboto', sans-serif;
color:#white;
&:hover{
    color:#4463ea;
};

`






export {Unorderlist,Listitem,Logo,Anchore,Menu,Image,Joindiv};

// const Navbarh = styled.div`
// width:96%;
// height:70px;
// margin:0 auto;
// box-shadow:0px 0px 2px 0px black;
// display:flex;
// justify-content:center;
// align-items:center;
// position:relative;
// left:50%;
// margin-left:-47%;

// `
// const Unorderlist = styled.ul`
// display:flex;
// margin:0;




// `
// const List = styled.li`
// list-style:none;
// padding:12px;
// margin-right:12px;



// `
// const Anchor = styled.a`
// f0nt-size:14px;
// &:hover{
//     text-decoration:none;
//     color:red;
// }

// `

// export {Navbarh,Unorderlist,List,Anchor}