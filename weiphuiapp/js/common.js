//控制字体大小
!(function(doc,win){
	var docEle=doc.documentElement,
	evt="onorientationchange" in window ? "orientationchange" : "resize",
	fn=function(){
		var width=docEle.clientWidth;
		width&&(docEle.style.fontSize=10*(width/320)+"px");
		//console.log(width);
			if(width>=640){
				width && (docEle.style.fontSize=16+"px");
			}
			if(width<=300){
				width && (docEle.style.fontSize=10+"px")
	    }
	};
	win.addEventListener(evt,fn,false);
	doc.addEventListener("DOMContentLoaded",fn,false);
}(document,window));
	
	var xiaobing={};//命名空间
	xiaobing.addTransition=function(obj){
		obj.style.transition="all 0.5s";
		obj.style.webkitTransition="all 0.5s";
	}
	xiaobing.setTransform=function(obj,distance,direction){
			if(direction){
				obj.style.transform="translate"+direction+"("+distance+"px)";
				obj.style.transform="translate"+direction+"("+distance+"px)";
				
		   }else{
			obj.style.transform="translateX("+distance+"px)";
			obj.style.webkitTransform="translateX("+distance+"px)";
		  }
	}
	
	        
	xiaobing.removeTransition=function (obj){
	        obj.style.transition = "";
	        obj.style.webkitTransition = "";
	    }
	xiaobing.addTransitionEnd=function(obj,fn){
	    obj.addEventListener("transitionEnd",fn);
	    obj.addEventListener("webkitTransitionEnd",fn);
	}
	xiaobing.tap = function(obj,fn){
	    var start = 0;//记录手指放到屏幕上的时间
	    var distance = 0 ;
	    var end = 0 ;//记录手指离开屏幕上的时间
	    var isMove = false;//记录是否滑动
	    obj.addEventListener("touchstart",function(){
	        start = (new Date()).getTime();
	    });
	    obj.addEventListener("touchmove",function(){
	        isMove = true;
	    });
	    obj.addEventListener("touchend",function(){
	        end = (new Date()).getTime();
	        distance = end - start;
	        if(distance<150&&!isMove){
	            fn();
	            //console.log("发生了tip事件")
	        }
	        
	        start = 0;
	        move = 0 ;
	        end = 0 ;
	        isMove = false;
	    })
 }
/*============================轮播图结束==================================*/
/*导航栏开始*/
//sliders();
function sliders(){
    //需求分析
    //1、自动轮播 (定时器 过渡)
    //2、小圆点随着图片滚动(监听图片显示的索引，然后设置当前样式now)
    //3、图片能滑动(touch)
    //4、滑动不超过一定距离 吸附回去 (过渡)
    //5、滑动超过一定距离 滚动到下一张(过渡)
    
    //0、获取事件源和相关元素
    var box = document.querySelector(".weipin_banner");
    var imgUl = box.children[0];
   
    var dotUl = box.children[1];
    var imgLis = imgUl.children;
    var dotLis = dotUl.children;
    var width = box.offsetWidth;
    var num = 1;
    //1、自动轮播 (定时器 过渡)
    clearInterval(box.timer);
    box.timer = setInterval(function(){
        num++;
        xiaobing.addTransition(imgUl);
        xiaobing.setTransform(imgUl,-num*width);
    }, 5000)
    
    xiaobing.addTransitionEnd(imgUl, function(){
        if(num>imgLis.length-4){
            num = 1;
            xiaobing.removeTransition(imgUl);
            xiaobing.setTransform(imgUl,-num*width);
        }else if(num==0){
            num = imgLis.length-4;
            xiaobing.removeTransition(imgUl);
            xiaobing.setTransform(imgUl,-num*width);
        }
        light();
    })
    //2、小圆点随着图片滚动(监听图片显示的索引，然后设置当前样式now)
    function light(){
        for(var i =0;i<dotLis.length;i++){
            dotLis[i].className = "";
        }
        dotLis[num-1].className = "now";
    }
    
    //4、滑动不超过一定距离 吸附回去 (过渡)
    //5、滑动超过一定距离 滚动到下一张(过渡)
    var startX = 0 ;
    var moveX = 0 ;
    var endX = 0;
    var isMove = false;
    var distance = 0;
    imgUl.addEventListener("touchstart", function(e){
        clearInterval(box.timer);
        startX = e.touches[0].clientX;
    })
    imgUl.addEventListener("touchmove", function(e){
        moveX = e.touches[0].clientX;
        isMove = true;
        //3、图片能滑动(touch)
            distance = moveX - startX;
            xiaobing.removeTransition(imgUl);
            xiaobing.setTransform(imgUl,-num*width+distance);
        // if(distance>0){
        //     //distance>0,右滑，就是要看上一张
        //     setTransform(imgUl,-num*width+distance);
        // }else{
        //     //distance<0,左滑，就是要看下一张
        //     setTransform(imgUl,-num*width+distance);
        // }
        
    })
    imgUl.addEventListener("touchend", function(e){
        endX = moveX;
        if(isMove){
            if(Math.abs(distance)>width/3){
              if(distance>0){
                    num--;
              }else{
                    num++;
              }
                xiaobing.addTransition(imgUl);
                xiaobing.setTransform(imgUl,-num*width);

            }else{
                xiaobing.addTransition(imgUl);
                xiaobing.setTransform(imgUl,-num*width);
            }
        }
        clearInterval(box.timer);
        box.timer = setInterval(function(){
        num++;
        xiaobing.addTransition(imgUl);
        xiaobing.setTransform(imgUl,-num*width);

        }, 5000)
        startX = 0 ;
        moveX = 0 ;
        endX = 0;
        isMove = false;
        distance = 0;
    });
    
}

//window.onload=function(){
//   topSwipe(".nav_box");
//}
    //1、可以滑动  （touch  Y   改造setTransform）
    //2、往下滑动如果超出一定距离，不能滑动
    //3、往上滑动如果超出一定距离，不能滑动
    //4、当滑动大于最大定位区间，定位回去
    //5、当滑动小于最小定位区间，定位回去
    //6、点击ul的时候，改变当前li的样式（now）
    //7、点击的时候，被点击的li滑动到最顶端，如果滑动到最顶端超出定位区间，保持原位
function topSwipe(str){
    //获取事件源和相关元素
    var parentBox = document.querySelector(str);
    //console.log(parentBox);
    var childBox = parentBox.querySelector("ul");
    var w = parentBox.offsetWidth;
    var W = childBox.offsetWidth;
    /*console.log(W)
    console.log(w)*/
    
    //缓冲距离
    var distance = 0;
    //最大定位距离
    var maxPositon = 0;
    //最小定位距离
    var minPosition = w-W;
    /*console.log(minPosition)*/
    //最大滑动距离
    var maxSwipe = maxPositon+distance;
    //最小滑动距离
    var minSwipe = minPosition-distance;
    //还需要滑动相关变量
    var start = 0;//记录开始滑动的位置
    var move = 0;//记录滑动时的位置
    var isMove = false;//记录是否滑动
    var moveX = 0;//记录滑动的距离
    var currX = 0;//记录当前的位置


    //1、可以滑动  （touch  Y   改造setTransform）
    childBox.addEventListener("touchstart", function(){
        start = event.touches[0].pageX;
        //console.log(start);
    });
    childBox.addEventListener("touchmove",function(){
        console.log(moveX)
        isMove = true;
        move = event.touches[0].pageX;
        moveX = move - start;
        if(moveX+currX<maxSwipe&&moveX+currX>minSwipe){
           xiaobing.removeTransition(childBox);
            xiaobing.setTransform(childBox, currX+moveX,"X")
        }
        
    });
    childBox.addEventListener("touchend",function(){
        if(isMove){
            if(moveX+currX>maxPositon){
                currX = maxPositon;
            }else if(moveX+currX<minPosition){
                currX = minPosition
            }else{
                currX = moveX + currX;
            }
        }
        xiaobing.addTransition(childBox);
        xiaobing.setTransform(childBox,currX,"X");
        start = 0;//记录开始滑动的位置
        move = 0;//记录滑动时的位置
        isMove = false;//记录是否滑动
        moveX = 0;//记录滑动的距离
        
    })
    
      //7、点击的时候，被点击的li滑动到最顶端，如果滑动到最顶端超出定位区间，保持原位
    xiaobing.tap(childBox,function(){
        var currLi = event.target.parentNode;
        var liArr = childBox.children;//6、点击ul的时候，改变当前li的样式（now）
        for(var i = 0;i<liArr.length;i++){
        	liArr[i].index = i;
            liArr[i].className="";
        }
        //currLi.className = "now";
        if(-currLi.index*currLi.offsetWidth>minPosition){
            currX = -currLi.index*currLi.offsetWidth;
        }else{
            currX = minPosition;
        }
            xiaobing.addTransition(childBox);
            xiaobing.setTransform(childBox,currX,"X");

    })


}
/*============================cookie=======================*/
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
				return "";
			}
		}

		// 删除COOKIE的方法
		function delCookie(key){
			var exp = new Date();		// 实例化日期对象
			exp.setTime(0);
			var cval = getCookie(key);

			if(cval != ""){
				document.cookie = key+'='+cval+';expires='+exp.toGMTString();
			}
		}
/*------------------------------返回顶部-----------------------------*/

$(".fhdb").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部

$("html,body").animate({scrollTop:"0px"},200);

});
