$(document).ready(function () {

    let token = localStorage.getItem('token');
    let user = localStorage.getItem('name');
    let id = localStorage.getItem('id');

    listaVehiculos(token);

    listaMarcas();
    
    listaColores();

    // Nombre de usuario
    $('.dropdown-toggle').html(`<i class="fa-solid fa-user"></i> ${user}`);

    // Pagina-TAB activo
    $('.main-menu a').each(function(){
        if(this.href === window.location.href) {
            $(this).addClass('active-tab');
        }
    });

    // Nuevo Registro - Modal
    $('#createvehicle').click(function (e) { 
        e.preventDefault();
        clearForm();
        nuevoVehuiculo(this);
    });

    // Change -> Modal - Button
    $('#actionsVehiculos button').each(function () {
        $(this).mouseenter(function () { 
            if(this.id == 'readvehicle' || this.id == 'updatevehicle') {
                $(this).attr('data-target', `#${this.id}Modal`);
                $(this).attr('data-toggle', `modal`);
                $('.modal').attr('id', `${this.id}Modal`);
                $('.modal-header').html(`
                    <h5 class="modal-title">
                        ${(this.id === 'readvehicle') 
                        ? '<h5 class="modal-title">Vehículo</h5>' 
                        : '<h5 class="modal-title">Actualizar Vehículo</h5>' }</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                `);
            }
        });
    });

    // Ver || Actualizar
    $('#actionsVehiculos button').each(function () {
        $(this).click(function (e) { 
            e.preventDefault();
            if(this.id == 'readvehicle' || this.id == 'updatevehicle') {
                handleVehicle(token, this.id);
            } 
        });
    });

    // Borrar
    $('#deletevehicle').click(function (e) { 
        e.preventDefault();
        const id = localStorage.getItem('vehicleId');
        deleteVehicle(token, id);
    });

    // Llamar modelo-type 
    $('#brand').change(function (e) { 
        e.preventDefault();
        callType($(this).val());
    });

    // Hidden Input
    $('.form-adquisicion input').each(function () {
        if(this.type == 'radio') {
            $(this).click(function () {
                if(this.value == '4') {
                    $('#foaother').css('display', 'block');
                    $('#foaother').val('Translado');
                }
                else {
                    $('#foaother').css('display', 'none');
                    $('#foaother').val(null);
                    $('#foaother').val('Translado');
                }
            });
        }
    });

    // Enviar formulario
    $('#formID').submit(function (e) { 
        e.preventDefault();
        $('#token').val(token);
        let formValues = new FormData(this);
        startSavingVehicle(formValues);
    });

    // Validar
    $('#submitButton').mouseenter(function () {
        validarForm();
    });

    // useudg - postvalidar(click)
    $('#useudg input').each(function() {
        $(this).click(function (e) { 
            $('#useudg').removeClass('form-uso-error');
            $('#useudg').addClass('form-uso');
        });
    });

    // Imprimir
    $('#printcartablediv').hide();
    $('#printvehicle').click(function (e) { 
        e.preventDefault();
        handleVehicle(token, this.id)
    });

    $('#refreshvehicle').click(function (e) { 
        $('#actionsVehiculos button').each(function (index, element) {
            $(this).attr('disabled', true);
        });
        listaVehiculos(token, 'refresh');

    });

    $(document).click(function (e) { 
        if(e.target.localName !== 'td' && e.target.id !== 'updatevehicle') {
            $('.t-select').removeClass('t-select');
            localStorage.removeItem('vehicleId');
            $('#printvehicle').attr('disabled', true);
            $('#readvehicle').attr('disabled', true);
            $('#updatevehicle').attr('disabled', true);
            $('#deletevehicle').attr('disabled', true);
        }
    });
});

function nuevoVehuiculo(target) {

    $(target).attr('data-target', `#${target.id}Modal`);
    $(target).attr('data-toggle', `modal`);

    $('.modal').attr('id', `${target.id}Modal`);
    $('.modal-header').html(`
        <h5 class="modal-title">Crear Vehículo</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    `);
}

function listaVehiculos(token, action) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'vehicles.select',
            token,
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response);
                return;
            }
            if(action == 'refresh') toastr.success('Página Actualizada')
            vehicleList(response);
        },
        error: function (response) {
            handleError(response);
        }
    });
}

function handleError(response) {

    $('.modal').modal('hide');
    $('#submitButton').html('<i class="fa-solid fa-car"></i> Guardar cambios')
    $('.modal-content button').each(function () {
        $(this).attr('disabled', false);
    });
    localStorage.removeItem('vehicleId');

    if(response.status == 0) {
        Swal.fire({
            icon: "error",
            title: "Ha ocurrido un error",
            text: response.message,
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Ha ocurrido un error",
        });
    }
}

function vehicleList(list) {

    $('#createvehicle').attr('disabled', false);
    $('#refreshvehicle').attr('disabled', false);

    const t_body = $('#vehiclelist');
    $(t_body).empty();
    for (let i = 0; i < list.records.length; i++) {
        $(t_body).append(`
            <tr id="${list.records[i][0]}auto">
                <td scope="row">${list.records[i][1]}</th>
                <td>${list.records[i][2] === 0 ? 'Directivo' : 'Servicio'}</td>
                <td>${list.records[i][3]}</td>
                <td>${list.records[i][4]}</td>
                <td>${list.records[i][5]}</td>
                <td>${list.records[i][6]}</td>
            </tr>
        `);
    }

    $('tr').unbind().click(function (e) {
        onSelected(this);
    });
}

function onSelected(evt) {

    let idarr = [];
    let ref = [];
    evt.id.split('').forEach((n) => {
        (!isNaN(n)) ? idarr = [...idarr, n] : ref = [...ref, n]
    });
    const item = ref.join('');
    const id = idarr.join('');

    console.log(id);
    console.log(item); //marca

    $('.t-select').removeClass('t-select');
    $(evt).find('td').addClass('t-select');

    localStorage.setItem('vehicleId', id);
    const token = localStorage.getItem('token');    
    if(token === token) {   //! PERMISOS
        $('#printvehicle').attr('disabled', false);
        $('#readvehicle').attr('disabled', false);
        $('#updatevehicle').attr('disabled', false);
        $('#deletevehicle').attr('disabled', false);
        $('#refreshvehicle').attr('disabled', false);
    } else {
        $('#readvehicle').attr('disabled', false);
        $('#printvehicle').attr('disabled', false);
    }
}

function handleVehicle(token, idAction) {

    $('#useudg').removeClass('form-uso-error');
    $('#useudg').addClass('form-uso');
    const id = localStorage.getItem('vehicleId');

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
            if(response.status == 'error') {
                handleError(response);
                return;
            }
            startAutocompleteTable(response, idAction)
        },
        error: function (response) {
            handleError(response);
        }
    });
}

function startAutocompleteTable(res, idAction) {

    if(idAction == 'printvehicle') {
        renderPrintTable(res);
        return;
    }

    // Fusionar metadata y records para autocompletar formulario
    let newObj = [...res.metadata];
    for (let i = 0; i < newObj.length; i++) {
        newObj[i]['value'] = res.records[0][i];
    }

    // Buscar modelo
    const type = newObj.find((el) => {
        return el.name === 'brand';
    });

    // Modelo - Type
    if(!!type.value) {
        $.ajax({
            type: 'POST',
            url: 'https://lionware.dev/services/sgv/webservice/index.php',
            data: {
                method: 'models.select',
                brand: type.value,
            },
            dataType: 'json',
            success: function (response) {
                if(response.status == 'error') {
                    handleError(response);
                    return;
                }
                autocompleteTable(response, newObj, idAction);
            },
            error: function (response) {
                handleError(response);
            }
        });
    }
}

function autocompleteTable(type, fields, idAction) {

    clearForm();

    // Agregar Type
    type.records.forEach((e) => {
        $('#type').append($('<option>', {
            value: e[0],
            text: e[1]
        })); 
    });

    // Autocompletar formulario
    $('#formID').each(function () {
        for (let i = 0; i < fields.length; i++) {
            const field = this.elements.namedItem(fields[i].name);
            field && (field.value = fields[i].value);
            //* 2.15 Cheked-radio
            if((field !== null) && (field.id === 'llr' || field.id === 'lll' || field.id === 'udgsr' || field.id === 'udgsl' || field.id === 'enr' || field.id === 'enl' || field.id === 'enre')) {
                if(fields[i].value == 1) {
                    $(field).prop("checked", true);
                } else {
                    $(field).prop("checked", false);
                }
            }
        }
    });

    // Comportamiento
    if(idAction === 'readvehicle') {
        onlyReadModal();
    } else {
        $('#submitButton').attr('disabled', false);
        const id = localStorage.getItem('vehicleId');
        $('#id').val(id);
        console.log(id);
    }
}

function onlyReadModal() {
    $('#formID input').each(function () {
        $(this).attr('disabled', true);
    });
    $('#formID select').each(function () {
        $(this).attr('disabled', true);
    });
    $('#submitButton').attr('disabled', true);
}

function listaMarcas() {
    
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'brands.select',
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response);
                return;
            }
            response.records.forEach(el => {
                $('#brand').append($('<option>', {
                    value: el[0],
                    text: el[1]
                }));
            });
        },
        error: function (response) {
            handleError(response);
        }
    });
}

function callType(id) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'models.select',
            brand: id,
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response);
                return;
            }
            $('#type').html('<option value="" disabled selected>--Seleccione--</option>');
            response.records.forEach((e) => {
                $('#type').append($('<option>', {
                    value: e[0],
                    text: e[1]
                })); 
            });
        },
        error: function (response) {
            handleError(response);
        }
    });
}

function listaColores() {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'colors.select',
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response);
                return;
            }
            response.records.forEach(el => {
                $('#color').append($('<option>', {
                    value: el[0],
                    text: el[1]
                }));
            });
        },
        error: function (response) {
            handleError(response);
        }
    });
}

function clearForm() {

    $('#useudg').removeClass('form-uso-error');
    $('#useudg').addClass('form-uso');

    $('#formID input').each(function(){
        if(this.type === 'radio' || this.type === 'checkbox') {
            $(this).prop("checked", false);
            $(this).attr('disabled', false);
        } else if((this.name !== 'udg') && (this.name !== 'method')) {
            $(this).val('');
            $(this).attr('disabled', false);
            $(this).removeClass('is-invalid');
        }
    });

    $('#formID select').each(function () {
        $(this).val('');
        $(this).attr('disabled', false);
        $(this).removeClass('is-invalid');
    });

    $('#foaother').css('display', 'none');
    $('#type').html('<option value="" disabled selected>--Seleccione--</option>');
    $('#formID select').each(function(){
        $(this).val('');
    });

    $('#readvehicle').attr('disabled', true);
    $('#updatevehicle').attr('disabled', true);
    $('#deletevehicle').attr('disabled', true);
}

function validarForm() {

    // Validate uso
    if($('#use').prop('checked') || $('#use1').prop('checked')) {
        $('#useudg').removeClass('form-uso-error');
        $('#useudg').addClass('form-uso');
    } else if($('#use').prop('checked') === false && $('#use1').prop('checked') === false) {
        $('#useudg').removeClass('form-uso');
        $('#useudg').addClass('form-uso-error');
        Swal.fire('<h3>Campos Obligatorios<span style="color:red">*</span></h3>');
    }

    $('#formID input').each(function(){
        if((this.value === '' && this.id !== 'foaother' && this.id !== 'token' && this.id !== 'id' && this.id !== 'method')) {
            $(this).addClass('is-invalid');
            //! $('.modal').scrollTop({ top: 0, behavior: 'smooth' });
            Swal.fire('<h3>Campos Obligatorios <span style="color:red">*</span></h3>');
        }
        $(this).change(function (e) { 
            e.preventDefault();
            $(this).removeClass('is-invalid');
        });
    });

    $('#formID select').each(function () {
        if(this.value === '') {
            $(this).addClass('is-invalid');
            Swal.fire('<h3>Campos Obligatorios<span style="color:red">*</span></h3>');
        }
        $(this).change(function (e) { 
            e.preventDefault();
            $(this).removeClass('is-invalid');
        });
    });
}

function startSavingVehicle(formValues) {

    $('#submitButton').html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Guardando...')
    $('.modal-content button').each(function () {
        $(this).attr('disabled', true);
    });
    onlyReadModal();

    $('#formID input').each(function () {
        if(this.id === 'llr' || this.id === 'lll' || this.id === 'udgsr'|| this.id === 'udgsl' || this.id === 'enr' || this.id === 'enl' || this.id === 'enre') {
            if($(this).prop('checked') === false) {
                formValues.set(this.id, '0');
            } else {
                formValues.set(this.id, '1');
            }
        }
    });

    if($('#id').val() === '') {
        formValues.set('method', 'vehicles.create');
        formValues.delete('id');
        createUpdateVehicle(formValues);
    } else {
        formValues.set('method', 'vehicles.update');
        createUpdateVehicle(formValues);
    }
}

function createUpdateVehicle(formValues) {

    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: formValues,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response);
                return;
            }
            afterCRUD(response, formValues.get('token'));
        },
        error: function (response) {
            handleError(response);
        }
    });
}

function deleteVehicle(token, id) {
    console.log(token, id);
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'vehicles.delete',
            token ,
            id,
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response);
                return;
            }
            afterCRUD(response, token)
        },
        error: function (response) {
            handleError(response);
        }
    });
}

function afterCRUD(response, token) {

    console.log(id);

    $('.modal').modal('hide');
    $('#submitButton').html('<i class="fa-solid fa-car"></i> Guardar cambios')
    $('.modal-content button').each(function () {
        $(this).attr('disabled', false);
    });

    localStorage.removeItem('vehicleId');
    listaVehiculos(token);
    clearForm();
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: response.message,
        showConfirmButton: false,
        timer: 2500
    });
}

function renderPrintTable(res) {

    $('#printcartablediv').html(`
        <table class="table text-center" id="printcartable">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Uso</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Año</th>
                    <th scope="col">Color</th>
                    <th scope="col">Motor</th>
                    <th scope="col">No. Serie</th>
                    <th scope="col">Cilindros</th>
                    <th scope="col">Factura</th>
                    <th scope="col">No. Factura</th>
                    <th scope="col">Fecha de alta</th>
                    <th scope="col">Forma de aquicición</th>
                    <th scope="col">Forma de aquicición (Nota)</th>
                    <th scope="col">Placas</th>
                    <th scope="col">No. Economico</th>
                    <th scope="col">Capacidad de pasajeros</th>
                    <th scope="col">Capacidad de carga</th>
                    <th scope="col">llr</th>
                    <th scope="col">lll</th>
                    <th scope="col">udgsr</th>
                    <th scope="col">udgsl</th>
                    <th scope="col">enr</th>
                    <th scope="col">enl</th>
                    <th scope="col">enre</th>
                    <th scope="col" id="">deleted</th>
                </tr>
            </thead>
            <tbody id="vehicleprint">
            </tbody>
        </table>
    `);

    res.records.forEach((el) => {
        $('#vehicleprint').append(`
            <tr>
                <td>${el[0]}</td>
                <td>${(el[1] == 0) ? 'Directivo' : 'Servicio' }</td>
                <td>${el[27]}</td>
                <td>${el[28]}</td>
                <td>${el[4]}</td>
                <td>${el[26]}</td>
                <td>${el[6]}</td>
                <td>${el[7]}</td>
                <td>${el[8]}</td>
                <td>${el[9]}</td>
                <td>${el[10]}</td>
                <td>${el[11]}</td>
                <td>${setAdquicicion(el[12])}</td>
                <td>${el[13]}</td>
                <td>${el[14]}</td>
                <td>${el[15]}</td>
                <td>${el[16]}</td>
                <td>${el[17]}</td>
                <td>${(el[18] == 0) ? 'No' : 'Si'}</td>
                <td>${(el[19] == 0) ? 'No' : 'Si'}</td>
                <td>${(el[20] == 0) ? 'No' : 'Si'}</td>
                <td>${(el[21] == 0) ? 'No' : 'Si'}</td>
                <td>${(el[22] == 0) ? 'No' : 'Si'}</td>
                <td>${(el[23] == 0) ? 'No' : 'Si'}</td>
                <td>${(el[24] == 0) ? 'No' : 'Si'}</td>
                <td>${(el[25] == 0) ? 'No' : 'Si'}</td>
            </tr>
        `);
    });

    function setAdquicicion(param) {
        console.log(param);
        if(param == 0) return 'Compra';
        if(param == 1) return 'Remisión';
        if(param == 2) return 'Donación';
        if(param == 3) return 'Otro';
    }
    setTablecarOptions();
}

function setTablecarOptions() {

    $('#printcartable').DataTable({
        layout: {
            topStart: {
                buttons: ['print']
            }
        },
        paging: false,
        scrollY: 450,
        scrollX: true,
        searching: false,
        "info": false,
    });

    $('.buttons-print').click();
    setTimeout(() => {
    }, 500);
}