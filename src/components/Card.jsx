
import styled from 'styled-components'
import {Link} from 'react-router-dom'
 


const DivStyle = styled.div`
flex:none;
background-color: black;
border-color: black;
border-radius: 15px;
border-style: solid;
width: 23,5%;
padding: 10px;
margin: 20px;
margin-top: 2%;
margin-left: 5%;
margin-right: 2%;
margin-bottom:2%;
box-shadow: 0 0 20px white;
float: left;

&:hover {
 
   transform: scale(1.1);
   transition: all 0.5 ease;
   
}


`;


const DivBoton = styled.div`
margin-bottom: 10px;
button {
   color: white ; 
   background-color: black;
   align-items: center;
   border: 3px solid white;
   font-weight: bold;
   margin-bottom: 3%;
   float: right;
   
&: hover {
color: white;
border: 4px solid  #7800FF;

}} 





`;

 
 const Name = styled.h2`
 color: #B2FF00;
 background-color: black;
 border-radius: 20px;
 border-color:#00FFFB;
 border-style:solid;
 font-family: monospace;
 font-size: 30px;
 margin: 5px;
 padding: 6px;
 text-shadow: 0 0 10px grey;
 
`;



const Species = styled.h3`
color: white;
width: 45%;
border-style: solid;
border-color: #00FFFB;
border-width: 2px;
float: left;
margin-bottom: 5%;

`;




const Gender = styled.h3`
color: white;
border-style: solid;
border-color: #00FFFB;
float: right;
width: 45%;
border-width: 2px;
margin-bottom: 5%;

`;


const Img = styled.img`
float: bottom;
border-radius: 5px;
margin: 10px;
width: 80%
transition:transform .1s;



`;




export default function Card(props) {
   return (
      <DivStyle>
         <DivBoton>
         <button onClick={props.onClose}>X</button>
         </DivBoton>
         <br></br>
         
         
         <Link to={`/detail/${props.id}`} >
            <Name className="card-title">{props.name}</Name>
         </Link>
         
         
         
         <Img src= {props.image} height="250px" alt="Imagen del personaje" />
         
         <div>
           <Species>{props.species}</Species>
           <Gender>{props.gender}</Gender>
         </div>
      </DivStyle>
   );
}
