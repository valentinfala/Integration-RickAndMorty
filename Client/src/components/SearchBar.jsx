
import styled from 'styled-components';
import React, {useState} from 'react';

const Input = styled.input`
font-size: 19px;
background-color: black;
color: #00FFFB;
font-family: monospace;
border-color: white;
border-radius: 5px;
 ::placeholder {
   color:#00FFFB;
}
`;


const Button = styled.button`
color: #00FFFB;
width: 10%;
background-color: black;
border-radius: 4px;
border: 2px solid white ;
font-family: monospace;
font-size: 20px;
font-weight: bold;
margin: 5px

`;
 






export default function SearchBar(props) {
   
   const [character,setCharacter] = useState('');
   const handleInputChange = (event) => {
   const {value} = event.target;
   setCharacter(value)
  
   
}
   return (
      <div>
         <Input type='search' placeholder='Search character' onChange={handleInputChange}/>
      <Button onClick={() => props.onSearch(character)}>ADD</Button>
      
      </div>
   );
}
