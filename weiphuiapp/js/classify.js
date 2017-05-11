window.onload=function(){
    leftSwipe(".class_main_left");
    /*leftSwipe(".class_main_right")*/
   lis();
}
    //1、可以滑动  （touch  Y   改造setTransform）
    //2、往下滑动如果超出一定距离，不能滑动
    //3、往上滑动如果超出一定距离，不能滑动
    //4、当滑动大于最大定位区间，定位回去
    //5、当滑动小于最小定位区间，定位回去
    //6、点击ul的时候，改变当前li的样式（now）
    //7、点击的时候，被点击的li滑动到最顶端，如果滑动到最顶端超出定位区间，保持原位
function leftSwipe(str){
    //获取事件源和相关元素
    var parentBox = document.querySelector(str);
    var childBox = parentBox.querySelector("ul");
    var h = parentBox.offsetHeight;
    var H = childBox.offsetHeight;
    //缓冲距离
    var distance = 100;
    //最大定位距离
    var maxPositon = 0;
    //最小定位距离
    var minPosition = h-H;
    //最大滑动距离
    var maxSwipe = maxPositon+distance;
    //最小滑动距离
    var minSwipe = minPosition-distance;
    //还需要滑动相关变量
    var start = 0;//记录开始滑动的位置
    var move = 0;//记录滑动时的位置
    var isMove = false;//记录是否滑动
    var moveY = 0;//记录滑动的距离
    var currY = 0;//记录当前的位置


    //1、可以滑动  （touch  Y   改造setTransform）
    childBox.addEventListener("touchstart", function(){
        start = event.touches[0].pageY;
    });
    childBox.addEventListener("touchmove",function(){
        isMove = true;
        move = event.touches[0].pageY;
        moveY = move - start;
        if(moveY+currY<maxSwipe&&moveY+currY>minSwipe){
            xiaobing.removeTransition(childBox);
            xiaobing.setTransform(childBox, currY+moveY,"Y")
        }
        
    });
    childBox.addEventListener("touchend",function(){
        if(isMove){
            if(moveY+currY>maxPositon){
                currY = maxPositon;
            }else if(moveY+currY<minPosition){
                currY = minPosition
            }else{
                currY = moveY + currY;
            }
        }
        xiaobing.addTransition(childBox);
        xiaobing.setTransform(childBox,currY,"Y");
        start = 0;//记录开始滑动的位置
        move = 0;//记录滑动时的位置
        isMove = false;//记录是否滑动
        moveY = 0;//记录滑动的距离
        
    })
    
    //7、点击的时候，被点击的li滑动到最顶端，如果滑动到最顶端超出定位区间，保持原位
    xiaobing.tap(childBox,function(){
        var currLi = event.target.parentNode;
        var liArr = childBox.children;
        //6、点击ul的时候，改变当前li的样式（now）
        for(var i = 0;i<liArr.length;i++){
            liArr[i].index = i;
            liArr[i].className="";
        }
        currLi.className = "classone";
        if(-currLi.index*currLi.offsetHeight>minPosition){
            currY = -currLi.index*currLi.offsetHeight;
        }else{
            currY = minPosition;
        }
            xiaobing.addTransition(childBox);
            xiaobing.setTransform(childBox,currY,"Y");

    })


}
function lis(){
	var left_li=document.querySelectorAll('.class_main_left ul li')
	for(i=0;i<left_li.length;i++){
		left_li[0].onclick=function(){
			$(".main_right_a").show();
			$(".main_right_b").hide();
			$(".main_right_c").hide();
			$(".main_right_d").hide();
			$(".main_right_e").hide();
			$(".main_right_f").hide();
			$(".main_right_g").hide();
			$(".main_right_h").hide();
			$(".main_right_j").hide();
			$(".main_right_k").hide();
			$(".main_right_l").hide();
			$(".main_right_z").hide();
			$(".main_right_x").hide();
			$(".main_right_v").hide();
			
			
		}
		left_li[1].onclick=function(){
			$(".main_right_b").show();
			$(".main_right_a").hide();
			$(".main_right_c").hide();
			$(".main_right_d").hide();
			$(".main_right_e").hide();
			$(".main_right_f").hide();
			$(".main_right_g").hide();
			$(".main_right_h").hide();
			$(".main_right_j").hide();
			$(".main_right_k").hide();
			$(".main_right_l").hide();
			$(".main_right_z").hide();
			$(".main_right_x").hide();
			$(".main_right_v").hide();
		}
		left_li[2].onclick=function(){
			$(".main_right_a").hide();
			$(".main_right_b").hide();
			$(".main_right_c").show();
			$(".main_right_d").hide();
			$(".main_right_e").hide();
			$(".main_right_f").hide();
			$(".main_right_g").hide();
			$(".main_right_h").hide();
			$(".main_right_j").hide();
			$(".main_right_k").hide();
			$(".main_right_l").hide();
			$(".main_right_z").hide();
			$(".main_right_x").hide();
			$(".main_right_v").hide();
		}
		left_li[3].onclick=function(){
			$(".main_right_a").hide();
			$(".main_right_b").hide();
			$(".main_right_c").hide();
			$(".main_right_d").show();
			$(".main_right_e").hide();
			$(".main_right_f").hide();
			$(".main_right_g").hide();
			$(".main_right_h").hide();
			$(".main_right_j").hide();
			$(".main_right_k").hide();
			$(".main_right_l").hide();
			$(".main_right_z").hide();
			$(".main_right_x").hide();
			$(".main_right_v").hide();
		}
		left_li[4].onclick=function(){
			$(".main_right_a").hide();
			$(".main_right_b").hide();
			$(".main_right_c").hide();
			$(".main_right_d").hide();
			$(".main_right_e").show();
			$(".main_right_f").hide();
			$(".main_right_g").hide();
			$(".main_right_h").hide();
			$(".main_right_j").hide();
			$(".main_right_k").hide();
			$(".main_right_l").hide();
			$(".main_right_z").hide();
			$(".main_right_x").hide();
			$(".main_right_v").hide();
		}
		left_li[5].onclick=function(){
			$(".main_right_a").hide();
			$(".main_right_b").hide();
			$(".main_right_c").hide();
			$(".main_right_d").hide();
			$(".main_right_e").hide();
			$(".main_right_f").show();
			$(".main_right_g").hide();
			$(".main_right_h").hide();
			$(".main_right_j").hide();
			$(".main_right_k").hide();
			$(".main_right_l").hide();
			$(".main_right_z").hide();
			$(".main_right_x").hide();
			$(".main_right_v").hide();
		}
		left_li[6].onclick=function(){
			$(".main_right_a").hide();
			$(".main_right_b").hide();
			$(".main_right_c").hide();
			$(".main_right_d").hide();
			$(".main_right_e").hide();
			$(".main_right_f").hide();
			$(".main_right_g").show();
			$(".main_right_h").hide();
			$(".main_right_j").hide();
			$(".main_right_k").hide();
			$(".main_right_l").hide();
			$(".main_right_z").hide();
			$(".main_right_x").hide();
			$(".main_right_v").hide();
		}
		left_li[7].onclick=function(){
			$(".main_right_a").hide();
			$(".main_right_b").hide();
			$(".main_right_c").hide();
			$(".main_right_d").hide();
			$(".main_right_e").hide();
			$(".main_right_f").hide();
			$(".main_right_g").hide();
			$(".main_right_h").show();
			$(".main_right_j").hide();
			$(".main_right_k").hide();
			$(".main_right_l").hide();
			$(".main_right_z").hide();
			$(".main_right_x").hide();
			$(".main_right_v").hide();
		}
		left_li[8].onclick=function(){
			$(".main_right_a").hide();
			$(".main_right_b").hide();
			$(".main_right_c").hide();
			$(".main_right_d").hide();
			$(".main_right_e").hide();
			$(".main_right_f").hide();
			$(".main_right_g").hide();
			$(".main_right_h").hide();
			$(".main_right_j").show();
			$(".main_right_k").hide();
			$(".main_right_l").hide();
			$(".main_right_z").hide();
			$(".main_right_x").hide();
			$(".main_right_v").hide();
		}
		left_li[9].onclick=function(){
			$(".main_right_a").hide();
			$(".main_right_b").hide();
			$(".main_right_c").hide();
			$(".main_right_d").hide();
			$(".main_right_e").hide();
			$(".main_right_f").hide();
			$(".main_right_g").hide();
			$(".main_right_h").hide();
			$(".main_right_j").hide();
			$(".main_right_k").show();
			$(".main_right_l").hide();
			$(".main_right_z").hide();
			$(".main_right_x").hide();
			$(".main_right_v").hide();
		}
		left_li[10].onclick=function(){
			$(".main_right_a").hide();
			$(".main_right_b").hide();
			$(".main_right_c").hide();
			$(".main_right_d").hide();
			$(".main_right_e").hide();
			$(".main_right_f").hide();
			$(".main_right_g").hide();
			$(".main_right_h").hide();
			$(".main_right_j").hide();
			$(".main_right_k").hide();
			$(".main_right_l").show();
			$(".main_right_z").hide();
			$(".main_right_x").hide();
			$(".main_right_v").hide();
		}
		left_li[11].onclick=function(){
			$(".main_right_a").hide();
			$(".main_right_b").hide();
			$(".main_right_c").hide();
			$(".main_right_d").hide();
			$(".main_right_e").hide();
			$(".main_right_f").hide();
			$(".main_right_g").hide();
			$(".main_right_h").hide();
			$(".main_right_j").hide();
			$(".main_right_k").hide();
			$(".main_right_l").hide();
			$(".main_right_z").show();
			$(".main_right_x").hide();
			$(".main_right_v").hide();
		}
		left_li[12].onclick=function(){
			$(".main_right_a").hide();
			$(".main_right_b").hide();
			$(".main_right_c").hide();
			$(".main_right_d").hide();
			$(".main_right_e").hide();
			$(".main_right_f").hide();
			$(".main_right_g").hide();
			$(".main_right_h").hide();
			$(".main_right_j").hide();
			$(".main_right_k").hide();
			$(".main_right_l").hide();
			$(".main_right_z").hide();
			$(".main_right_x").show();
			$(".main_right_v").hide();
		}
		left_li[13].onclick=function(){
			$(".main_right_a").hide();
			$(".main_right_b").hide();
			$(".main_right_c").hide();
			$(".main_right_d").hide();
			$(".main_right_e").hide();
			$(".main_right_f").hide();
			$(".main_right_g").hide();
			$(".main_right_h").hide();
			$(".main_right_j").hide();
			$(".main_right_k").hide();
			$(".main_right_l").hide();
			$(".main_right_z").hide();
			$(".main_right_x").hide();
			$(".main_right_v").show();
		}
	}
	
}
