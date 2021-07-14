const router = require('express').Router();
const { getMovies, addMovie, deleteMovie } = require('../controllers/movies');
const { validateObjId } = require('../middlewares/validations');

router.get('/', getMovies);
router.post('/', addMovie);
router.delete('/:_id', validateObjId, deleteMovie);

module.exports = router;
