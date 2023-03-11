const { Router } = require('express');
const router = Router();

const routerPostPreference = require('./postPreference');
router.use('/postpreferences',routerPostPreference)

const routerFeedback = require('./getFeedback');
router.use('/getfeedback',routerFeedback)

module.exports = router;
 