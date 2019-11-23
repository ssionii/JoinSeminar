const authUtil = require('../module/authUtil');
const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');

const bestSellingDB = [
    {
        bestIdx : 0,
        img : 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjKtMeC4v_lAhWyyYsBHYbLCYAQjRx6BAgBEAQ&url=http%3A%2F%2Flounge-b.co.kr%2Fcategory%2F%25EC%2597%25AC%25EC%2584%25B1%25EA%25B0%2580%25EB%25B0%25A9%2F56%2F&psig=AOvVaw2vQu1vhKGHc_IGK4FdxNQn&ust=1574578993911578',
        sellerImg : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ohmycompany.com%2Fuploads%2Freward%2FREWARD_20190621040449717.jpg&imgrefurl=https%3A%2F%2Fwww.ohmycompany.com%2Freward%2F7005&docid=rZGEDqQmW2PX2M&tbnid=LuPXYHaZSujE8M%3A&vet=10ahUKEwiol9ek4v_lAhWWad4KHd2eBygQMwj4ASgDMAM..i&w=692&h=418&client=safari&bih=753&biw=1440&q=꽃&ved=0ahUKEwiol9ek4v_lAhWWad4KHd2eBygQMwj4ASgDMAM&iact=mrc&uact=8',
        seller : '셀러123',
        desc : '베이지색 가죽 가방',
        isStar : 1
    },
    {
        bestIdx : 1,
        img : 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fm.xn--2e0bs4kirwfni.kr%2Fweb%2Fproduct%2Fbig%2F201906%2Fd19df4b4b0c3ad0a4c096ad9e33f690b.jpg&imgrefurl=http%3A%2F%2Fm.xn--2e0bs4kirwfni.kr%2Fproduct%2F2cm-%25EC%25B0%25A9%25ED%2595%259C%25EA%25B5%25AC%25EB%2591%2590-re-6030-%25EB%25A0%2588%25EB%258D%2594-%25ED%2586%25B5%25EA%25B5%25BD-%25EB%25AF%25B8%25EB%2593%25A4%25ED%259E%2590-%25EB%25B0%25B4%25EB%2594%25A9-%25EC%258A%25AC%25EB%25A7%2581%25EB%25B0%25B1%2F1814%2Fcategory%2F49%2Fdisplay%2F1%2F&docid=WMiuba2R4PO6xM&tbnid=Zx4KxOGow4xO_M%3A&vet=10ahUKEwiRxunm5v_lAhWByYsBHe56CUgQMwhXKAowCg..i&w=500&h=500&itg=1&client=safari&bih=753&biw=1440&q=슬링백%20구두&ved=0ahUKEwiRxunm5v_lAhWByYsBHe56CUgQMwhXKAowCg&iact=mrc&uact=8',
        sellerImg : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ohmycompany.com%2Fuploads%2Freward%2FREWARD_20190621040449717.jpg&imgrefurl=https%3A%2F%2Fwww.ohmycompany.com%2Freward%2F7005&docid=rZGEDqQmW2PX2M&tbnid=LuPXYHaZSujE8M%3A&vet=10ahUKEwiol9ek4v_lAhWWad4KHd2eBygQMwj4ASgDMAM..i&w=692&h=418&client=safari&bih=753&biw=1440&q=꽃&ved=0ahUKEwiol9ek4v_lAhWWad4KHd2eBygQMwj4ASgDMAM&iact=mrc&uact=8',
        seller : '셀러123',
        desc : '슬링백 구두(4색)',
        isStar : 0
    },
    {
        bestIdx : 2,
        img : 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fimage.msscdn.net%2Fimages%2Fgoods_img%2F20181203%2F916477%2F916477_1_500.jpg&imgrefurl=https%3A%2F%2Fm.store.musinsa.com%2Fapp%2Fproduct%2Fdetail%2F916477%2F0&docid=_RnTm4VoVHv-kM&tbnid=EiU6Cj_simycrM%3A&vet=10ahUKEwikvNOj6f_lAhUP7WEKHcjZBTIQMwiWASgYMBg..i&w=500&h=500&client=safari&bih=753&biw=1440&q=여자%20시계&ved=0ahUKEwikvNOj6f_lAhUP7WEKHcjZBTIQMwiWASgYMBg&iact=mrc&uact=8',
        sellerImg : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.crowdpic.net%2Fdetail-thumb%2Fthumb_d_98AB24B84D5E81A72E1B13F25504AF2E.jpg&imgrefurl=https%3A%2F%2Fwww.crowdpic.net%2Fphoto%2F%25ED%2595%2598%25EB%258A%2598-%25EA%25B5%25AC%25EB%25A6%2584-%25EB%25B9%2584%25ED%2596%2589%25EA%25B8%25B0-%25ED%2595%2598%25EB%258A%2598%25EC%2586%258D-%25ED%2592%258D%25EA%25B2%25BD-171269&docid=OBDqU_icmvixJM&tbnid=Xt9aG3qYgsj9lM%3A&vet=10ahUKEwjsgcq96f_lAhVTUd4KHf-HDAwQMwizASgBMAE..i&w=975&h=650&client=safari&bih=753&biw=1440&q=하늘&ved=0ahUKEwjsgcq96f_lAhVTUd4KHf-HDAwQMwizASgBMAE&iact=mrc&uact=8',
        seller : '좋은판매자^0^',
        desc : '브라운 시계',
        isStar : 0
    }
];

module.exports = {
    readAll: () => {
        return new Promise((resolve, reject) => {
            //성공
            resolve({
                code:statusCode.OK,
                json:authUtil.successTrue(responseMessage.BEST_SELLING_LIST_SUCCESS, bestSellingDB)
            });
        });
    },
    like: (bestIdx) => {
        return new Promise((resolve, reject) => {
            if(bestIdx >= bestSellingDB.length){
                resolve({
                    code:statusCode.BAD_REQUEST,
                    json:authUtil.successFalse(responseMessage.NO_BEST_SELLING)
                });
            }

            if(bestSellingDB[bestIdx].isStar == 0){
                bestSellingDB[bestIdx].isStar = 1;

                resolve({
                    code:statusCode.OK,
                    json:authUtil.successTrue(responseMessage.LIKE_BEST_SELLING_SUCCESS)
                });
            }else if(bestSellingDB[bestIdx].isStar == 1){
                bestSellingDB[bestIdx].isStar = 0;

                resolve({
                    code:statusCode.OK,
                    json:authUtil.successTrue(responseMessage.UNLIKE_BEST_SELLING_SUCCESS)
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