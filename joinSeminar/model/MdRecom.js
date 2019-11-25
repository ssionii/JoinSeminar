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
    },
    {
        mdIdx : 1,
        img : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.oddnight.kr%2Fweb%2Fproduct%2Fbig%2F201907%2F0053198196d364256480b558d5fcae07.jpg&imgrefurl=https%3A%2F%2Foddnight.kr%2Fproduct%2F%25ED%2588%25AC%25EB%25AA%2585-%25EC%25B0%25B0%25EB%25A6%25AC-%25EC%2597%2590%25EC%2596%25B4%25ED%258C%259F-%25EC%25BC%2580%25EC%259D%25B4%25EC%258A%25A4-2type%2F330%2F&docid=5ln3dmo5Y0QZUM&tbnid=X-I-tBC24xeT9M%3A&vet=10ahUKEwiOnL6w6v_lAhWPMt4KHU_0DeMQMwhNKAEwAQ..i&w=640&h=640&client=safari&bih=753&biw=1440&q=에어팟%20케이스&ved=0ahUKEwiOnL6w6v_lAhWPMt4KHU_0DeMQMwhNKAEwAQ&iact=mrc&uact=8',
        sellerImg : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ohmycompany.com%2Fuploads%2Freward%2FREWARD_20190621040449717.jpg&imgrefurl=https%3A%2F%2Fwww.ohmycompany.com%2Freward%2F7005&docid=rZGEDqQmW2PX2M&tbnid=LuPXYHaZSujE8M%3A&vet=10ahUKEwiol9ek4v_lAhWWad4KHd2eBygQMwj4ASgDMAM..i&w=692&h=418&client=safari&bih=753&biw=1440&q=꽃&ved=0ahUKEwiol9ek4v_lAhWWad4KHd2eBygQMwj4ASgDMAM&iact=mrc&uact=8',
        seller : '야호',
        desc : '투명 케이스',
        isStar : 0
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