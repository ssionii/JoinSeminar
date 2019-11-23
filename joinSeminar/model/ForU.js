const authUtil = require('../module/authUtil');
const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');

const forUDB = [
    {
        forUIdx : 0,
        img : 'https://www.google.com/imgres?imgurl=http%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F8e7520d3786b47cb90ed2c8b58202b79.jpg&imgrefurl=https%3A%2F%2F1boon.kakao.com%2Fdailylife%2F180712_1&docid=J2hlIEY-EgMXdM&tbnid=m-GkW8pjAbL1aM%3A&vet=10ahUKEwiT8q7f6f_lAhWJUN4KHQV6DtcQMwj5ASgXMBc..i&w=644&h=428&client=safari&bih=753&biw=1440&q=마카롱&ved=0ahUKEwiT8q7f6f_lAhWJUN4KHQV6DtcQMwj5ASgXMBc&iact=mrc&uact=8',
        sellerImg : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.crowdpic.net%2Fdetail-thumb%2Fthumb_d_98AB24B84D5E81A72E1B13F25504AF2E.jpg&imgrefurl=https%3A%2F%2Fwww.crowdpic.net%2Fphoto%2F%25ED%2595%2598%25EB%258A%2598-%25EA%25B5%25AC%25EB%25A6%2584-%25EB%25B9%2584%25ED%2596%2589%25EA%25B8%25B0-%25ED%2595%2598%25EB%258A%2598%25EC%2586%258D-%25ED%2592%258D%25EA%25B2%25BD-171269&docid=OBDqU_icmvixJM&tbnid=Xt9aG3qYgsj9lM%3A&vet=10ahUKEwjsgcq96f_lAhVTUd4KHf-HDAwQMwizASgBMAE..i&w=975&h=650&client=safari&bih=753&biw=1440&q=하늘&ved=0ahUKEwjsgcq96f_lAhVTUd4KHf-HDAwQMwizASgBMAE&iact=mrc&uact=8',
        seller : '좋은판매자^0^',
        desc : '마카롱 6구 세트',
        isStar : 0
    },
    {
        forUIdx : 1,
        img : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fscontent-ort2-2.cdninstagram.com%2Fvp%2F126094a3e985a1b9c2fb124ccc148625%2F5DC21BD4%2Ft51.2885-15%2Fsh0.08%2Fe35%2Fs640x640%2F61465033_338628560134887_2022221700922050028_n.jpg%3F_nc_ht%3Dscontent-ort2-2.cdninstagram.com&imgrefurl=https%3A%2F%2Fsaveig.com%2Fp%2FBycIzNdh-de%2F%3Flang%3Dde&docid=tGASdFQoRw-0MM&tbnid=w-HaxS9njm25LM%3A&vet=10ahUKEwj-2_yA6v_lAhXK7WEKHTKrDboQMwiUASg6MDo..i&w=640&h=640&itg=1&client=safari&bih=753&biw=1440&q=아이디어스%20핸드메이드&ved=0ahUKEwj-2_yA6v_lAhXK7WEKHTKrDboQMwiUASg6MDo&iact=mrc&uact=8',
        sellerImg : 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fblogthumb2.naver.net%2F20160401_296%2Fcjddn2009_14595033194419POsQ_JPEG%2Fa-086_1282713581.jpg%3Ftype%3Dw2&imgrefurl=http%3A%2F%2Fm.blog.naver.com%2Fcjddn2009%2F220671671600&docid=a9j90uVkc4EB7M&tbnid=60XRcD6iPEI51M%3A&vet=10ahUKEwiEuv2f6v_lAhUq7GEKHdPOA2EQMwjEASgHMAc..i&w=300&h=300&client=safari&bih=753&biw=1440&q=곰인형&ved=0ahUKEwiEuv2f6v_lAhUq7GEKHdPOA2EQMwjEASgHMAc&iact=mrc&uact=8',
        seller : 'gomgom',
        desc : '뜨개 에어팟 케이스',
        isStar : 1
    },
    {
        forUIdx : 2,
        img : 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fmimimong.com%2Fweb%2Fproduct%2Fbig%2F201904%2F54b25673813365fbb2c416045153a39f.jpg&imgrefurl=http%3A%2F%2Fmimimong.com%2Fproduct%2F%25EA%25B3%25B0%25EB%258F%258C%25EC%259D%25B4%25ED%2591%25B8%25ED%2594%25BC%25EA%25B8%2580%25EB%25A0%259B-%25EC%2597%2590%25EC%2596%25B4%25ED%258C%259F-%25EC%25BC%2580%25EC%259D%25B4%25EC%258A%25A4%2F1759%2F&docid=9yEOw0XUUMPt9M&tbnid=jNhfwHVomd8-rM%3A&vet=10ahUKEwiOnL6w6v_lAhWPMt4KHU_0DeMQMwhYKAcwBw..i&w=500&h=500&client=safari&bih=753&biw=1440&q=에어팟%20케이스&ved=0ahUKEwiOnL6w6v_lAhWPMt4KHU_0DeMQMwhYKAcwBw&iact=mrc&uact=8',
        sellerImg : 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fblogthumb2.naver.net%2F20160401_296%2Fcjddn2009_14595033194419POsQ_JPEG%2Fa-086_1282713581.jpg%3Ftype%3Dw2&imgrefurl=http%3A%2F%2Fm.blog.naver.com%2Fcjddn2009%2F220671671600&docid=a9j90uVkc4EB7M&tbnid=60XRcD6iPEI51M%3A&vet=10ahUKEwiEuv2f6v_lAhUq7GEKHdPOA2EQMwjEASgHMAc..i&w=300&h=300&client=safari&bih=753&biw=1440&q=곰인형&ved=0ahUKEwiEuv2f6v_lAhUq7GEKHdPOA2EQMwjEASgHMAc&iact=mrc&uact=8',
        seller : 'gomgom',
        desc : '푸 에어팟 케이스',
        isStar : 0
    }
];

module.exports = {
    readAll: () => {
        return new Promise((resolve, reject) => {
            //성공
            resolve({
                code:statusCode.OK,
                json:authUtil.successTrue(responseMessage.FOR_U_LIST_SUCCESS, forUDB)
            });
        });
    }
}