
;(function($){
    $('#logout').on('click',function(){
        $.ajax({
            url:'/user/logout'
        })
        .done(function(result){
            window.location.href = "/"
        })
        .fail(function(err){
            alert("请求失败,请稍后再试")
        })
    })
})(jQuery);