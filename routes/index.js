const router = require('express').Router();
const userRoutes = require('./users');
const moviesRoutes = require('./movies');
const { createUser, login } = require('../controllers/users');

router.post('/signup', createUser);
router.post('/signin', login);
router.use('/users', userRoutes);
router.use('/movies', moviesRoutes);

module.exports = router;
