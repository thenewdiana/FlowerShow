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
    //$('.m-dartlike-item .hor').click(function() {
    //$(this).slideUp();
    //});
    //发镖页面
    $('.m-dartlike-item .hor ul li').click(function(){
        var text = $(this).text();
        $(this).parent().parent().siblings('.nor').children('span').text(text);
        $(this).parent().parent().slideUp();
    })
    //编辑位置页面
    $('.m-edit-location .hor ul li').click(function(){
        var text = $(this).text();
        $(this).parent().parent().parent().siblings('.left').find('i').text(text);
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

$(document).ready(function(){
    //返回按钮
    $('.back').click(function(){
        history.back(-1);
    })
})

//发镖页面
$(document).ready(function(){
    var bdTopic, bdLocationName, bdLocationPhonebd, LocationAddress;
    if(!(document.cookie||navigator.cookieEnabled)){
        alert('对不起,您的浏览器的Cookie功能被禁用,请开启后返回程序。')
    }
    //点击跳转到主题列表
    $('.topic_choose').click(function(){
        window.location.href='topic_list.html';
    })

    //主题列表页面点击获取主题
    //*********这个地方需要判断上一页面url是否是发镖页面，如果是则执行点击获取值******
    //if(document.referrer.indexOf('sen_bd') != -1){
        $('.m-list-opics .item').click(function(){
        var topic = $(this).find('span').text(); 
        $.cookie('c_topic', topic, { expires: 5*365, path: '/' }); //把点击元素的主题内容写入cookie
        window.location.href = 'send_bd.html';  //跳转到新的url
        })
    //
    
    
    //判断主题是否已在cookie里，如果是写入cookie
    if($.cookie('c_topic')){
        bdTopic = $.cookie('c_topic');   
        $('.m-dartlike-item .bd-topic span').text(bdTopic);  
    }
    
    //点击跳转到我的位置
    $('.location_choose').click(function(){
        window.location.href='my_location.html';
    })
    //我的位置页面点击获取位置信息
    $('.m-my-location .item .bd').click(function(){
        var loname = $(this).find('ul li:eq(0) span').text();    
            $.cookie('c_loname', loname, { expires: 5*365, path: '/' }); //把点击元素的姓名写入cookie                                         
        var lophone = $(this).find('ul li:eq(0) i').text();;     
            $.cookie('c_lophone', lophone, { expires: 5*365, path: '/' });  //把点击元素的电话写入cookie
        var loaddress = $(this).find('ul li:eq(1) p').text();    
            $.cookie('c_loaddress', loaddress, { expires: 5*365, path: '/' }); //把点击元素的具体地址写入cookie
        window.location.href = 'send_bd.html';  //跳转到新的url
    })
    //判断位置信息是否已在cookie里，如果是写入cookie
    if($.cookie('c_lophone')){
        $('.m-dartlike-item .bd-location p span:eq(0)').text($.cookie('c_loname'));  
        $('.m-dartlike-item .bd-location p span:eq(1)').text($.cookie('c_lophone'));
        $('.m-dartlike-item .bd-location p i').text($.cookie('c_loaddress'));
    }

    //服务费输入结束时计算结算金额
    $('.bd-service-fee input').blur(function(){
        var feeVal = $(this).val();
        var tipVal,resultVa;
        if(isNaN(feeVal) ){
            alert('请输入数字。');
        }else if(feeVal <2){
            alert('请输入不低于2的数字。');
        }else{
            feeVal = parseInt(feeVal).toFixed(2);
                tipVal = parseInt($('.bd-tip span').text()).toFixed(2);
                resultVal = ((feeVal-0) + (tipVal-0)).toFixed() +'元';
            $('.m-pay-submit .left i').text(resultVal) ;
        }
        
    })


    //打赏选择后计算结算金额
    $('.m-dartlike-item .hor ul li').click(function(){
        var text = $(this).text();
        $(this).parent().parent().siblings('.nor').children('span').text(text);
        $(this).parent().parent().slideUp();
        var feeVal = parseInt($('.bd-service-fee input').val()).toFixed(2);
        var tipVal = parseInt($(this).text()).toFixed(2);
        var resultVal = ((feeVal-0) + (tipVal-0)).toFixed() +'元';
        $('.m-pay-submit .left i').text(resultVal) ;
    })
    

    getResult = function (){
        var feeVal = parseInt($('.bd-service-fee input').val()).toFixed(2);
        if(isNaN(feeVal)){
            feeVal = 0;
        }
        var tipVal = parseInt($('.bd-tip span').text()).toFixed(2);
        var resultVal = ((feeVal-0) + (tipVal-0)).toFixed() +'元';

        $('.m-pay-submit .left i').text(resultVal) ;
    }
    //计算支付结果
        getResult();

    //发镖提交按钮准备数据
    var bdTopic = $('.m-dartlike-item .bd-topic span').text();  //主题内容
    var bdTime = $('.m-dartlike-item .bd-time span').text();    //送达时间
    var bdLocationName = $('.m-dartlike-item .bd-location p span:eq(0)').text();//位置联系人姓名
    var bdLocationPhone = $('.m-dartlike-item .bd-location p span:eq(1)').text();//位置联系人电话
    var bdLocationAddress = $('.m-dartlike-item .bd-location p i').text();//位置具体地址
    var bdInformation = $('.m-dartlike-content .bd-information textarea').val();//镖单内容
    var image1 = $('.m-picture-description .bd-images .img:eq(0) img').attr('src');//上传图片1
    var bdServiceFee = $('.m-dartlike-item .bd-service-fee input').val(); //服务费
    var bdTip =$('.m-dartlike-item .bd-tip span').text(); //打赏
    var bdPayIndex =$('.bd-pay .list .item').index($('.bd-pay .list .on'));//付款方式
    var url ='';//提交url
    var data = [{name:'bd_topic',value:bdTopic},
                {name:'bd_time',value:bdTime},
                {name:'bd_location_name',value:bdLocationName},
                {name:'bd_ocation_Phone',value:bdLocationPhone},
                {name:'bd_ocation_address',value:bdLocationAddress},
                {name:'bd_information',value:bdInformation},
                {name:'image_1 ',value:image1 },
                {name:'bd_service_fee',value:bdServiceFee},
                {name:'bd_tip',value:bdTip},
                {name:'bd_payindex',value:bdPayIndex}];
    //提交按钮ajax函数
    /*$('#pay_submit').click(function(){
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


//我的位置my_location页面
$(document).ready(function(){
    $('.m-my-location .item .ft .fr .edit').attr('href',"my_location_edit.html");
    $('.m-my-location .item .ft .fl input').click(function(){
        var checkbox = $('.m-my-location').find('input:checkbox');
        checkbox.hide();
    })


})

//编辑位置页面
$(document).ready(function(){
    //编辑位置准备数据
    var lSchool = $('.m-edit-location .edit-school i').text();
    var lBuilding = $('.m-edit-location .edit-building i').text();
    var lDetail = $('.m-edit-location .edit-detail textarea').val();
    var lName = $('.m-edit-location .edit-detail input').val();
    var lPhone = $('.m-edit-location .edit-phone input').val();
    var checkboxStatus = $('.m-edit-location input[type="checkbox"]').is(':checked');
    $('.m-edit-location .edit-phone input').blur(function(){
        if (!$(this).val().match(/^(((13[0-9]{1})|159|153)+\d{8})$/)) { 
            alert("手机号码格式不正确！"); }
    })
    var data = [{name:'l_school',value:lSchool },{name:'l_building',value:lBuilding},{name:'l_detail',value:lDetail },{name:'l_name',value:lName},{name:'l_phone',value:lPhone},{name:'checkboxs',value:checkboxStatus}];
    //提交按钮ajax函数
    /*$('..m-edit-location .m-form-submit').click(funciton(){
        if(lDetail ==='' || lName==='' ||lPhone===''){
            alert('请填写完整');
        }
        $.ajax({
            type:'',
            url:,
            dataType:'json',
            data:data,
            success:function(data){
                if(data){
                    window.location.href = '';
                }
            },
            error:function(){
                alet(''+)
            }
        })    
    })*/
})

