import styled from 'styled-components'

export const Groupdiv = styled.div`
display:flex;
justify-content:space-between;
width:92%;
margin:0 auto;
flex-wrap:wrap;

`
export const Button = styled.button`

  width: 217px;
  height: 50px;
  padding: 0 30px;
  background: rgb(252, 145, 162);
  color:black ;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
margin-top:8px;
  border-radius:4px;
  font-family:signika,sans-serif;
 
  &:hover{
    background:rgb(94 111 100);
    transition:.3s ease-in background;
  }
`;
export const Circldiv = styled.div`
width:60px;
height:70px;
border-radius:50%;
background:white;
line-height:60px;
position:absolute;
top:-29px;
left:144px;

`
export const Genralsec =styled.section`
height:350px;
width:330px;
background:rgb(68 54 53);
position:relative;
border-radius:10px 0 10px 0px;
text-align:center;
margin:8px auto;
margin:0 auto;

`
export const Spanp= styled.p`
width:90%;
margin:10px auto;
color:white;
opacity:0.9;
word-break:break-word;
font-family:signika,sans-serif;
font-size:16px;
over-flow:hidden;
text-align:center;
font-style:italic;
`