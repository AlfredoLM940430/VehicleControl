$(document).ready(() => {

    $('#submit-button').prop('disabled', true);
    $('#submit-button').mouseenter(function () { 
        afterSubmit();
    });

    $('#form-login input').each(function() {
        $(this).keyup(function () { 
            validateInputs();
        });
    });

    $('#form-login').submit(function (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        formLogin(formData);
    });

});

function afterSubmit() {
    const usuario = $('#username').val();
    const pass = $('#password').val();
    
    if(!usuario.length > 0 || !pass.length > 0) {
        Swal.fire('Completa todos los campos');
        return;
    }
    if(pass.length >= 1 && pass.length <= 5) {
        Swal.fire('La contraseña debe contener al menos 6 caracteres');
    }
}

function validateInputs() {

    const usuario = $('#username').val();
    const pass = $('#password').val();

    if(usuario.length > 0 && pass.length > 5) {
        $('#submit-button').prop('disabled', false);
        $('#submit-button').html('<i class="fa-solid fa-right-to-bracket" style="color: white;"></i><span> Ingresar</span>');
        $('#submit-button').removeClass('btn-secondary');
        $('#submit-button').addClass('btn-primary');
        return;
    }
    disabledSubmit();
}

function formLogin(formData) {

    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function (response) {
            if(response.status === 'success') {
                localStorage.setItem('id', response.id);
                localStorage.setItem('name', response.name);
                localStorage.setItem('token', response.token);
                window.location = `http://${window.location.host}/inicio.php`;
                return;
            }
            badReq(response);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function badReq(msgs) {
    Swal.fire({
        icon: msgs.status,
        title: 'Error',
        text: msgs.message,
    }).then(() => {
        $('#username').focus();
    });
    $('#password').val('');
    disabledSubmit();
}

function disabledSubmit() {
    $('#submit-button').prop('disabled', true);
    $('#submit-button').find('span').remove();
    $('#submit-button').removeClass('btn-primary');
    $('#submit-button').addClass('btn-secondary');
}
