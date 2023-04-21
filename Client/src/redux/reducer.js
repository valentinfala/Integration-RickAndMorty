import { AGREGAR_PERSONAJE, ELIMINAR_PERSONAJE, FILTER, ORDER } from "./actions.types";


const initialState = {
  myFavorites: [],
  allCharacters: []

}; 

export const rootReducer = (state = initialState, {type,payload}) => {
          
           switch (type) {
            case AGREGAR_PERSONAJE: 
              return  { ...state, myFavorites: payload, allCharacters: payload }

            case ELIMINAR_PERSONAJE:
              return { ...state, myFavorites: payload };
            
            
               // const filtered = state.myFavorites.filter((character) => character.id !== payload)
                // return {
                //   ...state,
                //  myFavorites: filtered
                
                // }

            case FILTER:     
            const filterGender = [...state.allCharacters].filter((character) => character.gender.toLowerCase() === payload.toLowerCase())
            return {
              ...state,
             myFavorites: filterGender,
            
            }

            case ORDER: 
            const filterOrder = [...state.allCharacters].sort((a,b) => {
              if (a.id > b.id) {
                return payload === 'Ascendente' ? 1 : -1
              } else if ( a.id < b.id ) {
                return payload === 'Descendente' ? 1 : -1
              
              }
              else { 
                return 0
              }
            
              })
            return {
              ...state,
              myFavorites: filterOrder
            }
         
           default: return {
            ...state
           }


           }

}