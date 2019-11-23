const express = require('express');
const router = express.Router();

const authUtil = require('../module/authUtil');
const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const MdRecom = require('../model/MdRecom');

router.get('/', (req, res) => {
    MdRecom.readAll()
    .then(({code, json}) => {
        res.status(code).send(json);
    }).catch(err => {
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
    });
});

router.get('/like/:mdIdx', (req, res)=>{
    const mdIdx = req.params.mdIdx;
    console.log(mdIdx);

    if(!mdIdx){
        res.status(statusCode.BAD_REQUEST)
        .send(authUtil.successFalse(responseMessage.NULL_VALUE));
        return;
    }else{
        MdRecom.like(mdIdx)
        .then(({code, json}) => {
            res.status(code).send(json);
        }).catch(err => {
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
        });
    }
});

module.exports = router;