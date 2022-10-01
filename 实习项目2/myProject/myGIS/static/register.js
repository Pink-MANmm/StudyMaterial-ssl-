function delay(url) {
    $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
            location.href = url
        }
    })
}
$('#enter').on('click', function () {
    let username = $('#userName').val()
    let password = $('#passWord').val()
    let confirm = $('#confirm').val()
    if (username.length >= 6) {
        if (password.length >= 6) {
            if (confirm === password) {
                $.ajax({
                    url: '/main/',
                    type: 'POST',
                    data: { 'userName': JSON.stringify(username), 'passWord': JSON.stringify(password), 'confirm': JSON.stringify(confirm) },
                    success: function (data) {
                        if (data['status'] == '账号已注册，请返回登录') {
                            alert(data['status'])
                            delay('/')
                        } else {
                            alert(data['status'])
                            $.ajax({
                                url: '/addUser/',
                                type: 'POST',
                                data: { 'username': JSON.stringify(data['username']), 'password': JSON.stringify(data['password']) },
                                success: function (data) {
                                }
                            })
                        }
                    }
                })
            } else if (confirm != password) {
                alert('两次密码输入不一致!')
                delay('/register/')
            }
        } else {
            alert('密码不得少于6位!')
            delay('/register/')
        }
    } else {
        alert('用户名不得少于6位!')
        delay('/register/')
    }
})
