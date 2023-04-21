import React from 'react'
import validate from './validation'
import styles from './Form.module.css'








export default function Form(props) {
const [userData, setUserData] = React.useState({ username: '',
password: '' });
  
const [errors, setErrors] = React.useState({ username: '',
password: '' });


const handleInputChange = (event) => {
const {name,value} = event.target

setUserData({
  ...userData,
[name]: value
})

setErrors(validate({
  ...userData,
  [name]: value
})
)
console.log(errors)
}


const handleSubmit = (event) => {
  event.preventDefault();
  props.login(userData)
}
  

  
  return (
    <form onSubmit={handleSubmit} className= {styles.container}>
      <h2>Log in to join the rick and morty's adventures</h2>
       <img className={styles.image} src='https://media3.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif'></img>
       <label>Username:</label>
        <input type='text' name='username'value={userData.username} onChange={handleInputChange} placeholder= 'write your username' className={styles.input} ></input>
        {errors.username ? <p style={{color: 'red'}}>{errors.username}</p> : null}

       <label>Password:</label>
        <input type='text' name='password' value={userData.password} onChange={handleInputChange} placeholder= 'write your password' className={styles.input}></input>
        {errors.password ? <p style={{color: 'red'}}>{errors.password}</p> : null}

     <button type='submit' className={styles.btn}>Log In</button>

    </form>
  )
}

 