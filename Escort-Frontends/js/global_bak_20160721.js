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

    
    //修改下列注释掉的点击函数，获取选中数据 by Swanny 20160720
    /**$('.m-send-dartlike .arrow').click(function() {
        $(this).parent().children('.right').children('.hor').slideToggle();
    });**/
    $('.m-dartlike-item .hor ul li').click(function(){
        var text = $(this).text();
        $(this).parent().parent().siblings('.nor').children('span').text(text);
        $(this).parent().parent().slideUp();
    })
    
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

var myFunc = {
    getUrlParam:function(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);    //匹配目标参数
    if (r != null) return unescape(r[2]); return null;      //返回参数值
    },

}

//主题列表页面
$(document).ready(function(){

    //主题列表页面点击获取主题
    $('.m-list-opics .item').click(function(){
        var sel=$(this).find('span').text();           //把点击元素的主题内容赋值给参数
        var url ='';
        url = encodeURI('send_bd.html?selVal='+sel+'');//url进行两次编码
        url = encodeURI(url); 
        window.location.href = url;                    //跳转到新的url

    })
})


//我的位置页面
$(document).ready(function(){

    //我的位置页面获取位置信息
    $('.m-my-location .item').click(function(){
        var bdTopic =myFunc.getUrlParam('selVal');         //获取传入的主题参数值
            bdTopic = decodeURI(decodeURI(bdTopic));           //对获取的参数进行两次解码
        var loname = $(this).find('.bd ul li:eq(0) span').text(); //把点击元素的姓名赋值给参数
        var lophone = $(this).find('.bd ul li:eq(0) i').text();;  //把点击元素的电话赋值给参数
        var loaddress = $(this).find('.bd ul li:eq(1) p').text(); //把点击元素的具体地址赋值给参数
        var url1 ='';
        url1 = encodeURI('send_bd.html?selVal='+bdTopic+'&nameVal='+loname+'&phoneVal='+lophone+'&addressVal='+loaddress+'');
        url1 = encodeURI(url1);
        window.location.href = url1;

    })
})


//发镖页面
$(document).ready(function(){

    //点击选择主题
    $('.topic_choose').click(function(){
        window.location.href='topic_list.html';
    })
    
    //将选择的主题参数写入HTML
    var bdTopic =myFunc.getUrlParam('selVal');         //获取传入的主题参数值
    bdTopic = decodeURI(decodeURI(bdTopic));           //对获取的参数值进行两次解码
    $('.m-dartlike-item .bd-topic span').text(bdTopic);//将选择主题写入HTML 中;
    bdTopic = $('.m-dartlike-item .bd-topic span').text();//保存主题选择内容

    //点击获取位置
    $('.location_choose').click(function(){
        var url2 ='';
        url2 = encodeURI('my_location.html?selVal='+bdTopic+'');//url进行两次编码
        url2 = encodeURI(url2); 
        window.location.href=url2;
    })

    //再次将主题信息写入HTML
    var bdTopic =myFunc.getUrlParam('selVal');
        bdTopic = decodeURI(decodeURI(bdTopic));   
    $('.m-dartlike-item .bd-topic span').text(bdTopic);    

    //将选择的位置信息参数写入HTML
    var bdLocationName =myFunc.getUrlParam('nameVal');         //获取位置姓名参数
    var bdLocationPhone =myFunc.getUrlParam('phoneVal');         //获取参位置电话参数
    var bdLocationAddress =myFunc.getUrlParam('addressVal');         //获取位置地址参数
    bdLocationName = decodeURI(decodeURI(bdLocationName));           //对获取的参数值进行两次解码
    bdLocationPhone = decodeURI(decodeURI(bdLocationPhone));   
    bdLocationAddress = decodeURI(decodeURI(bdLocationAddress));   
    $('.m-dartlike-item .bd-location p span:eq(0)').text(bdLocationName);//将位置信息写入HTML 中;
    $('.m-dartlike-item .bd-location p span:eq(1)').text(bdLocationPhone);
    $('.m-dartlike-item .bd-location p i').text(bdLocationAddress);
    /*
    $('#pay_submit').click(function(){
        var bdTopic = $('.m-dartlike-item .bd-topic span').text();  //主题内容
        var bdTime = $('.m-dartlike-item .bd-time span').text();    //送达时间
        var bdLocationName = $('.m-dartlike-item .bd-location p span:eq(0)').text();//位置联系人姓名
        var bdLocationPhone = $('.m-dartlike-item .bd-location p span:eq(1)').text();//位置联系人电话
        var bdLocationAddress = $('.m-dartlike-item .bd-location p i').text();//位置具体地址
        var bdInformation = $('.m-dartlike-content .bd-information textarea').val();//镖单内容
        var image1 = $('.m-picture-description .bd-images .img:eq(0) img').attr('src');//上传图片1
        var bdServiceFee = $('.m-dartlike-item .bd-service-fee span').text(); //服务费
        var bdTip =$('.m-dartlike-item .bd-tip span').text(); //打赏
        var bdPayIndex =$('.bd-pay .list .item').index($('.bd-pay .list .on'));//付款方式
        var url ='';//提交url
        var data = [{name:'bd_topic',value:bdTopic},{name:'bd_time',value:bdTime},{name:'bd_location_name',value:bdLocationName},{name:'bd_ocation_address',value:bdLocationAddress},{name:'bd_information',value:bdInformation},{name:'image_1 ',value:image1 },{name:'bd_service_fee',value:bdServiceFee},{name:'bd_tip',value:bdTip}];

        $.ajax({
            type:'POST',
            url:,
            dataType:'json',
            data:data,
            success:function(data){
                if(data){
                    
                }
            },
            error:function(){
                alet(''+)
            }
        })
    })*/

})
