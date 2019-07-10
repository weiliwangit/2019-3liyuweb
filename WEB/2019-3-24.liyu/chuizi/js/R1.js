shensuo();
function shensuo(){
	var oPro2s=document.getElementById("Pro2s");
	var oZaiXian=document.getElementById("zaixian");
	var oTNT=document.getElementById("TNT");
	var oOS=document.getElementById("OS");
	oPro2s.onmouseenter=function(){
		oPro2s.style.marginLeft = '1px';
		oPro2s.style.marginRight = '39px';
		oZaiXian.style.marginLeft="55px";
	}
	oPro2s.onmouseleave=function(){
		oPro2s.style.marginLeft = '0px';
		oPro2s.style.marginRight = '38px';
		oZaiXian.style.marginLeft="56px";
	}
	oOS.onmouseenter=function(){
		oTNT.style.marginRight="39px";
		oOS.style.marginLeft = '1px';
		oOS.style.marginRight = '39px';
		oZaiXian.style.marginLeft="55px";
	}
	oOS.onmouseleave=function(){
		oTNT.style.marginRight="38px";
		oOS.style.marginLeft = '0px';
		oOS.style.marginRight = '38px';
		oZaiXian.style.marginLeft="56px";
	}
}