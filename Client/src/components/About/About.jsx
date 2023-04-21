import React from 'react';
import styles from './About.module.css'
import {Link} from 'react-router-dom'

export default function About() {
  return (
   <div className= {styles.container}>
      <h1 className={styles.title}>About us</h1>
      <h3>Esta es una aplicacion sobre la serie Rick y Morty (Rick and Morty en Estados Unidos) la cual es una serie animada de televisión estadounidense para adultos creada por Dan Harmon y Justin Roiland, cuyo estreno tuvo lugar el 2 de diciembre de 2013 en Adult Swim. La primera temporada cuenta con once episodios de veintidós minutos y debido al gran éxito de la serie después de que se emitieran los primeros seis episodios en el canal, Adult Swim ya había confirmado que sería renovado para una nueva temporada. El programa esta basado en uno de los satíricos cortos animados para Channel 101, bautizado como The Real Animated Adventures of Doc and Mharti por Justin Rolland, siendo este una parodia del popular filme de 1985 llamado Volver al Futuro. </h3>
     

      <span>Creada por: Valentin Falanga</span>
      <Link to=''></Link>
    
  
  </div>
    )
  }

