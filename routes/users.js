const router = require('express').Router();

router.get('/me', getProfile);
router.patch('/me', updateProfile);

module.exports = router;
