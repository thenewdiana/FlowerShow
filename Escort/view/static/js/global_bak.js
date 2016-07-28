//html根字体
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth / 6.4 + 'px';
    }, false);
})();

//其他插件
$(document).ready(function() {




    //显示隐藏密码
    $(".icon-logon-eye").on("click", function() {
        if ($(this).hasClass("icon-logon-eye")) {
            $(".icon-logon-eye").removeClass('icon-logon-eye').addClass('icon-logon-eye-open');
            $('#password').attr("type", "text");
        } else {
            $(".icon-logon-eye-open").removeClass('icon-logon-eye-open').addClass('icon-logon-eye');
            $('#password').attr("type", "password");
        }
    })

    $('.up-img em').click(function() {

        $("input").trigger("click");
    });

    $('.m-escort-appeal .item .up span').click(function() {

        $("input").trigger("click");
    });

    $('.m-person-info .item  .head img').click(function() {

        $(".m-person-info .item  .head input").trigger("click");
    });





    $('.m-my-capital .bd .item li:last-child').css('border-bottom', 'none');

    $('.m-escort-appeal .item-list .item:last-child').css('border-bottom', 'none');



    if ($('div').hasClass('m-footer')) {
        $('body').css('padding-bottom', '1.15rem');
    }

    if ($('div').hasClass('m-pay-submit')) {
        $('body').css('padding-bottom', '50px');
    }


    //接镖大厅
    $('body').click(function() {

        if ($('.m-alert-wrap').is(":hidden")) {

        } else {
            $('.m-header .diamond').addClass('diamond-fixed');
        }
    });

    $('.m-qiangdan').click(function() {

        $('.m-alert-wrap').show();
    });

    $('.m-edit-location .nor').click(function() {
        $(this).next().slideToggle();
    });
    $('.m-edit-location .hor').click(function() {
        $(this).slideUp();
    });




    $('.m-select-hor .nor').click(function() {
        $(this).next().slideToggle();
    });
    $('.m-select-hor .hor').click(function() {
        $(this).slideUp();
    });



    $('.m-send-dartlike .arrow').click(function() {
        $(this).parent().children('.right').children('.hor').slideToggle();
    });
    $(' .m-dartlike-item .hor').click(function() {
        $(this).slideUp();
    });
    $('.m-pay-way .bd .item').click(function() {
        $('.m-pay-way .bd .item').removeClass('on');
        $(this).addClass('on');
    });




    $(".m-send-dartlike textarea").focus(function() {
        $('.m-pay-submit').hide();
    });


    $(".m-send-dartlike textarea").blur(function() {
        $('.m-pay-submit').show();
    });






    var footerIndex = $('.m-footer ul .on').index();
    switch (footerIndex) {
        case 0:
            $('.m-footer ul li:eq(0) em').addClass('icon-home-hor').removeClass('icon-home-nor');
            break;
        case 1:
            $('.m-footer ul li:eq(1) em').addClass('icon-makeorder-hor').removeClass('icon-makeorder-nor');
            break;
        case 2:
            $('.m-footer ul li:eq(2) em').addClass('icon-acceptorder-hor').removeClass('icon-acceptorder-nor');
            break;
        case 3:
            $('.m-footer ul li:eq(3) em').addClass('icon-me-hor').removeClass('icon-me-nor');
            break;

    }



});


//其他插件
$(document).ready(function() {

    TouchSlide({
        slideCell: "#banner",
        titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell: ".bd ul",
        effect: "left",
        autoPlay: false, //自动播放
        autoPage: true, //自动分页
        switchLoad: "_src" //切换加载，真实图片路径为"_src" 
    });


    TouchSlide({
        slideCell: "#aotuSlider",

        endFun: function(i) { //高度自适应
            var bd = document.getElementById("aotuSliderBd");
            bd.parentNode.style.height = bd.children[i].children[0].offsetHeight + "px";
            if (i > 0) bd.parentNode.style.transition = "200ms";
        }

    });


    TouchSlide({
        slideCell: "#mMyDartlike",

        endFun: function(i) { //高度自适应
            var bd = document.getElementById("mMyDartlikeBd");
            bd.parentNode.style.height = bd.children[i].children[0].offsetHeight + "px";
            if (i > 0) bd.parentNode.style.transition = "200ms";
        }

    });


});




window.onload = function() {

    $('.m-order-del').click(function() {

        $('.m-my-dartlike-alert-wrap').show();
    });
    $('.m-cancel-order').click(function() {

        $('.m-my-dartlike-alert-wrap').hide();
    });


    $('.m-confirm-order').click(function() {

        $('.m-my-receipt-alert-wrap').show();
    });
    $('.m-cancel-order').click(function() {

        $('.m-my-receipt-alert-wrap').hide();
    });



    $('.m-my-dartlike-items .result h3 .icon-tips').click(function() {

        $('.m-my-tips-alert-wrap').show();
    });
    $('.m-my-tips-alert-wrap').click(function() {

        $('.m-my-tips-alert-wrap').hide();
    });




    $('.m-my-location .item .ft .del').click(function() {

        $('.m-my-dartlike-alert-wrap').show();
    });
    $('.m-my-dartlike-alert-wrap .fr').click(function() {

        $('.m-my-dartlike-alert-wrap').hide();
    });
}
