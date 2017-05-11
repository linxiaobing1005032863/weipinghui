/*window.onload=function(){
	sktime()
	delect()
}*/
window.onload=function(){
    deleteFn();
    changeNum()
    sktime()
}
function sktime(){
   
   var sk=20*60;
   //var sk=10;
    var skDiv = document.querySelector(".Timedown");
    var spanS = skDiv.children;
    skDiv.timer=setInterval(function(){
        if(sk<1){
           clearInterval(skDiv.timer);
           window.location.href="kongwc.html"
           
        }else{
            sk--;
            
           /* var hour = Math.floor(sk/3600);*/
           var minute = Math.floor(sk/60);
            var second = sk%60;
            
            if(minute<10){
                spanS[0].innerHTML=0;
                spanS[1].innerHTML=minute;
            }else{
                spanS[0].innerHTML=Math.floor(minute/10);
                spanS[1].innerHTML=minute%10;
            }
            if(second<10){
                spanS[3].innerHTML=0;
                spanS[4].innerHTML=second;
            }else{
                spanS[3].innerHTML=Math.floor(second/10);
                spanS[4].innerHTML=second%10;
            }
        }
    }, 1000)
}
/*function delect(){
	var delect=document.querySelectorAll('.delect');
	var mask=document.querySelector('.mask')
	var cancel=document.querySelector('.cancel');
	var yes=document.querySelector('.yes');
	var cart_information=document.querySelector('.cart_information');
	var cart_zon=document.querySelector('.cart_zon');
	var cart_footer=document.querySelector('.cart_footer')
	
	
	delect.onclick=function(){
		mask.style.display="block";
	}
	cancel.onclick=function(){
		mask.style.display="none";
	}
	yes.onclick=function(){
		mask.style.display="none";
		cart_information.innerHTML="";
		cart_zon.innerHTML="";
		cart_footer.innerHTML="";
		setTimeout(function(){
			window.location.href="kongwc.html"
		},1000)
	}
}*/

// 分析
// 1、点击delete_btn,mask显示，同时delete_up逆时针旋转30deg
// 2、点击取消按钮，mask隐藏，delete_up逆时针旋转0deg
// 3、点击确定按钮，mask隐藏，当前delete_btn所在的商品信心消失
// 4、如果某个商店商品信息全部消失该商店消失；
// 5、点击+，商品数量+1，点击-，商品数量-1；
// 6、点击选中按钮，按钮被选中
function deleteFn(){
    //0 获取事件源和相关元素
    var delBtnArr=document.getElementsByClassName("delect");
    var mask = document.querySelector(".mask");
    // var deleteUpArr = document.querySelectorAll(".delect");
    // 1、点击delect,mask显示，同时delete_up逆时针旋转30deg
    for(var i=0;i<delBtnArr.length;i++){
        delBtnArr[i].onclick=function(){
            mask.style.display="block";
            /*this.children[0].className = "delete_up del";*/
            // 2、点击取消按钮，mask隐藏，delete_up逆时针旋转0deg
            var cancelBtn = mask.children[0].children[1].children[0];
            var yesBtn = mask.children[0].children[1].children[1];
            //用that缓存住当前被点击的那个垃圾桶按钮
            var that = this;
            // 2、点击取消按钮，mask隐藏，delete_up逆时针旋转0deg
            cancelBtn.onclick=function(){
                mask.style.display="none";
               /* that.children[0].className ="delete_up";*/
            }
            // 3、点击确定按钮，mask隐藏，当前delete所在的商品信心消失
            yesBtn.onclick=function(){
                mask.style.display="none";
                var money_box_top=document.querySelectorAll('.money_box_top span')[1];
                var money_box_down=document.querySelectorAll('.money_box_down span')[1];
                var cart_foot=document.querySelectorAll('.cart_foot span')[0];
                
                var currProduct = that.parentNode.parentNode;
                //console.log(currProduct)
                var currShopCon = currProduct.parentNode;
                //console.log(currShopCon)
                currShopCon.removeChild(currProduct);
                var currShop = currShopCon.parentNode;
                var cart_main=document.querySelector('.cart_main')
                // 4、如果某个商店商品信息全部消失该商店消失；
                if(currShopCon.children.length<=2){
                    currShop.removeChild(currShopCon);
                    money_box_top.innerHTML="￥0";
                    money_box_down.innerHTML="￥0";
                    cart_foot.innerHTML="￥0";
                    
                }
            }

        }
    }
}
//分析
//1、点击+，数字加1，不能超过99，加号变灰色
//2、点击-，数字减1，不能小于1，减号变灰色
function changeNum(){
    //0 获取事件源和相关元素
    var  change = document.querySelectorAll(".change_num");
    for(var i=0;i<change.length;i++){
        change[i].onclick=function(){
            var con = event.target.innerHTML;
            var inp = this.children[1];
            var cart_infor_right=document.querySelectorAll('.cart_infor_right span i')[0].innerHTML;
            	//console.log(cart_infor_right)
            	var result=document.querySelectorAll('.ii')[0];
            	console.log(result)
            	var money_box_down=document.querySelectorAll('.money_box_down i')[0];
            	var money_box_top=document.querySelectorAll('.money_box_top i')[0];
            	var cart_foot=document.querySelectorAll('.cart_foot p span i')[0];
            if(con=="-"&&inp.value>1){
            	inp.value--;
            	var value=inp.value;
            	//console.log(value);
            	var pay_money=value*cart_infor_right;
            	result.innerHTML=pay_money;
            	money_box_down.innerHTML=pay_money
            	money_box_top.innerHTML=pay_money
            	 cart_foot.innerHTML=pay_money
            }else if(con=="+"&&inp.value<99){
                inp.value++;
                 console.log(inp.value);
                 var value=inp.value;
            	//console.log(value);
            	var cart_infor_right=document.querySelectorAll('.cart_infor_right span i')[0].innerHTML;
            	//console.log(cart_infor_right)
            	var result=document.querySelectorAll('.ii')[0];
            	console.log(result)
            	var money_box_down=document.querySelectorAll('.money_box_down i')[0];
            	var money_box_top=document.querySelectorAll('.money_box_top i')[0];
            	var cart_foot=document.querySelectorAll('.cart_foot p span i')[0];
            	var pay_money=value*cart_infor_right;
            	result.innerHTML=pay_money;
            	money_box_down.innerHTML=pay_money
            	money_box_top.innerHTML=pay_money
            	 cart_foot.innerHTML=pay_money
            }
        }
    }
    //如果用户输入非数字，改为1
    var inpArr = document.querySelectorAll("input");
    for(var j=0;j<inpArr.length;j++){
        inpArr[j].onblur=function(){
            var val = this.value;
            if(isNaN(val)){
                this.value=1;
            }
        }
    }
}