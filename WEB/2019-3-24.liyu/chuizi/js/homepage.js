//论坛版块下拉菜单
dropMu();
function dropMu(){
	var oLi7=document.querySelector(".li_7");
	var oDropMu=document.getElementById("dropmu");
	var timer=null;
	oLi7.onmouseenter=function(){
		clearTimeout(timer)
		oLi7.style.fontWeight = "bold"; 
		oDropMu.style.display="block";
	}
	oDropMu.onmouseleave=function(){
		timer=setTimeout(function(){
			oLi7.style.fontWeight = "";
			oDropMu.style.display="none";
		}, 30)
		
	}
}

// 轮播
wheel();
function wheel(){
	var oImg=document.getElementById("wheelimg");
	var oImgTwo=document.getElementById("whillimgtwo");
	var oSpan1=document.getElementById("span1");
	var oSpan2=document.getElementById("span2");
	var timer1=null;
	var timer2=null;
	var timer3 = null;
	var iSpeed = 0;
	// 底部按钮
	twoButton();
	function twoButton(){
		// 底部按钮样式
		function ospan1(){
			oImgTwo.style.zIndex = 1;
	    	oImg.style.zIndex = 99;
	    	oSpan2.style.marginTop = "-5px";
	    	oSpan2.style.width="10px";
	    	oSpan2.style.height ="10px";
	    	oSpan1.style.width="12px";
	    	oSpan1.style.height = "12px";
	    	oSpan1.style.marginTop = "-6.5px";
		};
	    oSpan1.onclick=function(){
	    	ospan1();
	    };
	    // 底部按钮样式
	    function ospan2(){
	    	oImg.style.zIndex = 1;
	    	oImgTwo.style.zIndex = 99;
	    	oSpan1.style.marginTop = "-5px";
	    	oSpan1.style.width="10px";
	    	oSpan1.style.height = "10px";
	    	oSpan2.style.width="12px";
	    	oSpan2.style.height = "12px";
	    	oSpan2.style.marginTop = "-6.5px";
	    }
	    oSpan2.onclick=function(){
			ospan2();
	    };
	}
	timer1=setInterval(oSpan1.onclick, 2000);
	timer2=setInterval(oSpan2.onclick, 4000);
	
}
//选择手机
phone();
function phone(){
	var oROMson=document.querySelector(".ROMson");
	var oROMbro=document.querySelector(".ROMbro");
	//点击选择手机品牌消失，手机品牌列表出现
	oROMson.onclick=function(){
		oROMson.style.display = 'none';
		oROMbro.style.display = 'block';
		oROMbro.style.zIndex = 10;
	}

	//点击每个手机品牌
	var oBab=document.querySelectorAll(".bab");
	var phoneArr=["手机品牌：小米","手机品牌：一加","手机品牌：Nexus","手机品牌：三星"];
	var oROMsonP=document.querySelector(".ROMson p");
	var oPhs=document.getElementById("phs");
	var oGongTong=document.querySelectorAll(".gongtong");
	var oKong=document.querySelector(".kong");
	var oPh=document.getElementById("ph")
	oBab[0].onclick=function(){
		oROMson.style.display = 'block';
		oROMsonP.innerHTML=phoneArr[0];
		oPhs.style.display="block";
		oPhs.style.cursor = "pointer";
		oPhsp.innerHTML="请选择机型";
	}
	oBab[1].onclick=function(){
		oROMson.style.display = 'block';
		oROMsonP.innerHTML=phoneArr[1];
		oPhs.style.display="block";
		oPhs.style.cursor = "pointer";
		oPhsp.innerHTML="请选择机型";
	}
	oBab[2].onclick=function(){
		oROMson.style.display = 'block';
		oROMsonP.innerHTML=phoneArr[2];
		oPhs.style.display="block";
		oPhs.style.cursor = "pointer";
		oPhsp.innerHTML="请选择机型";
	}
	oBab[3].onclick=function(){
		oROMson.style.display = 'block';
		oROMsonP.innerHTML=phoneArr[3];
		oPhs.style.display="block";
		oPhs.style.cursor = "pointer";
		oPhsp.innerHTML="请选择机型";
	}
	//点击请选择机型
	var oBrobro=document.querySelector(".brobro");
	var oYiJia=document.querySelector(".yijia");
	var oNexus=document.querySelector(".nexus");
	var oSanXing=document.querySelector(".sanxing");
	oPhs.onclick=function(){
		//判断下标
		if(oROMsonP.innerHTML==phoneArr[0]){
			oBrobro.style.display = 'block';
			oBrobro.style.zIndex = 8;
		}
		if(oROMsonP.innerHTML==phoneArr[1]){
			oYiJia.style.display = 'block';
			oYiJia.style.zIndex = 8;
		}
		if(oROMsonP.innerHTML==phoneArr[2]){
			oNexus.style.display = 'block';
			oNexus.style.zIndex = 8;
		}
		if(oROMsonP.innerHTML==phoneArr[3]){
			oSanXing.style.display = 'block';
			oSanXing.style.zIndex = 8;
		}

	}

	//点击请选择机型手机品牌列表消失
	var oXiao=document.querySelector(".xiao");
	oXiao.onclick=function(){
		oBrobro.style.display = 'none';
		oPhs.style.display="block";
	}
	var oYi=document.querySelector(".yi");
    oYi.onclick=function(){
    	oYiJia.style.display = 'none';
    	oPhs.style.display="block";
    }
    var oNex=document.querySelector(".nex");
	oNex.onclick=function(){
    	oNexus.style.display = 'none';
    	oPhs.style.display="block";
    }
    var oSan=document.querySelector(".san");
    oSan.onclick=function(){
    	oSanXing.style.display = 'none';
    	oPhs.style.display="block";
    }
    //点击具体了表获取值
    var oMi4=document.getElementById("mi4");
	var oMi3=document.getElementById("mi3");
	var oPhsp=document.querySelector("#phs p");
	var oXaiZai=document.querySelector(".xiazai");
	var oShuaJi=document.querySelector(".shuaji");
	var oShuaJi2=document.querySelector(".shuaji2");
	oMi4.onclick=function(){
		oBrobro.style.display = 'none';
		oPhs.style.display = 'block';
		oPhsp.innerHTML="小米手机4";
        oXaiZai.style.backgroundColor = '#ce403c';
        oXaiZai.style.color = '#e9ece3';
        oShuaJi.style.backgroundColor = '#fefefe';
        oShuaJi.style.color = '#5c5c5c';
        oShuaJi.border= '#dfdfdf';
        oShuaJi.style.display = 'none';
        oShuaJi2.style.display = 'block';
	}
	oMi3.onclick=function(){
		oBrobro.style.display = 'none';
		oPhs.style.display = 'block';
		oPhsp.innerHTML="小米手机3";
		oXaiZai.style.background='#ce403c';
        oXaiZai.style.color = '#e9ece3';
        oShuaJi.style.background= '#fefefe';
        oShuaJi.style.color = '#5c5c5c';
        oShuaJi.style.display = 'none';
        oShuaJi2.style.display = 'block';
	}
	var oYiJiaOne=document.getElementById("yijione");
	var oPhsp=document.querySelector("#phs p");
	oYiJiaOne.onclick=function(){
		oYiJia.style.display = 'none';
		oPhs.style.display = 'block';
		oPhsp.innerHTML="一加手机1";
		oXaiZai.style.background= '#ce403c';
        oXaiZai.style.color = '#e9ece3';
        oShuaJi.style.background= '#fefefe';
        oShuaJi.style.color = '#5c5c5c';
        oShuaJi.style.display = 'none';
        oShuaJi2.style.display = 'block';
	}
	var oNexusPhone=document.getElementById("nexusphone");
	var oPhsp=document.querySelector("#phs p");
	oNexusPhone.onclick=function(){
		oNexus.style.display = 'none';
		oPhs.style.display = 'block';
		oPhsp.innerHTML="Nexus 5";
		oXaiZai.style.background= '#ce403c';
        oXaiZai.style.color = '#e9ece3';
        oShuaJi.style.background= '#fefefe';
        oShuaJi.style.color = '#5c5c5c';
        oShuaJi.style.display = 'none';
        oShuaJi2.style.display = 'block';
	}
	var oSanXingPhone=document.getElementById("sanxingphone");
	var oPhsp=document.querySelector("#phs p");
	oSanXingPhone.onclick=function(){
		oSanXing.style.display = 'none';
		oPhs.style.display = 'block';
		oPhsp.innerHTML="三星S5";
		oXaiZai.style.background = '#ce403c';
        oXaiZai.style.color = '#e9ece3';
        oShuaJi.style.background= '#fefefe';
        oShuaJi.style.color = '#5c5c5c';
        oShuaJi.style.display = 'none';
        oShuaJi2.style.display = 'block';
	}
	//点击手机品牌列表消失
	oROMbro.onclick=function(){
		oROMson.style.display = 'block';
		oROMbro.style.display = 'none';
	}
	
}
//点击减号1
oJan();
function oJan(){
	var oJh1=document.getElementById("jh1");
	var oJian2=document.getElementById("jian2");
	var oJian2fa=document.getElementById("jian2fa");
	var oPinglun=document.querySelector(".pinglun");
	var oLaslas=document.querySelector(".laslas");
	var  oJian1=document.getElementById("jian1");
	var oJh2=document.getElementById("jh2");
	oJian2.onclick=function(){
		oJian2fa.style.display = 'none';
		oPinglun.style.top="83px";
		if(oPinglun.style.height =='57px'){
			oLaslas.style.top="2328px";
		}else {
			oLaslas.style.top="3100px";
		}
	}
	oJh1.onclick=function(){
		oJian2fa.style.display = 'block';
		oPinglun.style.top="2594px";
		if(oPinglun.style.height =='57px'){
			oLaslas.style.top="2800px";
		}else {
			oLaslas.style.top="5552px";
		}
		
	}
	oJian1.onclick=function(){
		oPinglun.style.height = '57px';
		oPinglun.style.overflow = 'hidden';
		oJh2.style.display = 'block';
		if(oJian2fa.style.display =='block'){
			oLaslas.style.top="2800px";
		}else if(oJian2fa.style.display =='none'){
			oLaslas.style.top="2400px";
		}
	}
	oJh2.onclick=function(){
		oPinglun.style.height = '';
		oPinglun.style.overflow = '';
		oJh2.style.display = 'none';
		if(oJian2fa.style.display =='none'){
			oLaslas.style.top="3100px";
		}else if(oJian2fa.style.display =='block'){
			oLaslas.style.top="5552px";
		}
		
	}
}

