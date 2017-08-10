$(function () {

    var i = 0;
    $(".menu_btn").click(function () {
        $(".menu").stop(true, true).slideToggle();
        i++;
        if (i %2 == 1) {
            $(".menu_btn .span1").addClass("span11").removeClass("span111");
            $(".menu_btn .span2").addClass("span22").removeClass("span222");
            $(".menu_btn .span3").addClass("span33").removeClass("span333");
        } else if(i %2 == 0) {
            $(".menu_btn .span1").removeClass("span11").addClass("span111");
            $(".menu_btn .span2").removeClass("span22").addClass("span222");
            $(".menu_btn .span3").removeClass("span33").addClass("span333");
        }
    });

    $(window).scroll(function () {
//      var scrollTop = $(document).scrollTop();
//      if (scrollTop > 0) {
//          $(".header").css("box-shadow","0px -5px 20px #888888;");
//      } else {
//          $(".header").css("box-shadow", "none");
//      }
    });


    $(".slide_cut a").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        var disId = $(this).data("class");
        var strdis = "." + disId;
        $(".slide_list").hide();
        $(strdis).show();
    });

});