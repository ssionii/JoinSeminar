const express = require('express');
const router = express.Router({mergeParams: true});
const GoldClass = require('../../model/GoldClass');

const statusCode = require('../../module/statusCode');
const responseMessage = require('../../module/responseMessage');
const authUtil = require('../../module/authUtil');

// hot, new, all 가져오기
router.get('/:category', (req, res)=>{
    const category = req.params.category;
    console.log(category);
    
    if(!category){
        GoldClass.readAll()
        .then(({code, json}) => {
            res.status(code).send(json);
        }).catch(err => {
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
        });
    }else if(category == 0){
        GoldClass.readHot()
        .then(({code, json}) => {
            res.status(code).send(json);
        }).catch(err => {
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
        });
    }else if(category == 1){
        GoldClass.readNew()
        .then(({code, json}) => {
            res.status(code).send(json);
        }).catch(err => {
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
        });
    }else{
        res.status(statusCode.NOT_FOUND)
        .send(authUtil.successFalse(responseMessage.NULL_VALUE));
    }
})

router.get('/like/:goldClassIdx', (req, res)=>{
    const goldClassIdx = req.params.goldClassIdx;
    console.log(goldClassIdx);

    if(!goldClassIdx){
        res.status(statusCode.BAD_REQUEST)
        .send(authUtil.successFalse(responseMessage.NULL_VALUE));
        return;
    }else{
        GoldClass.like(goldClassIdx)
        .then(({code, json}) => {
            res.status(code).send(json);
        }).catch(err => {
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
        });
    }
})
module.exports = router;