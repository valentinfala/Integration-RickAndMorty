import styled from 'styled-components'
import {Link} from 'react-router-dom'
 import { agregarFavorito, eliminarFavorito} from '../redux/actions';
import {connect} from 'react-redux'
import React, { useState, useEffect } from 'react';

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

display:flex;
justify-content: space-between;

button {
   width: 40px;
   height: 30px;
   color: white ; 
   background-color: black;
   align-items: center;
   font-weight: 700; 
   font-size: 18px
 

}

   
   
`;

 
 const Name = styled.h2`
 color: #B2FF00;
 background-color: black;
 border-radius: 20px;
 
 
 font-family: monospace;
 font-size: 30px;
 margin: 5px;
 padding: 5px;
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


const ALink = styled(Link)`
    text-decoration: underline #00FFFB;

   
`;




 function Card({id,name,species,gender,image,onClose,eliminarFavorito,agregarFavorito,myFavorites}) {
  
  
  const [isFav, setIsFav] = useState(false);


  const handleFavorite = () => {
   if (isFav) {
       setIsFav(false)
       eliminarFavorito(id)
   }
   else {
      setIsFav(true)
      agregarFavorito({id,name,species,gender,image,onClose})
   }
}


useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
    
   });
}, [myFavorites]);
  


  
   return (
      <DivStyle>
         
         
         <DivBoton>

        
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
      
     
         <button onClick={onClose}>X</button>
         
         
         </DivBoton>
         
        
         
         
         <ALink to={`/detail/${id}`} >
           
            <Name className="card-title">{name}</Name>
            
         </ALink>
         
         
         
         <Img src= {image} height="250px" alt="Imagen del personaje" />
         
         <div>
           <Species>{species}</Species>
           <Gender>{gender}</Gender>
         </div>
      </DivStyle>
   );
}


const mapStateToProps = (state) => {
   return { 
      myFavorites: state.myFavorites
   }

}




const mapDispatchToProps = (dispatch) => {
   return {
      agregarFavorito: (character) => {
         dispatch(agregarFavorito(character))
      },
      eliminarFavorito: (id) => {
         dispatch(eliminarFavorito(id))
      }
   }
      
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Card)