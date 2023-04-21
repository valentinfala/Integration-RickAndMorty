


const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function validate(userData) {
  
    const errors = {};

   if (!regexEmail.test(userData.username)) {
    errors.username = 'se requiere un email'
   }
  if (!userData.username ){
    errors.username = 'la casilla esta vacia'
  }
  if (userData.username.length > 35){
    errors.username = 'el username no puede tener mas de 35 caracteres'
  }
 
   if(userData.password.search(/[a-z]/) < 0) { 
    
    errors.password = 'La contraseña debe contener al menos una letra minuscula' 
    
    } else if(userData.password.search(/[A-Z]/) < 0) { 
    
      errors.password = 'La contraseña debe contener al menos una letra mayuscula'
    
    } else if(userData.password.search(/[0-9]/) < 0) { 
    
      errors.password = 'La contraseña debe contener al menos un numero'
 }
   
  if ( 6 > userData.password.length > 10 ) {
    errors.password = 'la contraseña debe tener una longitud entre 6 y 10 caracteres'
  }
  
  return errors;
}
