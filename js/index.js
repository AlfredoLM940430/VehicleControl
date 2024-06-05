$(document).ready(() => {

    let token = localStorage.getItem('token');
    let user = localStorage.getItem('name');
    let id = localStorage.getItem('id');
    console.log(token);

    // Nombre de usuario
    $('.dropdown-toggle').html(`<i class="fa-solid fa-user"></i> ${user}`);

    // Pagina-TAB activo
    $('.main-menu a').each(function(){
        if(this.href === window.location.href) {
            $(this).addClass('active-tab');
        }
    });

    switch (window.location.pathname) {
        case '/vehiculos.php':
            vehiculos(token);
            break;
        case '/solicitudes.php':
            solicitudes(token);
            break;
        case '/configuracion.php':
            configuracion(token);
            break;    
        default:
            break;
    }
});

function vehiculos(token) {

    let carbrands = [
        "Abarth",
        "Alfa Romeo",
        "Aston Martin",
        "Audi",
        "Bentley",
        "BMW",
        "Bugatti",
        "Cadillac",
        "Chevrolet",
        "Chrysler",
        "Citroën",
        "Dacia",
        "Daewoo",
        "Daihatsu",
        "Dodge",
        "Donkervoort",
        "DS",
        "Ferrari",
        "Fiat",
        "Fisker",
        "Ford",
        "Honda",
        "Hummer",
        "Hyundai",
        "Infiniti",
        "Iveco",
        "Jaguar",
        "Jeep",
        "Kia",
        "KTM",
        "Lada",
        "Lamborghini",
        "Lancia",
        "Land Rover",
        "Landwind",
        "Lexus",
        "Lotus",
        "Maserati",
        "Maybach",
        "Mazda",
        "McLaren",
        "Mercedes-Benz",
        "MG",
        "Mini",
        "Mitsubishi",
        "Morgan",
        "Nissan",
        "Opel",
        "Peugeot",
        "Porsche",
        "Renault",
        "Rolls-Royce",
        "Rover",
        "Saab",
        "Seat",
        "Skoda",
        "Smart",
        "SsangYong",
        "Subaru",
        "Suzuki",
        "Tesla",
        "Toyota",
        "Volkswagen",
        "Volvo"
    ]

    $('#create').click(function (e) { 
        e.preventDefault();
        
        $(this).attr('data-target', `#${this.id}Modal`);
        $(this).attr('data-toggle', `modal`);

        $('.modal').attr('id', `${this.id}Modal`);
        $('.modal-header').html(`
            <h5 class="modal-title">Crear Vehículo</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        `);
    });

    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'vehicles.select',
            token,
        },
        dataType: 'json',
        success: function (response) {
            vehicleList(response, token);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

//! Solicitudes !//
function solicitudes() {};

function configuracion() {};


//!  Vehículos !//
function vehicleList(list, token) {

    const t_head = $('#t-head');
    const t_body = $('#t-body');
    $(t_head).empty();
    for (let i = 1; i < list.metadata.length; i++) {
        $(t_head).append(`<th scope="col">${list.metadata[i].name}</th>`);
    }
    $(t_body).empty();
    for (let i = 0; i < list.records.length; i++) {
        //console.log(list.records[i][0]);
        $(t_body).append(`
            <tr id="${list.records[i][0]}">
                <td scope="row">${list.records[i][1]}</th>
                <td>${list.records[i][2] === 0 ? 'Directivo' : 'Servicio'}</td>
                <td>${list.records[i][3]}</td>
                <td>${list.records[i][4]}</td>
                <td>${list.records[i][5]}</td>
                <td>${list.records[i][6]}</td>
            </tr>
        `);
    }

    $('tr').click(function () {
        CRUDVehicles(this, token);
        $('.t-select').removeClass('t-select');
        $(this).find('td').addClass('t-select');
    });
}

function CRUDVehicles(vehicle, token) {

    $('#print').attr('disabled', false);
    $('#read').attr('disabled', false);
    $('#update').attr('disabled', false);
    $('#delete').attr('disabled', false);
    $('#refresh').attr('disabled', false);

    // Modal target
    $('#actions button').each(function(){
        $(this).mouseenter(function () { 
            if(this.id == 'read' || this.id == 'update') {
                $(this).attr('data-target', `#${this.id}Modal`);
                $(this).attr('data-toggle', `modal`);
                $('.modal').attr('id', `${this.id}Modal`);
                $('.modal-header').html(`
                    <h5 class="modal-title">
                        ${(this.id === 'read') 
                        ? '<h5 class="modal-title">Vehículo</h5>' 
                        : '<h5 class="modal-title">Actualizar Vehículo</h5>' }</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            `);
            }
        });
        $(this).click(function (e) { 
            e.preventDefault();
            if(this.id == 'read' || this.id == 'update') {
                handleVehicle(vehicle.id, token);
            }
            console.log(this.id);
            console.log(vehicle.id);
        });
    });
}

function handleVehicle(id, token) {

    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'vehicles.report',
            token,
            id,
        },
        dataType: 'json',
        success: function (response) {
            console.log(response.records);
        },
        error: function (response) {
            console.log(response);
        }
    });
}