
	function a(){
	  var arr=[
			   	   	 		['img/index/cate15.jpg',
			   	   	 		'1.2折起',
			   	   	 		'全民跑上瘾',
			   	   	 		'剩两天'],
			   	   	 		['img/index/cate15.jpg',
			   	   	 		'折起',
			   	   	 		'全民跑上瘾',
			   	   	 		'剩两天'],
			   	   	 		['img/index/cate15.jpg',
			   	   	 		'1.2折起',
			   	   	 		'全民跑上瘾',
			   	   	 		'剩两天'],
			   	   	 		['img/index/cate15.jpg',
			   	   	 		'折起',
			   	   	 		'全民跑上瘾',
			   	   	 		'剩两天'],
			   	   	 		['img/index/cate15.jpg',
			   	   	 		'1.2折起',
			   	   	 		'全民跑上瘾',
			   	   	 		'剩两天'],
			   	   	 		['img/index/cate15.jpg',
			   	   	 		'折起',
			   	   	 		'全民跑上瘾',
			   	   	 		'剩两天'],
			   	   	 			['img/index/cate15.jpg',
			   	   	 		'1.2折起',
			   	   	 		'全民跑上瘾',
			   	   	 		'剩两天'],
			   	   	 		['img/index/cate15.jpg',
			   	   	 		'折起',
			   	   	 		'全民跑上瘾',
			   	   	 		'剩两天'],
			   	   	 		['img/index/cate15.jpg',
			   	   	 		'1.2折起',
			   	   	 		'全民跑上瘾',
			   	   	 		'剩两天'],
			   	   	 		['img/index/cate15.jpg',
			   	   	 		'折起',
			   	   	 		'全民跑上瘾',
			   	   	 		'剩两天'],
			   	   	 		['img/index/cate15.jpg',
			   	   	 		'1.2折起',
			   	   	 		'全民跑上瘾',
			   	   	 		'剩两天'],
			   	   	 		['img/index/cate15.jpg',
			   	   	 		'折起',
			   	   	 		'全民跑上瘾',
			   	   	 		'剩两天']
			   	   	 	]
			   	   	 		var str='';
					   	   	for(var i=0;i<arr.length;i++){
					   	   	 	str+='<img src="" data-echo ='+arr[i][0]+  ' class="cate_Cba">'
					   	   	 	/*<img src="" data-echo="<%=Index[i].path%>"></a>*/
					   	   		str+='<div  class="clearfix cate_Cbb">'
							   	   str+='	<span>'
							   	   	str+='	<i>'+arr[i][1]+'</i>'
							   	   	str+='	<i>'+arr[i][2]+'</i>'
							   	   	str+='</span>'
							   	   	str+='<span>'+arr[i][3]+'</span>'
					   	   	 str+='	</div>'
					   	   	}
					   	   document.write(str);	
					   	   echo.init();
					   	   
	}
	
					   	 
