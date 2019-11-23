const express = require('express');
const router = express.Router();

const authUtil = require('../module/authUtil');
const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const ForU = require('../model/ForU');

router.get('/', (req, res) => {
    ForU.readAll()
    .then(({code, json}) => {
        res.status(code).send(json);
    }).catch(err => {
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
    });
});

router.get('/like/:forUIdx', (req, res)=>{
    const forUIdx = req.params.forUIdx;
    console.log(forUIdx);

    if(!forUIdx){
        res.status(statusCode.BAD_REQUEST)
        .send(authUtil.successFalse(responseMessage.NULL_VALUE));
        return;
    }else{
        ForU.like(forUIdx)
        .then(({code, json}) => {
            res.status(code).send(json);
        }).catch(err => {
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
        });
    }
});

module.exports = router;