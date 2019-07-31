;(function($){
	var $input=$(".todo-input")
	console.log($input)
	$input.on('keydown',function(ev){
		// console.log(ev.keyCode)
		if(ev.keyCode==13){
			alert(11)
		}
	})
})(jQuery)