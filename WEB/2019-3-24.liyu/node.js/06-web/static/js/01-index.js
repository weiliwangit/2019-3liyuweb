;(function($){
    var $input = $('.todo-input')
    $input.on('keydown',function(ev){
        if(ev.keyCode == 13){
            //发送ajax
            $.ajax({
                url:"/add",
                type:'post',
                dataType:'json',
                data:{
                    task:$input.val()
                },
                success:function(result){
                    console.log(result)
                }

            })
        }
    })
})(jQuery)