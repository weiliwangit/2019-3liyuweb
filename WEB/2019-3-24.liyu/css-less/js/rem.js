;(function(win,doc){
	var root=document.getElementsByTagName("html")[0];
	// console.log(root)
	function refresh(){
		// console.log("aa")
		var width=document.body.clientWidth||document.documentElement.clientWidth;
		var fontsize= width/10+'px';
		console.log(fontsize);
		root.style.fontSize = fontsize;
	}
	window.addEventListener("DOMContentload",refresh ,false);
	window.addEventListener("resize",refresh ,false)
})(window,document);