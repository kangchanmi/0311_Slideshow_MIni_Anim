function dataOut() {

    var data = document.getElementById("insData").value
    /*get + element + by + id*/
    // 변수(variable, 배리어블) => 특정 값(=data, 데이터)을 '임.시.보.관'하는
    //                                        문자 또는 문자열
    //변수명을 만드는 규칙은 함수명을 만드는 규칙과 동일함
    //(같은 이름X, 숫자로 이름 시작 안 됨, ...)
//    alert(data);
    document.getElementById("output").innerText = data;
    /* var로 data라는 이름으로  임시보관 해놓았기 때문에 data라고 입력 */
    document.getElementById("output").style.color = "#fb0";
    document.getElementById("output").style.fontWeight = "bold";
    document.getElementById("output").style.fontStyle = "italic"
}
