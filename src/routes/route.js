const welcome = require('../logger1/logger1');
const myDetails = require('../util/helper');
const format = require('../validator/formatter');
let obj = require('./logger')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    welcome.welcoming();
    myDetails.date();
    myDetails.month();
    myDetails.batchInfo();
    console.log(format.trim("            functionUp            "));
    console.log(format.loweCase("funCTIonUp"));
    console.log(format.upperCase("functionUp"));
    obj.printMessage('thorium')
    console.log(obj.endpoint)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res){
    res.send('my first ever api!')
});

module.exports = router;
