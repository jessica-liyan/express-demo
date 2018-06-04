$(function(){
  $('.tab-down').hide()
  $('.tab-down').eq(0).show()
  $('.tab-down .tips').click(function(){
    $(this).parent('.tab-down').hide().siblings('.tab-down').show()
  })
  // 登录
  $('.btn').eq(0).click(function(){
    var name = $("input[name='username']").eq(0).val()
    var pwd = $("input[name='password']").eq(0).val()
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
        if(res.status === 1){
          alert('登录成功')
          window.location.href='/'
        }
      }
    })
  })

  // 注册
  $('.btn').eq(1).click(function(){
    var name = $("input[name='username']").eq(1).val()
    var pwd = $("input[name='password']").eq(1).val()
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