const router = require('express').Router();
const userRoutes = require('./users');
const moviesRoutes = require('./movies');
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');

router.post('/signup', createUser);
router.post('/signin', login);
router.use(auth);
router.use('/users', userRoutes);
router.use('/movies', moviesRoutes);

module.exports = router;
