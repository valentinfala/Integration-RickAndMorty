import { AGREGAR_PERSONAJE,ELIMINAR_PERSONAJE, FILTER, ORDER} from "./actions.types";
import axios from "axios";

const agregarFavorito = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: AGREGAR_PERSONAJE,
             payload: data,
          });
       });
    };
 };



// const agregarFavorito = (personaje) => {
//     return {
//         type: AGREGAR_PERSONAJE,
//         payload: personaje
//     }
// } 


    const eliminarFavorito = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: ELIMINAR_PERSONAJE,
             payload: data,
       });
       });
    };
 };




// const eliminarFavorito = (id) => {
//     return {
//         type: ELIMINAR_PERSONAJE,
//         payload: id
//     }
// }

const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id   
    }
}



export {
    agregarFavorito,
    eliminarFavorito,
    filterCards,
    orderCards
}