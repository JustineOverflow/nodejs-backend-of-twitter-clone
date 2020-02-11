const express = require('express');
const tweetsController = require ('./controller');

const router = module.exports = express.Router();

router.get('/tweets', tweetsController.get);
router.post('/tweets', tweetsController.post);
