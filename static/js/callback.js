/* переопределить поведение кнопки "Отправить" */
$(document).ready(function () {
    $("#form1").submit(function( event ) {
        CallBackForm("form1", "msg");
        event.preventDefault();
    });
});

/* отправка данных на сервер по AJAX */
function CallBackForm(form, msg){
    let from = new FormData();
    from.append('name', $( "#name" ).val());
    from.append('phone', $( "#phone" ).val());
    from.append('csrf_token', $( "#csrf_token" ).val());
    axios({
        url: '/callback',
        method: 'post',
        data: from,
    })
    .then(function (response) {
        $( '#' + msg ).html(response.data.msg);
        if (response.data.success == 'true') {
            $( "#" + form ).trigger('reset');
        }
        else
        {
            alert("Что-то пошло не так!");
            console.log("Ошибка");
        }
    })
    .catch(function (error) {
        console.log(error);
    });
};
