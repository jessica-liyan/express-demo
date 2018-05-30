$(function(){
  // 注册
  $('button').click(function(){
    var name = $('input').eq(0).val()
    var pwd = $('input').eq(1).val()
    console.log('登录', name, pwd)

    $.ajax({
      type: 'post',
      url: '/login',
      dataType: "json",
      data: {
        username: name,
        password: pwd
      },
      success: function(res){
        console.log(res)
      }
    })
  })
})