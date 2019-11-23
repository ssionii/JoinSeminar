const express = require('express');
const router = express.Router();

const authUtil = require('../module/authUtil');
const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const BestSelling = require('../model/BestSelling');

router.get('/', (req, res) => {
    BestSelling.readAll()
    .then(({code, json}) => {
        res.status(code).send(json);
    }).catch(err => {
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
    });
});

router.get('/like/:bestIdx', (req, res)=>{
    const bestIdx = req.params.bestIdx;
    console.log(bestIdx);

    if(!bestIdx){
        res.status(statusCode.BAD_REQUEST)
        .send(authUtil.successFalse(responseMessage.NULL_VALUE));
        return;
    }else{
        BestSelling.like(bestIdx)
        .then(({code, json}) => {
            res.status(code).send(json);
        }).catch(err => {
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
        });
    }
});

module.exports = router;