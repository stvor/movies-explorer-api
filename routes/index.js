const router = require('express').Router();
const userRoutes = require('./users');
const moviesRoutes = require('./movies');

router.use('/users', userRoutes);
router.use('/movies', moviesRoutes);

module.exports = router;
