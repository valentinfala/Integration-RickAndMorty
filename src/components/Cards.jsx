import Card from './Card';
import styled from 'styled-components';


const DivSty = styled.div`
   display: flex;
   align-content: center;
   justify-content: center;
   flex-wrap: wrap;
   
`;





export default function Cards(props) {
   const { characters }  = props;
   
   return <DivSty> 
      
      {characters.map((char,index) =>  <Card   
   id={char.id}
   key={index}  
   name={char.name}
   species={char.species}
   gender={char.gender}
   image={char.image}
   onClose={() => props.onClose(char.id)}
   /> )}
   
   </DivSty>
}
