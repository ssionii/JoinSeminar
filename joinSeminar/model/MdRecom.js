const authUtil = require('../module/authUtil');
const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');

const mdRecomDB = [
    {
        mdIdx : 0,
        img : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjKtMeC4v_lAhWyyYsBHYbLCYAQjRx6BAgBEAQ&url=http%3A%2F%2Flounge-b.co.kr%2Fcategory%2F%25EC%2597%25AC%25EC%2584%25B1%25EA%25B0%2580%25EB%25B0%25A9%2F56%2F&psig=AOvVaw2vQu1vhKGHc_IGK4FdxNQn&ust=1574578993911578',
        sellerImg : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ohmycompany.com%2Fuploads%2Freward%2FREWARD_20190621040449717.jpg&imgrefurl=https%3A%2F%2Fwww.ohmycompany.com%2Freward%2F7005&docid=rZGEDqQmW2PX2M&tbnid=LuPXYHaZSujE8M%3A&vet=10ahUKEwiol9ek4v_lAhWWad4KHd2eBygQMwj4ASgDMAM..i&w=692&h=418&client=safari&bih=753&biw=1440&q=꽃&ved=0ahUKEwiol9ek4v_lAhWWad4KHd2eBygQMwj4ASgDMAM&iact=mrc&uact=8',
        seller : '셀러123',
        desc : '베이지색 가죽 가방',
        isStar : 1
    }
];

module.exports = {
    readAll: () => {
        return new Promise((resolve, reject) => {
            //성공
            resolve({
                code:statusCode.OK,
                json:authUtil.successTrue(responseMessage.MD_RECOM_LIST_SUCCESS, mdRecomDB)
            });
        });
    },
    like: (mdIdx) => {
        return new Promise((resolve, reject) => {
            if(mdIdx >= mdRecomDB.length){
                resolve({
                    code:statusCode.BAD_REQUEST,
                    json:authUtil.successFalse(responseMessage.NO_MD)
                });
            }

            if(mdRecomDB[mdIdx].isStar == 0){
                mdRecomDB[mdIdx].isStar = 1;

                resolve({
                    code:statusCode.OK,
                    json:authUtil.successTrue(responseMessage.LIKE_MD_SUCCESS)
                });
            }else if(mdRecomDB[mdIdx].isStar == 1){
                mdRecomDB[mdIdx].isStar = 0;

                resolve({
                    code:statusCode.OK,
                    json:authUtil.successTrue(responseMessage.UNLIKE_MD_SUCCESS)
                });
            }else{
                resolve({
                    code:statusCode.INTERNAL_SERVER_ERROR,
                    json:authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR)
                });
            }
        });
    }
}