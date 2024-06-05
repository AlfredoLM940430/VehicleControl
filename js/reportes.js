$(document).ready(function () {
    
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('name');
    const id = localStorage.getItem('id');

    // Nombre de usuario
    $('.dropdown-toggle').html(`<i class="fa-solid fa-user"></i> ${user}`);

    // Pagina-TAB activo
    $('.main-menu a').each(function(){
        if(this.href === window.location.href) {
            $(this).addClass('active-tab');
        }
    });
    getReporte(token);
    $('#divTable').hide();

    $('#fileexport').click(function (e) { 
        e.preventDefault();
        $('.buttons-excel').click();
        $('#report input').each(function () {
            $(this).prop('checked', false);
        });
        $('#fileexport').attr('disabled', true);
    });

    $(document).unbind().click(function (e) {
        if(e.target.localName !== 'ul' && e.target.localName !== 'li' && e.target.localName !== 'label' && e.target.localName !== 'img') {
            $('#fileexport').attr('disabled', true);
        }
    });
});

function getReporte(token) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'data_reports.select',
            token,
        },
        dataType: 'json',
        success: function (response) {
            handleReports(response)
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function handleReports(response) {

    const t_body = $('#report');
    response.records.forEach((el) => {
        $(t_body).append(`
            <li>
                <input type="checkbox" id="report${el[0]}" />
                <label class="idlabel text-center" for="report${el[0]}"><img style="width: 3.5rem;" src="img/Office_Calc.png" /></label>
                <p class="text-center">${el[1]}</p>
            </li>
        `);
    });

    $('#report input').each(function () {
        $(this).click(function (e) {
            $('#report input').each(function () {
                $(this).prop('checked', false);
            });
            $(this).prop('checked', true);
            getRepoID(this.id.split('').slice(6).join(''));
        });
    });
}

function getRepoID(id) {
    console.log(id);
    const token = localStorage.getItem('token');
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'data_reports.report',
            token,
            id
        },
        dataType: 'json',
        success: function (response) {
            setRepovalues(response)
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function setRepovalues(response) {

    $('#divTable').html(`
        <table class="table" id="exportReportes">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">username</th>
                    <th scope="col">password</th>
                    <th scope="col">email</th>
                    <th scope="col">phone</th>
                    <th scope="col">emergencyphone</th>
                    <th scope="col">driversid</th>
                    <th scope="col">driversidduedate</th>
                    <th scope="col">active</th>
                    <th scope="col">delete</th>
                </tr>
            </thead>
            <tbody id="exportid">
            </tbody>
        </table>
    `);

    $('#exportid').empty();
    response.records.forEach((el) => {
        $('#exportid').append(`
            <tr>
                <td>${el[0]}</td>
                <td>${el[1]}</td>
                <td>${el[2]}</td>
                <td>${el[3]}</td>
                <td>${el[4]}</td>
                <td>${el[5]}</td>
                <td>${el[6]}</td>
                <td>${el[7]}</td>
                <td>${el[8]}</td>
                <td>${el[9]}</td>
                <td>${el[10]}</td>
            </tr>
        `);
    });

    settableOptions();
}

function settableOptions() {

    $('#exportReportes').DataTable({
        layout: {
            topStart: {
                buttons: ['excel']
            }
        },
        buttons: [{ extend: 'excel', text: 'Copy to clipboard' }],
        paging: false,
        scrollY: 450,
        scrollX: true,
        searching: false,
        "info": false,
    });

    $('#fileexport').attr('disabled', false);
}