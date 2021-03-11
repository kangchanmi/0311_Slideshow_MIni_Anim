$(function () {
    //    setInterval(커스텀함수명, 반복실행시간간격);
    //    setInterval(sample, 3000); => 일정 시간 동안 반복시켜주는 함수
    //    sample();
    setInterval(sample, 3000);  /*화면 3초 동안 띄워주기*/
    function sample() {
        //커스텀 함수 = 사용자 정의 함수,
        // 호출하기 전엔 실행 안 됨
        $("#innerFrame").animate(
            {"margin-left": "-200px" },
            1000,   /* 바뀌는데 걸리는 시간 */
            "swing",
            function () {
                $("span:first-child").insertAfter("span:last-child");
                $("#innerFrame").css({ "margin-left": "0px" });
            }
        );
    }


});
