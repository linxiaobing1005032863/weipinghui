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
	$('#zx').click(function(){
		delCookie('con_name');
		delCookie('con_password');
		delCookie('con_phone');
		delCookie('con_email');
		delCookie('con_Confirm');
		
		
		
		console.log(document.cookie)
	})
	$('#main_con_form').submit(function(){
		if(checkusername() && checkphone() && checkemail() && checkpassword() && checkConfirm()){
			var username=$('#username').val();
			var phone=$('#phone').val();
			var phone=$('#phone').val();
			var email=$('#email').val();
			var password=$('#password').val();
			var Confirm=$('#Confirm').val();
			alert('注册成功');
			setCookie('con_name',username);
			setCookie('con_password',password);
			setCookie('con_phone',phone);
			setCookie('con_email',email);
			setCookie('con_Confirm',Confirm);
			console.log(document.cookie)
			window.location.href = 'login.html';
			return false;
		}else{
			alert('请重新注册');
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
		$tip.html('<font color="#DE3D96">用户名不能为空</font>');
		user.css("border","1px solid #DE3D96")
		return false;
	}
	var reg=/^.{6,8}$/;
	var res=reg.exec(username);
	if(!res){
		$tip.html('<font color="#DE3D96">用户名的长度要在6位到8位</font>');
		user.css("border","1px solid #DE3D96");
		return false;
	}else{
		$tip.html('<font color="gray">用户名正确请往下注册</font>');
		return true;
	}
}
//验证用户手机号码
function checkphone(){
	var phone=$('#phone').val();
	//input标签
	var user=$('#phone');
	//span标签
	var $tip=$('#phone').next('span');
	if(phone==''){
		$tip.html('<font color="#DE3D96">手机号码不能为空</font>');
		user.css("border","1px solid #DE3D96");
		return false;
	}
	var reg=/^1(33|53|80|81|89|77|73|49|30|31|32|55|56|45|85|86|76|75|35|36|37|38|39|50|51|52|57|58|59|82|83|84|87|88|47|78)[0-9]{8}$/
	var res=reg.exec(phone);
	if(!res){
		$tip.html('<font color="#DE3D96">手机号码格式不正确</font>');
		user.css("border","1px solid #DE3D96");
		return false;
	}else{
		$tip.html('<font color="gray">手机号码正确请往下注册</font>');
		return true;
	}
}

//验证邮箱地址
function checkemail(){
	var email=$('#email').val();
	//input标签
	var user=$('#email');
	//span标签
	var $tip=$('#email').next('span');
	if(email==''){
		$tip.html('<font color="#DE3D96">邮箱地址不能为空</font>');
		user.css("border","1px solid #DE3D96");
		return false;
	}
	//^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+

    //开始必须是一个或者多个单词字符或者是-，加上@，然后又是一个或者多个单词字符或者是-。然后是点“.”
    //和单词字符和-的组合，可以有一个或者多个组合。
	var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
	var res=reg.exec(email);
	if(!res){
		$tip.html('<font color="#DE3D96">邮箱地址格式不正确</font>');
		user.css("border","1px solid #DE3D96");
		return false;
	}else{
		$tip.html('<font color="gray">邮箱地址正确请往下注册</font>');
		return true;
	}
}
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
function checkConfirm(){
	var Confirm=$('#Confirm').val();
	console.log(Confirm)
	//input标签
	var user=$('#Confirm');
	//span标签
	var $tip=$('#Confirm').next('span');
	var password=$('#password').val();
	console.log(password)
	if(password==''){
		$tip.html('<font color="#DE3D96">还没有设置密码，请往上设置密码</font>');
		user.css("border","1px solid #DE3D96");
		return false;
	}else if(Confirm==''){
		$tip.html('<font color="#DE3D96">为了您密码安全，请确认密码</font>');
		user.css("border","1px solid #DE3D96");
		return false;
	}else if(password != Confirm){
		$tip.html('<font color="#DE3D96">确认密码不正确，请重新确认密码</font>');
		user.css("border","1px solid #DE3D96");
		return false;
	}else{
		$tip.html('<font color="gray">密码无误，请往下注册</font>');
		return true;
	}
}
/*-------------------------------cookie--------------------------------------------*/
  function setCookie(key, value){
			Days = 30;		// 设置COOKIE的生存周期
			var exp = new Date();		// 当前日期对象
			exp.setTime(exp.getTime()+ Days * 3600 * 24 *1000);		// 设置期日对象为30天后的日期数据

			// console.log(exp.toGMTString());
			document.cookie= key+'='+escape(value)+';expires='+exp.toGMTString();
		}

		// 读取COOKIE的方法
		function getCookie(key){
			var arr, reg = new RegExp('(^| )'+key+'=([^;]*)(;|$)');

			if(arr = document.cookie.match(reg)){
				// console.log(arr);
				return arr[2];			// 把对应用KEY的值返回
			}else{
				return null;
			}
		}

		// 删除COOKIE的方法
		function delCookie(key){
			var exp = new Date();		// 实例化日期对象
			exp.setTime(0);
			var cval = getCookie(key);

			if(cval != null){
				document.cookie = key+'='+cval+';expires='+exp.toGMTString();
			}
		}