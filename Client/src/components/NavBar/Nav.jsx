
import SearchBar from '../SearchBar';
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css'






// const NavLinkMe = ({ to, children, ...props}) => {
//     return ( 
//         <NavLink {...props} to={to} className= {({isActive}) => isActive ? Nav.active : Nav.disable} > {children} </NavLink> ); };


export default function Nav(props) {

    return (

       <div className= {styles.nav}>
        
       
       
        <img src= 'https://web.static.nowtv.com/de/images/09-2022/Filme_Serien/WOW_Assets_LP_RickMorty/TT.png?downsize=1200:*&output-format=webp&output-quality=70' className={styles.img}></img>
          
           
             <NavLink className= {({isActive}) => isActive ? styles.active : styles.disable} to='/home'>Home</NavLink>
             <NavLink className= {({isActive}) => isActive ? styles.active : styles.disable} to='/About'>About us</NavLink>
             <NavLink className= {({isActive}) => isActive ? styles.active : styles.disable} to='/Favorites'>Favorites</NavLink>
             <SearchBar className= {styles.search}onSearch={(characterID) => props.onSearch(characterID)}/>
           
       
    </div>
    
    )
}
