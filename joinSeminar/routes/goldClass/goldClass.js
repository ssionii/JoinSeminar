const express = require('express');
const router = express.Router({mergeParams: true});

const statusCode = require('../../module/statusCode');
const responseMessage = require('../../module/responseMessage');
const authUtil = require('../../module/authUtil');

// hot, new, all 가져오기
router.get('/:category', (req, res)=>{
    const category = req.params.category;
    if(!category){
        res.status(statusCode.BAD_REQUEST)
        .send(authUtil.successFalse(responseMessage.NULL_VALUE));
        return;
    }
});

module.exports = router;