const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const {postFav, deleteFav} = require('./handleFavorites')

module.exports = {
    getCharById,
    login,
    postFav,
    deleteFav
}