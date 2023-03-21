import React from 'react'
import {useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import styles from './Detail.module.css'


export default function Detail(props) {

  const navigate = useNavigate();
  const {detailId} = useParams();
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((data) => {
        
       data.name ? setCharacter(data) : alert ('no hay personajes con ese ID')
  
  
  
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
  
  }, []);

 

    return (
    <div>
     
    
     <button onClick={() => navigate('/home')} className={styles.btn}>BACK</button>
     
      <div className ={styles.container}>
        
         <img className={styles.img} src={character.image} alt='not found'/>
         <h1 className={styles.h1}>Name: {character.name}</h1>
         <h1 className={styles.h1}>Status: {character.status}</h1>
         <h1 className={styles.h1}>Specie: {character.species}</h1>
         <h1 className={styles.h1}>Gender: {character.gender}</h1>
         <h1 className={styles.h1}>Origin: {character.origin?.name}</h1>
         <h1 className={styles.h1}>Location: {character.location?.name}</h1>
        
      </div> 
      {/* <DivImg>
         <img src={character.image} alt='not found'/>
         </DivImg> */}
        
    
    </div>
  )
}




