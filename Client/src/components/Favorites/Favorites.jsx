import React from 'react'
import { connect } from 'react-redux'
import Card from '../Card'
import { useDispatch } from 'react-redux'
import { orderCards, filterCards } from '../../redux/actions'
 
function Favorites({myFavorites}) {
  
  const dispatch = useDispatch()
  
    return (
    <div>
      <div>
      <select name='Order'  onClick={(e) => {
        dispatch(orderCards(e.target.value))
      }}>
        <option value='Ascendente'>Ascendente</option>
        <option value='Descendente'>Descendente</option>
      </select>
      <select name='Filter' onClick={(e) => {
        dispatch(filterCards(e.target.value))
      }}>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>

      </select>

      </div>
      {myFavorites?.map(({ id, name, species, image, gender}) => 
    (
     <Card 
     key={id}
     id={id}
     name={name}
     species={species}
     image={image}
     gender={gender}     
     />



    ))}

    </div>
  )
}

const mapStateToProps = (state) => {
    return {
    myFavorites: state.myFavorites
    }
  } 
  


export default connect(mapStateToProps,null)(Favorites)