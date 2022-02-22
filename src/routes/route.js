//adding here
const mod = require("./logger/logger")
const util = require("../util/helper")
const express = require('express');
const { json } = require("body-parser");
const router = express.Router();


router.get('/test-me', function(req, res) {
    res.send('welcome to nodejs')
    console.log(util.d());
    console.log(util.m());
    console.log(util.getBaInfo());



});

router.get('hello', function(req, res) {
    res.send('welcome to my first web application .I am Deependra ,and i am a part of FunctionUp!')
    mod.welMsg("welcome to my first web application .I am Deependra ,and i am a part of FunctionUp!")



});

module.exports = router;