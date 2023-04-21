const axios = require('axios');

// const URL = "https://rickandmortyapi.com/api/character/"

function getCharById(req, res){
 const {id} = req.params
 axios
     .get(`https://rickandmortyapi.com/api/character/${id}`)
     .then ((response) => {
      
    try { 
        const {id, name, gender, species, origin, image, status} = response.data;
     res.status(200).json({id, name, gender, species, origin, image, status});
   
     } catch (error) {
     res.status(404).send('Not Fount');

     }
    })
     .catch((reason) => {
       res.status(500).send(reason.message);
     })
    


}



module.exports = getCharById;








// function getCharById (res,id) {
//     axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then ((response) => {
//      const {id, name, gender, species, origin, image, status} = response.data;
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end( JSON.stringify({id, name, gender, species, origin, image, status}) );

//     })
//     .catch((error) => {
//         res.writeHead(500, {'Content-Type': 'text/plain'});
//         res.end(error.message);
//     })
// }

// module.exports = getCharById;