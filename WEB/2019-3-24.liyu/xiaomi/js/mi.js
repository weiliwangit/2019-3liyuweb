//购物车部分
allCart();
function allCart(){
	var oCart=document.querySelector(".ul1 .cart");
	var ocatBox=document.querySelector('.cat-box');
	var ocatBoxContent=document.querySelector('.cat-box-content');
	var oLoading=document.querySelector('.loading');
	var timer=null;
	// console.log(oLoading);
	oCart.onmouseenter=function(){
		// oLoading.style.display = 'block';
		clearInterval(timer);
		timer=setInterval(function(){
			ocatBox.style.height='100px';

		}，1000)
				ocatBoxContent.innerHTML="购物车中还没有商品，赶紧选购吧！";
	}
	oCart.onmouseleave=function(){
		// oLoading.style.display = "none";
		ocatBox.style.height = '0';
		ocatBoxContent.innerHTML="";
	}	
}
// 下拉菜单
allDown();
function allDown(){
	var oXdown=document.getElementById('xdown');
	var oLi=document.querySelectorAll('.li3');
	var oHeaderBox=document.querySelector('.header-box');
	console.log(oHeaderBox);
	for(i=0;i<oLi.length;i++){
		oLi[i].onmouseenter=function(){
			oXdown.style.height='200px';
		}
	}
	oHeaderBox.onmouseout=function(){
		oXdown.style.height='0';
	}		
}
	
