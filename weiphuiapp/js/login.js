$(function(){
	$('#username').blur(function(){
		checkusername();
	});
	$('#phone').blur(function(){
		checkphone();
	})
	$('#email').blur(function(){
		checkemail();
		
	});
	$('#password').blur(function(){
		checkpassword();
		
	});
	$('#Confirm').blur(function(){
		checkConfirm();
		
	});
	getCookie('con_name');
	getCookie('con_password');
	getCookie('con_phone');
	getCookie('con_email');
	getCookie('con_Confirm');
	console.log(document.cookie)
	var con_name=getCookie('con_name');
	console.log(con_name)
	var con_password=getCookie('con_password');
	console.log(con_password)
	var con_phone=getCookie('con_phone');
	var con_email=getCookie('con_email');
	var con_Confirm=getCookie('con_Confirm');
	
	$('#main_con_form').submit(function(){
		var username=$('#username').val();
	     var phone=$('#phone').val();
			var phone=$('#phone').val();
			var email=$('#email').val();
			var password=$('#password').val();
			var Confirm=$('#Confirm').val();
		if(username==con_name||username== con_phone||username==con_email && password==con_password){
			//alert('nmmm')
				window.location.href="personal_login.html";
				return false;
		}else{
			return false;
		}
	})
});

/*--------------------------------正则验证-----------------------------------*/
//验证用户名信息
function checkusername(){
	var username=$('#username').val();
	//input标签
	var user=$('#username');
	//span标签
	var $tip=$('#username').next('span');
	if(username==''){
		$tip.html('<font color="#DE3D96">请填入用户名/手机号/邮箱地址</font>');
		user.css("border","1px solid #DE3D96")
		return false;
	}
	
}
//验证密码
function checkpassword(){
	var password=$('#password').val();
	//input标签
	var user=$('#password');
	//span标签
	var $tip=$('#password').next('span');
	if(password==''){
		$tip.html('<font color="#DE3D96">密码不能为空</font>');
		user.css("border","1px solid #DE3D96");
		return false;
	}
	var reg=/^[a-zA-Z0-9]{6}$/
	var res=reg.exec(password);
	if(!res){
		$tip.html('<font color="#DE3D96">密码格式不正确</font>');
		user.css("border","1px solid #DE3D96");
		return false;
	}else{
		$tip.html('<font color="gray">密码正确请往下注册</font>')
		return true;
	}
}