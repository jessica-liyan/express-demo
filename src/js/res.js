$(function(){
  // 注册
  $('button').click(function(){
    var name = $('input').eq(0).val()
    var pwd = $('input').eq(1).val()
    console.log('点击', name, pwd)

    $.ajax({
      type: 'post',
      url: '/res',
      dataType: "json",
      data: {
        username: name,
        password: pwd
      },
      success: function(res){
        if(res.status === 1){
          alert('注册成功')
          window.location.href = '/login'
        }
      }
    })
  })
})