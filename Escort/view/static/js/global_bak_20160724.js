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
    //修改下列注释掉的点击函数，获取选中数据 by Swanny 20160720
    //$('.m-select-hor .hor').click(function() {
    //$(this).slideUp();
    //});
    $('.m-select-hor .hor ul li').click(function(){
        var text = $(this).text();
        $(this).parent().parent().parent().siblings('i').text(text);
        $(this).parent().parent().slideUp();
    })


    $('.m-send-dartlike .arrow').click(function() {
        $(this).parent().children('.right').children('.hor').slideToggle();
    });

    
    //修改下列注释掉的点击函数，获取选中数据
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


///
//包装函数
var myFunc = {
    getUrlParam:function(name){//获取url参数
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); ///构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);    //匹配目标参数
    if (r != null) return unescape(r[2]); return null;      //返回参数值
    },
    mouseout:function(obj){
        var className ="hover";
        var _ecname = obj.className;
        if (_ecname.length == 0) return;
        if (_ecname == className) {  
        obj.className ="";return;
        }
        if (_ecname.match(new RegExp("(^|\s)"+ className +"(\s|$)")))
        obj.className = _ecname.replace((new RegExp("(^|\s)"+ className +"(\s|$)")),"");
    },
    hover:function(obj){
        if (!obj) return;
        var className ="hover"
        var _ecname = obj.className;
        if (_ecname.length == 0) {  
        obj.className = className;return;
        }
        if (_ecname == className || _ecname.match(new RegExp("(^|\s)"+ className +"(\s|$)")))
           return;
        obj.className = _ecname +""+ className;
    },
    showAlert:function(msg){
        $('.m-close-succeed-alert p').text(msg);
            $('.m-alert-wrap').show();
            return false;
    }
}



////
// 手机实现div的hover效果
$(document).ready(function(){
    $('.m-my-dartlike-ongoing .con div').attr('ontouchstart','myFunc.hover(this');
    $('.m-my-dartlike-ongoing .con div').attr('ontouchend','myFunc.mouseout(this)');
    $('.m-my-index-hd .cf div:eq(0)').attr('ontouchstart','myFunc.hover(this');
    $('.m-my-index-hd .cf div:eq(0)').attr('ontouchend','myFunc.mouseout(this)');
})


var blankReg = /(^\s*)|(\s*$)/g;//空格正则
var data = '';
var url;
var reg = /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{8,}/;
////
//发镖
$(document).ready(function(){
    if(!(document.cookie||navigator.cookieEnabled)){
        alert('对不起,您的浏览器的Cookie功能被禁用,请开启后返回程序。')//检测用户cookie是否开启
    }


    //发镖页面
    //点击跳转到主题列表
    $('.topic_choose').click(function(){
                    
        window.location.href='topic_list.html';//跳转到主题列表
    })
    

    //主题列表页面
    //点击获取主题 
    $('.m-list-opics .item').click(function(){
    var topic = $(this).find('span').text();                   //把点击元素的主题内容赋值给参数
    $.cookie('c_topic', topic, { expires: 5*365, path: '/' }); //把点击元素的主题内容写入cookie
    window.location.href ='send_bd.html';
    })
   

    //发镖页面
    //判断主题是否已在cookie里，如果是写入cookie
    if($.cookie('c_topic')){
        var bdtopic = $.cookie('c_topic');   
        $('.m-dartlike-item .bd-topic span').text(bdtopic);  
    }    

    //选择位置按钮
    $('.location_choose').click(function(){
        var start= 'start';                                        //定义start参数
        start = encodeURI(encodeURI(start));                       //对start参数进行二次编码
        window.location.href='my_location.html?startVal='+start+'';//跳转到我的位置页面
    })


    //我的位置页面
    //如果没有默认地址点击获取位置信息
    var startSignal = myFunc.getUrlParam('startVal');
    startSignal = decodeURI(decodeURI(startSignal));
    if(startSignal && startSignal.indexOf('start') != -1){      //这个地方需要判断上一页面url是否是发镖页面，如是则点击获取地址
        $('.m-my-location .item .bd').click(function(){
            var loname = $(this).find('ul li:eq(0) span').text();    
                $.cookie('c_loname', loname, { expires: 5*365, path: '/' }); //把点击元素的姓名写入cookie                                         
            var lophone = $(this).find('ul li:eq(0) i').text();;     
                $.cookie('c_lophone', lophone, { expires: 5*365, path: '/' });  //把点击元素的电话写入cookie
            var loaddress = $(this).find('ul li:eq(1) p').text();    
                $.cookie('c_loaddress', loaddress, { expires: 5*365, path: '/' }); //把点击元素的具体地址写入cookie
            window.location.href = 'send_bd.html';  //跳转到新的url
        })
        $('#myLocation .m-header .back a').attr('href','send_bd.html');
    }


    //发镖页面
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
            myFunc.showAlert('请输入数字。');
        }else if(feeVal <2){
            myFunc.showAlert('请输入不低于2的数字。');
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

    //计算支付结果函数
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
    var bdTopic,bdTime,bdLocationName,bdLocationPhone,bdLocationAddress,bdInformation,image1,bdServiceFee,bdTip,bdPayIndex;
    $('#pay_submit').click(function(){
    	bdInformation = $('.m-dartlike-content .bd-information textarea').val();
        bdServiceFee = $('.m-dartlike-item .bd-service-fee input').val(); 
    	if(bdInformation.replace(blankReg,'') ==''){
            myFunc.showAlert('请输入您的重要信息');
    	}else if(bdServiceFee.replace(blankReg,'') == ''){
            myFunc.showAlert('请输入服务费。');
    	}else if(isNaN(bdServiceFee) || bdServiceFee<2){
            myFunc.showAlert('请输入符合要求的服务费。');
        }else{
            bdTopic = $('.m-dartlike-item .bd-topic span').text();  //主题内容
		    bdTime = $('.m-dartlike-item .bd-time span').text();    //送达时间
		    bdLocationName = $('.m-dartlike-item .bd-location p span:eq(0)').text();//位置联系人姓名
		    bdLocationPhone = $('.m-dartlike-item .bd-location p span:eq(1)').text();//位置联系人电话
		    bdLocationAddress = $('.m-dartlike-item .bd-location p i').text();//位置具体地址
		    bdInformation = $('.m-dartlike-content .bd-information textarea').val();//镖单内容
		    image1 = $('.m-picture-description .bd-images .img:eq(0) img').attr('src');//上传图片1
		    bdServiceFee = $('.m-dartlike-item .bd-service-fee input').val(); //服务费
		    bdTip =$('.m-dartlike-item .bd-tip span').text(); //打赏
		    bdPayIndex =$('.bd-pay .list .item').index($('.bd-pay .list .on'));//付款方式
		    url ='';//提交url
		    data = {'bd_topic':bdTopic,'bd_time':bdTime,'bd_location_name':bdLocationName,'bd_ocation_Phone':bdLocationPhone,
            'bd_ocation_address':bdLocationAddress, 'bd_information':bdInformation,'image_1':image1 ,'bd_service_fee':bdServiceFee,
            'bd_tip':bdTip,'bd_payindex':bdPayIndex};
            data = JSON.stringify(data);
            //预计数据接口
            /*$.ajax({
                type:'',
                url:,
                dataType:'json',
                data:data,
                success:function(data){
                    var data =JSON.parse(data);
                    if(data){
                        
                    }
                },
                error:function(){
                    alert(''+)
                }
            })*/
    		window.location.href ='my_bd.html';
    	}
    })
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
                alert(''+)
            }
        })
    })*/
})
//我的位置my_location页面
$(document).ready(function(){
    $('.m-my-location .item .ft .fr .edit').attr('href',"my_location_edit.html");
    $('.m-my-location .item .ft .fl input').click(function(){
        var checkbox = $('.m-my-location').find('input:checkbox');
        checkbox.hide();//预计数据接口
        
    })

})


////
//编辑位置页面
$(document).ready(function(){
    var numberReg, lSchool, lBuilding, lDetail, lName, lPhone, lCheckboxStatus;
        numberReg = /^(1+\d{10})$/;
    $('.location-edit .edit-phone input').blur(function(){
        if (!numberReg.test($(this).val())) { 
            myFunc.showAlert('请输入正确的手机号');
        }
    })
    //提交按钮ajax函数
    $('.location-edit .m-form-submit').click(function(){
        //准备提交数据
        lSchool = $('.location-edit .edit-school i').text();
        lBuilding = $('.location-edit .edit-building i').text();
        lDetail = $('.location-edit .edit-detail textarea').val();
        lName = $('.location-edit .edit-name input').val();
        lPhone = $('.location-edit .edit-phone input').val();
        lCheckboxStatus = $('.location-edit input[type="checkbox"]').is(':checked');
        if(lDetail.replace(blankReg,'') == ''|| lName.replace(blankReg,'') == ''){
            myFunc.showAlert('请填写地址内容');
        }else if(!numberReg.test(lPhone)){
            myFunc.showAlert('请输入正确的手机号');
        }else{
            lSchool = $('.location-edit .edit-school i').text();
            lBuilding = $('.location-edit .edit-building i').text();
            lDetail = $('.location-edit .edit-detail textarea').val();
            lName = $('.location-edit .edit-name input').val();
            lPhone = $('.location-edit .edit-phone input').val();
            lCheckboxStatus = $('.location-edit input[type="checkbox"]').is(':checked');                                        // 填写内容不为空才可提交                   
            data ={'l_shool':lSchool,'l_building':lBuilding,'l_detail':lDetail,'l_name':lName
            ,'l_phone':lPhone,'l_checkbox_status':lCheckboxStatus};
            data = JSON.stringify(data);                               //预计数据接口
            window.location.href ='my_location.html'; //跳转页面
        }                                        
        
    })
})

////
//新建位置页面
$(document).ready(function(){
    var numberReg,nSchool, nBuilding, nDetail, nName, nPhone, nCheckboxStatus;
    $('.location-new .new-phone input').blur(function(){
        numberReg = /^(1+\d{10})$/;
        if (!numberReg.test($(this).val())) {    //判断手机输入格式
            myFunc.showAlert('请输入正确的手机号');
        }
    })
    $('.location-new .m-form-submit').click(function(){
        nSchool = $('.location-new .new-school i').text();
        nBuilding = $('.location-new .new-building i').text();
        nDetail = $('.location-new .new-detail textarea').val();
        nName = $('.location-new .new-name input').val();
        nPhone = $('.location-new .new-phone input').val();
        nCheckboxStatus = $('.location-new input[type="checkbox"]').is(':checked');
        if(nSchool ==''|| nBuilding ==''){      //判断地址选择框是否为空，如果为空提示选择
            myFunc.showAlert('请选择地址');
        }else if(nDetail.replace(blankReg,'') =='' || nName.replace(blankReg,'') == ''){  //判断地址输入框是否为空，如果为空提示选择
            myFunc.showAlert('请填写内容');
        }else{
        	data = {'n_school':nSchool,'n_building':nBuilding,'n_detail':nDetail,'n_name':nName,'n_phone':nPhone,'n_ncheckboxstatus':nCheckboxStatus}; //提交位置数据
        	data = JSON.stringify(data);                                        //预计数据接口
        	window.location.href ='my_location.html';
        	                                         
        }
    })

})


////
//接镖
$(document).ready(function(){
    //接镖大厅页面
    $('.diamond a').click(function(){            //点击钻石切换到我的镖单页面
        window.location.href="bs_bd.html";
    })
    //镖师镖单页面
    $('.m-my-dartlike-ongoing .con .item').click(function(){//点击进行中镖单显示镖单详情
        window.location.href ='bd_detail.html';
    })
    $('.m-my-dartlike-shut .appeal p a ').click(function(){ //点击已完成镖单申诉按钮申诉

    	window.location.href='bd_appeal.html';
    })
    
    //申诉页面
    $('#onAppeal .submit a').click(function(){                    //点击完成按钮
    	var appealProof = $('.m-escort-appeal .proof');
    	var appealMsg = $('.m-escort-appeal .appealmsg textarea').val();
    	if(appealMsg.replace(blankReg,'')==''){                                        //判断申诉说明是否为空，如果是提示输入。
            myFunc.showAlert('请填写申诉说明');
    	}else{                                  //预计数据接口
    		var begin ='begin';                                   //定义begin参数
    		begin = encodeURI(encodeURI(begin));                  //对begin参数进行两次编码
            window.location.href ='bs_bd.html?beginVal='+begin+'';//将begin参数传入跳转页面，实现显示指定位置效果
    	}
    })

    //镖师镖单页面
    var beginSignal = myFunc.getUrlParam('beginVal');             //接收begin参数
    beginSignal = decodeURI(decodeURI(beginSignal));
    if(beginSignal && beginSignal.indexOf('begin') != -1){        //判断begin参数值是否存在如果存在继续
    	var width,text;
    	$('#mMyDartlike .hd ul li:eq(2)').addClass('on').siblings().removeClass('on');//导航显示内容与样式
    	width = $('#mMyDartlikeBd').css('width');
    	width = parseInt(width);
    	width = width/3;
    	width = -2*width;
    	width = width+'px';
        $('#mMyDartlikeBd').css('left',width);
        var text = '用户已投诉';
        data = {'appeal_status':text};
        JSON.stringify(data); //预计数据接口

        $('.m-my-dartlike-shut .appeal h3 span').text(text);      //写入'用户已投诉'到指定位置
        $('.appeal a').css("visibility",'hidden')
    }
    $('#mMyDartlike .hd ul li').click(function(){
    	$('#mMyDartlikeBd').css('left','0px');                    //点击使页面位置恢复
    })

})

////
//更改密码页面
$(document).ready(function(){
    var oldPass;
    var inputOld = $('.m-account-security .item:eq(0) input');
    var newFirst = $('.m-account-security .item:eq(1) input');
    var newSecond = $('.m-account-security .item:eq(2) input');
    var ok1 = false;
    var ok2 = false;
    var ok3 = false;
    inputOld.blur(function(){
        var x = 'swan1987';
        if($(this).val() === x){
            ok1 = true;
        }else{
            myFunc.showAlert('请输入正确的密码');
        }
    })
    newFirst.blur(function(){
        if($(this).val().replace(blankReg,'')!=='' && reg.test($(this).val()) && $(this).val().length >7){
            ok2 = true;
        }else{
            myFunc.showAlert('请输入至少8位组合密码');
        }
    })
    newSecond.blur(function(){
        if($(this).val() == newFirst.val()){
            ok3 = true;
        }else{
            myFunc.showAlert('两次输入不一致');
        }
    })
    $('.m-account-security .bd input').click(function(){       //点击提交按钮
        if(ok1 && ok2 && ok3){
            var data = newSecond.val();
            JSON.stringify(data);//预计数据
            window.location.href = 'safe.html';
        }else{
            return false;
        }
    })
})


////
//图文帖子点赞
$(document).ready(function(){
    $('.m-invitation-ft .zan a').click(function(){
        if($(this).hasClass('icon-zan')){                             //取消点赞
            $(this).removeClass('icon-zan').addClass('icon-unzan');
            var numberFrom = $(this).parent().siblings('p').children('i');
            var number = numberFrom.text();
            number = parseInt(number);
            number =number - 1;
            numberFrom.text(number);//点赞人数减一个
            //预计数据接口
        }else{                                                        //点赞
            $(this).removeClass('icon-unzan').addClass('icon-zan');
            var numberFrom = $(this).parent().siblings('p').children('i')
            var number = numberFrom.text();
            number = parseInt(number);
            number =number + 1;
            numberFrom.text(number);//点赞人数加一个
            //预计数据接口
        }
    })
})



////
//我的页面
$(document).ready(function(){
	$('.m-my-index-hd .cf .head').click(function(){       //头像点击跳转个人信息页面
		window.location.href ='my_info.html';
	})
    
    if($.cookie('c_infourl')){                            //判断用户头像如果在cookie里，赋值
    var infoImg = $.cookie('c_infourl');
    $('.m-my-index-hd .cf .head img').attr('src',infoImg);
    }else{                                                //如果用户头cookie未定义，从服务器获取头像地址

    }
})



////
//个人信息页面
$(document).ready(function(){
    var infoImg,infoName,infoSex,infoBirth;
    $('.m-info-header .submit a').click(function(){               //提交完成按钮
        infoImg = $('#infoImg').attr('src');
        infoName = $('.m-person-info .infoName input').val();
        infoSex = $('.m-person-info .infosex').text();
        infoBirth = $('.m-person-info .infobirth input').val();
        if(infoName != ''){                                       //如果符合条件，提交数据
            //图片上传成功后;获取图片url返回我的页面时，头像图片显示
            infoImg = 'images/head02.png';
            $.cookie('c_infourl',infoImg,{expires:5*365, path:'/'});//预计数据接口
            window.location.href = 'my.html';
        }else{                                                    //如果不符合条件，提示，并不能提交
            $('.m-person-info .infoName input').attr('placeholder','请输入');
            return false;
        }

    })
})