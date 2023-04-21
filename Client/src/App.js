import './App.css'
import Cards from './components/Cards'
import Nav from './components/NavBar/Nav';
import React, { useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'
import axios from 'axios';


function App () {

  const location = useLocation();
  
  const [characters,setCharacters] = useState([])

  const [access, setAccess] = useState(false)

  // const username = 'futbolymusica5@gmail.com';

  // const password = 'Valen2003';

  const navigate = useNavigate()


  // CON EXPRESS

  function login(userData) {
    
    const { username, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${username}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }


 // SIN EXPRESS

  // function Login(userData) {

  //  if (userData.username === username && userData.password === password) {
  //   setAccess(true);
  //   navigate('/home')
  //  }
   
  // }

  useEffect(() => {
  
   !access && navigate('/');
  }, [access]);
 

  const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
      (
        data.name ? characters.filter((char) => char.id === data.id).length === 0
        : ''
      )
      
       ? setCharacters([...characters,data]):
         alert ('El personaje ya existe')
         
      
      })
     .catch((error) => console.log (error));
  }
   
  const onClose = (id) => {
    const filtered = characters.filter((char)=> char.id !== id);
    setCharacters(filtered)

  }
  


  
  return (
    <div className='App'>
    
   
     {location.pathname !== '/' && <Nav 
    onSearch={onSearch}/>}
    <Routes>
      <Route path= '/' element= {<Form login={login}/>}/> 
      
      <Route path= '/home' element={ <Cards characters={characters} onClose={onClose} />}/>
      <Route path= '/About' element={ <About />}/>
      <Route path= '/detail/:detailId' element={ <Detail character={characters}/>}/>
      <Route path=  '/Favorites' element= { <Favorites/> }/>

    </Routes>
    </div>
  )
}

export default App
