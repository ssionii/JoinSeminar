const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const authUtil = require('../module/authUtil');


const goldClassDB = [{
    goldClassIdx: 0,
    storeImg: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjY6KaN4f_lAhXvFqYKHQByDesQjRx6BAgBEAQ&url=http%3A%2F%2Fm.blog.naver.com%2Fivf0123%2F221201526745&psig=AOvVaw17kjnaGswo3k7ZmJ308aaG&ust=1574578752891912',
    storeName: '',
    classImg: '',
    className: '',
    like: 1,
    isHot: 1
},{
    goldClassIdx: 1,
    storeImg: '',
    storeName: '',
    classImg: '',
    className: '',
    like: 0,
    isHot: 0
},{
    goldClassIdx: 2,
    storeImg: '',
    storeName: '',
    classImg: '',
    className: '',
    like: 0,
    isHot: 1
}]


const goldClass = {
    readHot: () => {
        return new Promise((resolve, reject) => {
            const hotClass = goldClassDB.filter(it => it.isHot == 1);
            const data = {
                goldClass : hotClass,
                goldClassCount: hotClass.length
            }
            resolve({
                code:statusCode.OK,
                json:authUtil.successTrue(responseMessage.READ_HOT_GOLD_CLASS_SUCCESS, data)
            });
        });
    },

    readNew: () => {
        return new Promise((resolve, reject) => {
            
            const data = {
                goldClass : goldClassDB,
                goldClassCount: goldClassDB.length
            }

            resolve({
                code:statusCode.OK,
                json:authUtil.successTrue(responseMessage.READ_NEW_GOLD_CLASS_SUCCESS, data)
            });
        });
    },
    readAll: () => {
        return new Promise((resolve, reject) => {
            const data = {
                goldClass : goldClassDB,
                goldClassCount: goldClassDB.length
            }

            resolve({
                code:statusCode.OK,
                json:authUtil.successTrue(responseMessage.READ_ALL_GOLD_CLASS_SUCCESS, data)
            });
        });
    },
    like: (idx) => {
        return new Promise((resolve, reject) => {
            if(idx >= goldClassDB.length){
                resolve({
                    code:statusCode.BAD_REQUEST,
                    json:authUtil.successFalse(responseMessage.NO_GOLD_CLASS)
                });
            }

            if(goldClassDB[idx].like == 0){
                goldClassDB[idx].like = 1;

                resolve({
                    code:statusCode.OK,
                    json:authUtil.successTrue(responseMessage.LIKE_GOLD_CLASS_SUCCESS)
                });
            }else if(goldClassDB[idx].like == 1){
                goldClassDB[idx].like = 0;

                resolve({
                    code:statusCode.OK,
                    json:authUtil.successTrue(responseMessage.UNLIKE_GOLD_CLASS_SUCCESS)
                });
            }else{
                resolve({
                    code:statusCode.INTERNAL_SERVER_ERROR,
                    json:authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR)
                });
            }

            
        })
    }
}

module.exports = goldClass