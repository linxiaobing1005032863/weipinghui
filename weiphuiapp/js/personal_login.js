$(function(){
   //alert('123');
   getCookie('con_username');
   appendLogin();
   $('#zx').click(function(){
   	
		delCookie('con_name');
		delCookie('con_password');
		delCookie('con_phone');
		delCookie('con_email');
		delCookie('con_Confirm');
		window.location.href = 'personal.html';
})
 })
    var name=getCookie('con_name')
	function appendLogin(){
		var append_login=$('#append_login');
		append_login.html(name);
	}