$(function () {

    $("#mainMenu>li").mouseover(function () {
        $(".subMenu").stop().slideDown(800);
        $("#bgArea>#subMenuBG").stop().slideDown(800);
    });
    $("#mainMenu>li").mouseout(function () {
        $(".subMenu").stop().slideUp(400);
        $("#bgArea>#subMenuBG").stop().slideUp(400);

    });

});
