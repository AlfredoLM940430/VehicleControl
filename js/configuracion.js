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

    // Configuracion-TAB Main-Menu
    $('.config-menu button').each(function () {
        $(this).click(function (e) { 
            e.preventDefault();
            localStorage.removeItem('itemUp');
            $('.config-menu button').each(function () {
                $(this).removeClass('active-tab');
            });

            $('#menu-config section').each(function () {
                $(this).css('display', 'none');
            });

            $(`#menu-${this.id.split('').slice(7).join('')}`).css('display', 'block');
            $(this).addClass('active-tab');
            handleMenu(`${this.id.split('').slice(7).join('')}`);
        });
    });

    // Vistas render
    viewsGeneral();
    viewsGrupos();

    // Control de inputs-buttons
    $('input').change(function (e) { 
        e.preventDefault();
        handleInputs(this);
    });

    // Nuevo color
    $('#addcolorbutton').click(function (e) { 
        e.preventDefault();
       addItems(token, this.id)
    });

    // Nueva marca
    $('#addmarcabutton').click(function (e) { 
        e.preventDefault();
       addItems(token, this.id)
    });

    //Nuevo modelo
    $('#addmodelobutton').click(function (e) { 
        e.preventDefault();
        addItems(token, this.id)
    });

    //Nuevo eje
    $('#addejebutton').click(function (e) { 
        e.preventDefault();
        addItems(token, this.id)
    });

    //Nuevo programa
    $('#addprogramabutton').click(function (e) { 
        e.preventDefault();
        addItems(token, this.id)
    });

    //Nuevo docuento
    $('#addhubdocbutton').click(function (e) { 
        e.preventDefault();
        addItems(token, this.id)
    });

    //Nuevo rubro
    $('#addrubrosbutton').click(function (e) { 
        e.preventDefault();
        addItems(token, this.id)
    });
    
    $('#createdocumentbutton').click(function (e) { 
        e.preventDefault();
        clearModal();
        localStorage.removeItem('itemUp');
    });

    $('#createTiposButton').click(function (e) { 
        e.preventDefault();
        clearModal();
        localStorage.removeItem('itemUp');
    });

    $('#createConductorButton').click(function (e) { 
        e.preventDefault();
        clearModal();
        localStorage.removeItem('itemUp');
    });

    $('#createUserButton').click(function (e) { 
        e.preventDefault();
        clearModal();
        localStorage.removeItem('itemUp');
    });

    $('#deleteUserButton').click(function (e) { 
        e.preventDefault();
        $('#usuariosActions button').each(function () {
            $(this).attr('disabled', true);
            if(this.id == 'deleteUserButton') {
                $(this).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Eliminando...');
            }
        });
        $('.dt-search input').attr('disabled', true);
        const usersbuttons = this.parentElement;
        eliminarUsuario(localStorage.getItem('itemUp'), token, usersbuttons);
        localStorage.removeItem('itemUp');
    });
    
    $('#setPermisos').click(function (e) { 
        e.preventDefault();
        setPermisos(localStorage.getItem('marca'), token);
    });

    // Mantener primer modal abierto
    $('#second-modal-archivos button').each(function () {
        $(this).click(function (e) { 
            e.preventDefault();
            if(this.id === 'ok-archivos') {
                $('#tipoArchivoModal').modal('hide');
                setTimeout(() => {
                    $('body').addClass('modal-open');
                }, 500);
            } else {
                $('#tipoArchivoModal').modal('hide');
                $('#cerrar-archivos').text('Cerrar');
                setTimeout(() => {
                    $('body').addClass('modal-open');
                }, 500);
            }
        });   
    });

    $('#ok-archivos').click(function (e) { 
        e.preventDefault();
        let filter = [];
        let name = [];
        $('#filefilter input').each(function () {
            if(this.checked === true) {
                filter = [...filter, $(this).val()];
                name = [...name, this.name];
            }
        });
        $('#filtername').val(name.toString());
        $('#filtername').removeClass('is-invalid');
        for (let i = 0; i < filter.length; i++) {
            console.log(filter[i]);
            $('#filters').append(`
                <input type="hidden" name="filters[${i}]" value="${filter[i]}">
            `);
        }
    });

    $('#filefilter input').each(function () {
        let okControl = 0;
        $(this).change(function (e) {
            if(this.checked) okControl++;
        });
    });

    $('#updatedocumentbutton').click(function (e) { 
        e.preventDefault();
        //clearModal();
    });

    $('#authhub').change(function (e) { 
        e.preventDefault();
        $('#authGroupOption').css('display', 'block');
        $('#addAuth').attr('disabled', false);
        $('#isAuthGroup').html('');
        $('#createcommon').attr('disabled', false);
        loadSetAuth();
    });

    $('#addAuth').click(function (e) { 
        e.preventDefault();
        createAuth();
    });

    $('#removeAuth').click(function (e) { 
        e.preventDefault();
        starDeleteAuth();
    });

    $('#createcommon').click(function (e) { 
        e.preventDefault();
        $(this).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Guardando...');
        $(this).attr('disabled', true);
        newAutorizaciones(token);
    });

    $('#refreshLogs').click(function (e) { 
        e.preventDefault();
        toastr.warning('Actualizando');
        getRegistros(token, 'update');
    });

    $('#createdata_reportsbutton').click(function (e) { 
        e.preventDefault();
        clearModal();
        localStorage.removeItem('itemUp');
    });

    $('#deletedata_reportsbutton').click(function (e) { 
        e.preventDefault();
        $('#data_reportsActions button').each(function () {
            $(this).attr('disabled', true);
            if(this.id == 'deletedata_reportsbutton') {
                $(this).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Eliminando...');
            }
        });
        const usersbuttons = this.parentElement;
        eliminardata_reports(localStorage.getItem('itemUp'), token, usersbuttons);
        localStorage.removeItem('itemUp');
    });

    $('#createreportbutton').click(function (e) { 
        e.preventDefault();
        clearModal();
        localStorage.removeItem('itemUp');
    });

    $('#deletereportbutton').click(function (e) { 
        e.preventDefault();
        $('#data_reportsActions button').each(function () {
            $(this).attr('disabled', true);
            if(this.id == 'deletedata_reportsbutton') {
                $(this).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Eliminando...');
            }
        });
        const usersbuttons = this.parentElement;
        eliminarReporte(localStorage.getItem('itemUp'), token, usersbuttons);
        localStorage.removeItem('itemUp');
    });

    $('#updateloginbutton').mouseenter(function () { 
        validarFormDoc('loginupdateform');
    });

    $('#loginupdateform').submit(function (e) { 
        e.preventDefault();
        validarLoginUpdate(token);
    });

    $('#orderActions button').each(function () {
        $(this).click(function (e) { 
            e.preventDefault();
            orderAuth(this);
        });
    });

    $('#refreshUserButton').click(function (e) { 
        e.preventDefault();
        getUsuarios(token, 'refresh');
    });

    $(document).click(function (e) {
        const parent = localStorage.getItem('parent');
        $('.td-up-selected').find('input').prop('readonly', true);
        $('.td-up-selected').removeClass('td-up-selected');
        $(`${parent} td`).each(function () {
            if(this.id !== '') {
                $(this).css('display', 'none');
            }
        });
        //console.log(e.target.parentElement.id);
        if(
            e.target.localName !== 'td' && 
            e.target.localName !== 'input' && 
            e.target.id !== 'authhub'  && 
            e.target.localName !== 'option' &&
            e.target.id !== 'addAuth'  &&
            e.target.id !== 'removeAuth' &&
            e.target.parentElement.id !== 'addAuth'  &&
            e.target.parentElement.id !== 'removeAuth'
        ) {
            localStorage.removeItem('marca');
            localStorage.removeItem('deleteAuth');
            localStorage.removeItem('deleteTR');
            localStorage.removeItem('createAuthText');
            localStorage.removeItem('createAuth');
            $('#addmodelo').attr('disabled', true);
            $('#addprograma').attr('disabled', true);
            $('#addhubdocbutton').prop('disabled', true);
            $('#documentosejes input').each(function () {
                $(this).attr('disabled', true);
            });
            $('#modelo').empty();
            $('#programa').empty();
            $('.t-select').removeClass('t-select');
            $('.t-selected').removeClass('t-selected');
            $('#updatedocumentbutton').attr('disabled', true);
            $('#updateTiposButton').attr('disabled', true);
            $('#updateUserButton').attr('disabled', true);
            $('#updatedata_reportsbutton').attr('disabled', true);
            $('#deletedata_reportsbutton').attr('disabled', true);
            $('#deleteUserButton').attr('disabled', true);
            $('#updatereportbutton').attr('disabled', true);
            $('#deletereportbutton').attr('disabled', true);
            $('#onPermisos input').each(function () {
                $(this).attr('disabled', true);
                $(this).prop('checked', false);
            });
            $('#setPermisos').attr('disabled', true);
            $('#createcommon').attr('disabled', true);
            $('#documentosejes input').each(function () {
                $(this).prop('checked', false);
            });
            if(!(localStorage.getItem('marca'))) {
                $('#authhub').prop('disabled', true);
                $('#authhub').val('');
                $('#authGroupOption').empty();
                $('#isAuthGroup').empty();
            }
        }
        localStorage.removeItem('parent');
    });
});

function viewsGeneral() {

    $('#general-menu-buttons button').each(function () {
        $(this).click(function (e) { 
            e.preventDefault();

            localStorage.removeItem('itemUp');

            $('#menu-config input').each(function () {
                if(this.id.split('').slice(0, 3).join('') === 'add') {
                    $(this).val('');
                }
            });

            $('#general-display-colores button').each(function () {
                if(this.id.split('').slice(0, 3).join('') === 'add') {
                    $(this).attr('disabled', true);
                }  
            });

            $('#general-display-colores div').each(function () {
                if(this.id !== '') {
                    $(this).css('display', 'none');
                }
            });

            $('#general-menu-buttons button').each(function () {
                $(this).removeClass('active-tab');
            });

            $(`#${this.id.split('').slice(7).join('')}`).css('display', 'block');
            $(this).addClass('active-tab');
            generalSubMenu(`${this.id.split('').slice(7).join('')}`);
        });
    });
}

function viewsGrupos() {

    $('#grupos-menu-buttons button').each(function () {
        $(this).click(function (e) { 
            e.preventDefault();

            localStorage.removeItem('itemUp');

            $('#general-display-grupos div').each(function () {
                if(this.id !== '') {
                    $(this).css('display', 'none');
                } 
            });

            $('#grupos-menu-buttons button').each(function () {
                $(this).removeClass('active-tab');
            });

            console.log(`#${this.id.split('').slice(7).join('')}`);
            $(`#${this.id.split('').slice(7).join('')}`).css('display', 'block');
            $(this).addClass('active-tab');
            gruposSubMenu(`${this.id.split('').slice(7).join('')}`);
        });
    });
}

function handleMenu(props) {

    $('.modal-dialog').removeClass('modal-xl');
    console.log(props);
    
    switch (props) {
        case 'general':
            getColors();
            break;
        case 'grupos':
            getTipos();
            break;
        case 'usuarios':
            getUsuarios(localStorage.getItem('token'));
            break;
        case 'permisos':
            getPermisos(localStorage.getItem('token'));
            break;
        case 'autorizaciones':
            getAuth(localStorage.getItem('token'));
            getEje();
            break;
        case 'registros':
            getRegistros(localStorage.getItem('token'));
            break;
        case 'reportes-datos':
            $('.modal-dialog').addClass('modal-xl');
            getReportesDatos(localStorage.getItem('token'));
            break;
        case 'reportes':
            getReportes(localStorage.getItem('token'));
            break;
        default:
            break;
    }
}

function generalSubMenu(props) {
    switch (props) {
        case 'colores':
            getColors();
            break;
        case 'vehiculos':
            getVehicles();
            break;
        case 'ejes':
            getEjes();
            getDocumentacion(props);
            break;
        case 'rubros':
            getRubros();
            break;
        case 'documentacion':
            getDocumentacion();
            break
        default:
            break;
    }
}

function gruposSubMenu(props) {
    console.log(props);
    switch (props) {
        case 'tipos':
            getTipos();
            break;
        case 'conductores':
            getConductores();
            break;
        default:
            break;
    }
}

function handleInputs(inputs) {

    if(inputs.id.split('').slice(0,3).join('') === 'add') {
        console.log(inputs.id + ' ' + 'handle input');
        if(inputs.value.length > 2) {
            $(`#${inputs.id}button`).attr('disabled', false);
        } else {
            $(`#${inputs.id}button`).attr('disabled', true);
        }
    }
}

function getColors(action) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'colors.select',
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            renderColores(response, action);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function handleError(response, action) {

    $('.modal').modal('hide');
    $(`#create${action}`).html('<i class="fa-solid fa-file"></i> Guardar');
    $('.modal-content button').each(function () {
        $(this).attr('disabled', false);
    });
    $('#removeAuth').attr('disabled', true);
    $('#addAuth').attr('disabled', true);
    $('#createcommon').attr('disabled', true);
    $('#isAuthGroup').html('');
    localStorage.removeItem('createAuthText');
    localStorage.removeItem('createAuth');
    localStorage.removeItem('deleteAuth');
    localStorage.removeItem('deleteTR');
    $('#authhub').prop('disabled', true);
    $('#authhub').val('');
    $('#authGroupOption').css('display', 'none');

    if(response.status == 0 || response.status == 'error') {
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

function renderColores(response, action) {

    const t_body = $('#color');
    if(action === 'update') $(t_body).html('');
    if($(t_body).children().length > 0) return;
  
    response.records.forEach((el) => {
        const target = el[1].split(' ').join('');
        $(t_body).append(`
            <tr id="${el[0]}color" ondblclick="idItem('${el[0]}color', '${target}')">
                <td>
                    <input 
                        type="text" 
                        id="input${target}" 
                        class="w-100 table-input"
                        readonly="true"
                        value="${el[1]}" 
                    >
                </td>
                <td id="button${target}" class="p-1" style="display: none;">
                    <button class="btn btn-dark" onclick="updateItem('colors.update', '${el[0]}', '${target}')"><i class="fa-solid fa-check"></i></button>
                </td>
            </tr>
        `);
    });

    $('tr').unbind().click(function (e) {
        onSelected(this, e);
    })
}

function onSelected(selected, evt) {

    if(evt.target.localName !== 'input' && evt.target.localName !== 'td') return;

    let idarr = [];
    let ref = [];
    selected.id.split('').forEach((n) => {
        (!isNaN(n)) ? idarr = [...idarr, n] : ref = [...ref, n];
    });

    const item = ref.join('');
    const id = idarr.join('');

    console.log(id);
    console.log(item); //marca

    if(item === 'marca' || item === 'eje') {
        $('.t-selected').removeClass('t-selected');
        $(`#${selected.id}`).find('td').addClass('t-selected');
        $('#addmodelo').attr('disabled', false);
        $('#addprograma').attr('disabled', false);
        $('#documentosejes input').each(function () {
            $(this).attr('disabled', false);
        });
        localStorage.setItem('marca', id);
        if(item === 'marca') {
            getModelo(id);
        } else {
            getPrograma(id);
            startSetDocs(id);
        }
    } else if(item == 'gruposP') {
        $('.t-selected').removeClass('t-selected');
        $(`#${selected.id}`).find('td').addClass('t-selected');
        localStorage.setItem('marca', id);
        selectPermisos(selected, id);
    } else if(item == 'authP') {
        $('.t-selected').removeClass('t-selected');
        $(`#${selected.id}`).find('td').addClass('t-selected');
        $('#removeAuth').attr('disabled', true);
        $('#addAuth').attr('disabled', true);
        $('#createcommon').attr('disabled', true);
        $('#isAuthGroup').html('');
        localStorage.setItem('marca', id);
        localStorage.removeItem('createAuthText');
        localStorage.removeItem('createAuth');
        localStorage.removeItem('deleteAuth');
        localStorage.removeItem('deleteTR');
        $('#authhub').prop('disabled', false);
        $('#authhub').val('');
        $('#authGroupOption').css('display', 'none');
    } else {   
        $('.t-select').removeClass('t-select');
        $(selected).find('td').addClass('t-select');
        switch (item) {
            case 'documentacion':
                getDocs(selected, id);
                break;
            case 'tipos':
                getTipo(selected, id);
                break;
            case 'conductor':
                getConductor(selected, id);
                break;
            case 'usuario':
                getUser(selected, id);
                break;            
            case 'gruposP':
                getPermissions(selected, id);
                break;            
            case 'authPP':
                $('#removeAuth').attr('disabled', true);    
                localStorage.setItem('createAuth', id);
                localStorage.setItem('createAuthText', selected.innerText);
                break;            
            case 'isauthPP':
                $('#removeAuth').attr('disabled', false);
                localStorage.setItem('deleteTR', selected.id);
                localStorage.setItem('deleteAuth', $(selected).find('input').val());
                orderControl(selected);
                break;
            case 'data_reports':
                getdata_reports(selected, id);
                break;         
            case 'report':
                getReporte(selected, id);
                break;         
            default:
                break;
        }
    }
}

function addItems(token, id) {

    let caption = $(`#${id.split('').reverse().slice(6).reverse().join('')}`).val();
    $(`#${id.split('').reverse().slice(6).reverse().join('')}`).val('');
    $(`#${id.split('').reverse().slice(6).reverse().join('')}button`).attr('disabled', true);
    
    const idAdd = id.split('').slice(3).join('');
    const marca = localStorage.getItem('marca');

    switch (idAdd) {
        case 'colorbutton':
            data = {method: 'colors.create', token: token, caption: caption}
            createItem(data, 'colors', token);
            break;
        case 'marcabutton':
            data = {method: 'brands.create', token: token, caption: caption}
            createItem(data, 'brands', token);
            break;
        case 'modelobutton':
            data = {method: 'models.create', token: token, caption: caption, brand: marca}
            createItem(data, 'models', token);
            break;
        case 'ejebutton':
            data = {method: 'hubs.create', token: token, caption: caption}
            createItem(data, 'hubs', token);
            break;
        case 'programabutton':
            data = {method: 'programs.create', token: token, caption: caption, hub: marca}
            createItem(data, 'programs', token);
            break;
        case 'rubrosbutton':
            data = {method: 'items.create', token: token, caption: caption}
            createItem(data, 'items', token);
            break;
        case 'hubdocbutton':
            updateDocuments('hubs.updatedocuments', token, marca)
            break;
    
        default:
            break;
    }
}

function createItem(data, action, token) {

    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: data,
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                console.log(response);
                return;
            }
            afterCRUD(response, action, token);
        },
        error: function (response) {
            handleError(response, action);
            console.log(response);
        }
    });
}

function afterCRUD(response, action, token) {

    console.log(response);
    console.log(action);

    if(action.tagName == 'DIV') {
        const id = action.id.split('').reverse().slice(7).reverse().join('');
        if(id == 'usuarios') {
            $('#createUserButton').attr('disabled', false);
            $('#refreshUserButton').attr('disabled', false);
            $('#deleteUserButton').html('<i class="fa-solid fa-trash"></i> Eliminar');
            $('.dt-search input').attr('disabled', false);
            getUsuarios(localStorage.getItem('token'), 'update');
        } else if(id == 'data_reports') {
            $('#createdata_reportsbutton').attr('disabled', false);
            $('#deletedata_reportsbutton').html('<i class="fa-solid fa-trash"></i> Eliminar');
            getReportesDatos(localStorage.getItem('token'), 'update');
        } else if(id == 'reportes') {
            $('#createreportbutton').attr('disabled', false);
            $('#deletereportbutton').html('<i class="fa-solid fa-trash"></i> Eliminar');
            getReportes(localStorage.getItem('token'), 'update');
        }
    } else {
        $('.modal').modal('hide');
        $('.modal-content button').each(function () {
            $(this).attr('disabled', false);
        });

        localStorage.removeItem('marca');
        localStorage.removeItem('solicitudId');

        clearModal();
        switch (action) {
            case 'colors':
                getColors('update');
                break;
            case 'brands':
                getVehicles('update');
                break;
            case 'models':
                getVehicles('update');
                break;
            case 'hubs':
                getEjes('update');
                break;
            case 'items':
                getRubros('update');
                break;
            case 'documents':
                getDocumentacion('update');
                $(`#create${action}`).html('<i class="fa-solid fa-file"></i> Guardar');
                break;
            case 'groups':
                getTipos('update');
                $(`#create${action}`).html('<i class="fa-solid fa-file"></i> Guardar');
                break;
            case 'groupsofdrivers':
                getConductores('update');
                $(`#create${action}`).html('<i class="fa-solid fa-file"></i> Guardar');
                break;
            case 'users':
                getUsuarios(localStorage.getItem('token'), 'update');
                $(`#create${action}`).html('<i class="fa-solid fa-file"></i> Guardar');
                break;
            case 'common':
                getAuth(localStorage.getItem('token'), 'update');
                $(`#create${action}`).html('<i class="fa-solid fa-file"></i> Guardar');
                $('#removeAuth').attr('disabled', true);
                $('#addAuth').attr('disabled', true);
                $('#createcommon').attr('disabled', true);
                $('#isAuthGroup').html('');
                localStorage.removeItem('createAuthText');
                localStorage.removeItem('createAuth');
                localStorage.removeItem('deleteAuth');
                localStorage.removeItem('deleteTR');
                $('#authhub').prop('disabled', true);
                $('#authhub').val('');
                $('#authGroupOption').css('display', 'none');
                break;
            case 'data_reports':
                getReportesDatos(localStorage.getItem('token'), 'update');
                $(`#create${action}`).html('<i class="fa-solid fa-file"></i> Guardar');
                break;
            case 'reports':
                getReportes(localStorage.getItem('token'), 'update');
                $(`#create${action}`).html('<i class="fa-solid fa-file"></i> Guardar');
                break;
        
            default:
                break;
        }
    }

    if(response.status == 'exception') {
        Swal.fire({
            icon: "warning",
            title: response.message,
        });
    } else {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: response.message,
            showConfirmButton: false,
            timer: 2500
        });
    }

}

function updateDocuments(method, token, hub) {
    
    let formData = new FormData();
    formData.append('method', method);
    formData.append('token', token);
    formData.append('hub', hub);
    $('#documentosejes input').each(function (i) {
        if($(this).prop('checked')) {
            formData.append(`documents[${i}]`, this.id.split('').reverse().slice(6).reverse().join())
        }
    });

    console.log(formData);
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            afterCRUD(response);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function getVehicles(action) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'brands.select',
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            renderMarcas(response, action);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function renderMarcas(response, action) {

    const t_body = $('#marca');
    if(action === 'update') $(t_body).html('');
    if($(t_body).children().length > 0) return;

    if($(t_body).children().length === 0) {
        response.records.forEach((el) => {
            $('#marca').append(`
                <tr id="${el[0]}marca" ondblclick="idItem('${el[0]}marca', '${el[1].split(' ').join('')}')">
                    <td>
                        <input 
                            type="text" 
                            id="input${el[1].split(' ').join('')}" 
                            class="w-100 table-input"
                            readonly="true"
                            value="${el[1]}" 
                        >
                    </td>
                    <td id="button${el[1].split(' ').join('')}" class="p-1" style="display: none;">
                        <button class="btn btn-dark" onclick="updateItem('brands.update', '${el[0]}', '${el[1].split(' ').join('')}')"><i class="fa-solid fa-check"></i></button>
                    </td>
                </tr>
            `);
        });
        $('tr').unbind().click(function (e) {
            onSelected(this, e);
        })
    }

}

function idItem(id, item) {

    const parent = $(`#${id}`).parent().attr('id');

    console.log(parent);

    localStorage.setItem('parent', `#${parent}`);

    $(`#${parent} tr`).each(function () {
        //console.log(this.id === id);
        if(this.id === id) {
            $(this).find('td').addClass('td-up-selected');
            $(this).find(`#button${item}`).css('display', 'block');
        }
    });

    console.log((`#input${item}`));

    $(`#input${item}`).prop('readonly', false)
    
    const val = $(`#input${item}`).val();
    $(`#input${item}`).val('');
    $(`#input${item}`).val(val);
    $(`#input${item}`).focus();
}

function updateItem(method, id, item) {

    const action = method.split('.')[0];

    const token = localStorage.getItem('token');
    const caption = $(`#input${item}`).val();
    let data = {
        method,
        token,
        id,
        caption,
    }

    if(method == 'programs.update') {
        data = {...data, hub: localStorage.getItem('marca')}
    }

    // console.log(data);
    // return;

    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: data,
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                console.log(response);
                return;
            }
            afterCRUD(response, action, token);
        },
        error: function (response) {
            handleError(response, action);
            console.log(response);
        }
    });
}

function getModelo(brand) {
    console.log(brand);
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'models.select',
            brand,
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            renderModelos(response);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function renderModelos(response) {

    $('#modelo').empty();
    response.records.forEach((el) => {
        $('#modelo').append(`
            <tr id="${el[0]}modelo" ondblclick="idItem('${el[0]}modelo', '${el[1].split(' ').join('')}')">
                <td>
                    <input 
                        type="text" 
                        id="input${el[1].split(' ').join('')}" 
                        class="w-100 table-input"
                        readonly="true"
                        value="${el[1]}" 
                    >
                </td>
                <td id="button${el[1].split(' ').join('')}" class="p-1" style="display: none;">
                    <button class="btn btn-dark" onclick="updateItem('models.update', '${el[0]}', '${el[1].split(' ').join('')}')"><i class="fa-solid fa-check"></i></button>
                </td>
            </tr>
        `);
    });
    $('tr').unbind().click(function (e) {
        onSelected(this, e);
    })
}

function getEjes(action) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'hubs.select',
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            renderEjes(response, action);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function renderEjes(response, action) {

    const t_body = $('#eje');
    if(action === 'update') $(t_body).html('');
    if($(t_body).children().length > 0) return;
   
    if($(t_body).children().length === 0) {
        response.records.forEach((el) => {
            $('#eje').append(`
                <tr id="${el[0]}eje" ondblclick="idItem('${el[0]}eje', '${el[1].split(' ').join('')}')">
                    <td>
                        <input 
                            type="text" 
                            id="input${el[1].split(' ').join('')}" 
                            class="w-100 table-input"
                            readonly="true"
                            value="${el[1]}" 
                        >
                    </td>
                    <td id="button${el[1].split(' ').join('')}" class="p-1" style="display: none;">
                        <button class="btn btn-dark" onclick="updateItem('hubs.update', '${el[0]}', '${el[1].split(' ').join('')}')"><i class="fa-solid fa-check"></i></button>
                    </td>
                </tr>
            `);
        });
        $('tr').unbind().click(function (e) {
            onSelected(this, e);
        })
    }
}

function getPrograma(hub) {

    let token = localStorage.getItem('token');

    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'programs.select',
            token,
            hub
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            renderPrograma(response);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function renderPrograma(response) {
    
    if(response.records.length > 0) {
        response.records.forEach((el) => {
            $('#programa').append(`
                <tr id="${el[0]}programa" ondblclick="idItem('${el[0]}programa', '${el[1].split(' ').join('').replace(/\./g, "")}')">
                    <td>
                        <input 
                            type="text" 
                            id="input${el[1].split(' ').join('').replace(/\./g, "")}" 
                            class="w-100 table-input"
                            readonly="true"
                            value="${el[1]}" 
                        >
                    </td>
                    <td id="button${el[1].split(' ').join('').replace(/\./g, "")}" class="p-1" style="display: none;">
                        <button class="btn btn-dark" onclick="updateItem('programs.update', '${el[0]}', '${el[1].split(' ').join('').replace(/\./g, "")}')"><i class="fa-solid fa-check"></i></button>
                    </td>
                </tr>
            `);
        });
        $('tr').unbind().click(function (e) {
            onSelected(this, e);
        })
    } else {
        $('#programa').empty();
    }
}

function startSetDocs(hub) {
    const token = localStorage.getItem('token');
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'hubs.documents',
            token,
            hub,
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            setDocs(response);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function setDocs(response) {
    
    $('#documentosejes input').each(function () {
        $(this).prop('checked', false);
    });

    response.records.forEach((el) => {
        el.forEach((id) => {
            $('#documentosejes input').each(function () {
                if(this.id == `${id}dochub`) {
                    $(this).prop('checked', true);
                }
            });
        })
    })
}

function getRubros(action) {

    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'items.select',
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            renderRubros(response, action);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function renderRubros(response, action) {

    const t_body = $('#rubro');
    if(action === 'update') $(t_body).html('');
    if($(t_body).children().length > 0) return;
    
    if($(t_body).children().length === 0) {
        response.records.forEach((el) => {
            $('#rubro').append(`
                <tr id="${el[0]}rubro" ondblclick="idItem('${el[0]}rubro', '${el[1].split(' ').join('')}')">
                    <td>
                        <input 
                            type="text" 
                            id="input${el[1].split(' ').join('')}" 
                            class="w-100 table-input"
                            readonly="true"
                            value="${el[1]}" 
                        >
                    </td>
                    <td id="button${el[1].split(' ').join('')}" class="p-1" style="display: none;">
                        <button class="btn btn-dark" onclick="updateItem('items.update', '${el[0]}', '${el[1].split(' ').join('')}')"><i class="fa-solid fa-check"></i></button>
                    </td>
                </tr>
            `);
        });
        $('tr').unbind().click(function (e) {
            onSelected(this, e);
        });
    }
}

function getDocumentacion(id) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'documents.select',
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            if(id == 'ejes') {
                renderDocsEjes(response);
            } else if(id == 'update') {
                renderDocs(response, id);
            } else {
                renderDocs(response);
            }
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function renderDocsEjes(response) {

    const t_body = $('#documentosejes');
    if($(t_body).children().length === 0) {
        response.records.forEach((el) => {
            $(t_body).append(`
                <tr id="${el[0]}documenthub">
                    <td class=""><input class="w-100" type="checkbox" disabled id="${el[0]}dochub"></td>
                    <td>${el[1]}</td>
                </tr>
            `);
        });
    }

    $('#documentosejes input').each(function () {
        $(this).change(function (e) { 
            //e.preventDefault();
            $('#addhubdocbutton').prop('disabled', false);
        });
    });
}

function renderDocs(response, action) {

    $('#itemModal').html(`
        <form id="configModal">
            <div class="form-group">
                <label for="document">Documento</label>
                <input type="text" class="form-control" id="document" name="document">
            </div>
            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea class="form-control" id="description" name="description" rows="3"></textarea>
            </div>

            <div class="d-flex justify-content-center">
                <div class="m-1">
                    <button class="btn btn-dark" data-toggle="modal" id="tipoArchivoButton" data-target="#tipoArchivoModal">
                        Tipos de archivos
                    </button>
                </div>
                <div class="form-group m-1"><input type="text" class="form-control" id="filtername" disabled></div>
            </div>

            <div class="form-group">
                <label for="maxfilesize">Tamaño máximo</label>
                <div class="d-flex">
                    <input type="number" class="form-control text-right" id="maxfilesize" name="maxfilesize">
                    <p class="mt-2">Mb</p>
                </div>
            </div>

            <div id="filters"></div>
            
            <div class="modal-footer">
                <button type="button" class="btn btn-warning" data-dismiss="modal">Cerrar</button>
                <button type="submit" class="btn btn-dark" id="createdocuments"><i class="fa-solid fa-file"></i> Guardar</button>
            </div>
        </form>
    `);

    const t_body = $('#bdydocumentacion');
    if(action === 'update') $(t_body).html('');
    if($(t_body).children().length > 0) return;
    
    if($(t_body).children().length === 0) {
        response.records.forEach((el) => {
            $(t_body).append(`
                <tr id="${el[0]}documentacion">
                    <td>${el[1]}</td>
                    <td>${el[2]}</td>
                    <td>${el[4]}</td>
                    <td>${el[3]}Mb</td>
                </tr>
            `);
        });
        $('tr').unbind().click(function (e) {
            onSelected(this, e);
        });
    }

    // Change -> Modal - Button
    $('#docactions button').each(function () {
        $(this).mouseenter(function () { 
            if(this.id == 'createdocumentbutton' || this.id == 'updatedocumentbutton') {
                setModal(this);
                $('.modal-header').html(`
                    <h5 class="modal-title">
                        ${(this.id === 'createdocumentbutton') 
                        ? '<h5 class="modal-title">Nuevo Documento</h5>' 
                        : '<h5 class="modal-title">Actualizar Documento</h5>' }</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                `);
            }
        });
    });

    $('#tipoArchivoButton').mouseenter(function () { 
        const modalCar = $('#tipoArchivo div:first-child');
        $(modalCar).attr('id', this.dataset.target.split('').slice(1).join(""));
    });

    $('#tipoArchivoButton').click(function (e) { 
        e.preventDefault(); // Evita submit
    });

    const createupdate = $('#createdocuments');
    createupdate.mouseenter(function () { 
        validarFormDoc();
    });

    //! Submit
    $('#configModal').submit(function (e) { 
        e.preventDefault();
        let formValues = new FormData(this);
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('itemUp');
        setupModal(createupdate);
        if(id !== null) {
            createUpdateItem('documents.update', token, formValues, id);
        } else {
            createUpdateItem('documents.create', token, formValues);
        }
    });
}

function setupModal(button) {
    button.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Guardando...')
    $('.modal-content button').each(function () {
        $(this).attr('disabled', true);
    });
}

function setModal(target) {
    $(target).attr('data-target', `#${target.id}Modal`);
    $(target).attr('data-toggle', `modal`);
    $('.modal').attr('id', `${target.id}Modal`);
}

function getDocs(select, id) {

    clearModal();
    localStorage.setItem('itemUp', id);

    let modalVal = []
    for(aux of select.children) {
        modalVal = [...modalVal, aux.textContent]
    }

    $('#filters').html('');
    $('#document').val(modalVal[0]);
    $('#description').val(modalVal[1]);
    $('#filtername').val(modalVal[2].toString());
    $('#maxfilesize').val(modalVal[3].split('').reverse().slice(2).reverse().join(''));

    let filters = [];
    $('#filefilter input').each(function () {
        modalVal[2].split(',').forEach((doc) => {
            if(doc.trim() === this.name) {
                filters = [...filters, this.value];
            }
        })
    });

    for (let i = 0; i < filters.length; i++) {
        console.log(filters[i]);
        $('#filters').append(`
            <input type="hidden" name="filters[${i}]" value="${filters[i]}">
        `);
    }

    $('#filefilter input').each(function () {
        filters.forEach((filter) => {
            if(filter === this.value) {
                $(this).prop('checked', true);
            }
        })
    });

    $('#updatedocumentbutton').attr('disabled', false);
}

function clearModal() {

    $('#filters').html('');
    $('#filefilter input').each(function () {
        $(this).prop('checked', false);
    });
    
    $('#itemModal input').each(function () {
        if(this.type !== 'checkbox' && this.type !== 'radio') {
            $(this).val('');
        } else {
            $(this).prop('checked', false);
        }
    });

    $('#itemModal textarea').each(function () {
        $(this).val('');
    });

    $('#itemModal input').each(function () {
        $(this).removeClass('is-invalid');
    });
    $('#itemModal textarea').each(function () {
        $(this).removeClass('is-invalid');
    });
    $('#onprint1').prop('checked', true);
    $('#onexport1').prop('checked', true);
}

function validarFormDoc(prop) {

    let validar = '';
    validar = (!!prop) ? validar = prop : validar = 'itemModal';

    console.log(validar);

    $(`#${validar} input`).each(function () {
        if(this.value === '' && this.id !== 'userTipos' && this.id !== 'userpassword' && this.id !== 'useremail' && this.id !== 'driversid'  && this.id !== 'driversidduedate') {
            $(this).addClass('is-invalid');
            Swal.fire('<h3>Campos Obligatorios* <span style="color:red">*</span></h3>');
        }
        $(this).change(function (e) { 
            $(this).removeClass('is-invalid');
        });
    });

    $(`#${validar} select`).each(function () {
        if(this.value === '') {
            $(this).addClass('is-invalid');
            Swal.fire('<h3>Campos Obligatorios <span style="color:red">*</span></h3>');
        }
        $(this).change(function (e) { 
            $(this).removeClass('is-invalid');
        });
    });

    $(`#${validar} textarea`).each(function () {
        if(this.value === '') {
            $(this).addClass('is-invalid');
            Swal.fire('<h3>Campos Obligatorios <span style="color:red">*</span></h3>');
        }
        $(this).change(function (e) { 
            $(this).removeClass('is-invalid');
        });
    });
}

function createUpdateItem(method, token, formValues, id = null) {

    const action = method.split('.')[0];
    if(id !== null) formValues.append('id', id);
    formValues.append('method', method);
    formValues.append('token', token);
    console.log(formValues);

    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: formValues,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                console.log(response);
                return;
            }
            afterCRUD(response, action);
        },
        error: function (response) {
            handleError(response, action);
            console.log(response);
        }
    });
}

function getTipos(param) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'groups.select',
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            if(param == 'users') {
                renderOptionsTipos(response);
            } else if (param == 'update') {
                renderTipos(response, param);
            }else {
                renderTipos(response);
            }
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function renderTipos(response, action) {

    $('#itemModal').html(`
        <form id="tiposModal">

            <div class="form-group">
                <label for="name">Grupo</label>
                <input type="text" class="form-control" id="name" name="name">
            </div>

            <div class="form-group">
                <label for="description">Descripción</label>
                <input type="text" class="form-control" id="description" name="description">
            </div>
            
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-dark" id="creategroups"><i class="fa-solid fa-file"></i> Guardar</button>
            </div>
        </form>
    `);

    const t_body = $('#idtipos');
    if(action === 'update') $(t_body).html('');
    if($(t_body).children().length > 0) return;
    
    if($(t_body).children().length === 0) {
        response.records.forEach((el) => {
            $('#idtipos').append(`
                <tr id="${el[0]}tipos">
                    <td>${el[1]}</td>
                    <td>${el[2]}</td>
                </tr>
            `);
        });

        $('tr').unbind().click(function (e) {
            onSelected(this, e);
        });
    }

    // Change -> Modal - Button
    $('.tiposActions button').each(function () {
        $(this).mouseenter(function () { 
            if(this.id == 'createTiposButton' || this.id == 'updateTiposButton') {
                setModal(this);
                $('.modal-header').html(`
                    <h5 class="modal-title">
                        ${(this.id === 'createTiposButton') 
                        ? '<h5 class="modal-title">Nuevo Tipo</h5>' 
                        : '<h5 class="modal-title">Actualizar Tipo</h5>' }</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                `);
            }
        });
    });

    const createupdate = $('#creategroups');
    createupdate.mouseenter(function () { 
        validarFormDoc();
    });

    //! Submit
    $('#tiposModal').submit(function (e) { 
        e.preventDefault();
        let formValues = new FormData(this);
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('itemUp');
        setupModal(createupdate);
        if(id !== null) {
            createUpdateItem('groups.update', token, formValues, id);
        } else {
            createUpdateItem('groups.create', token, formValues);
        }
    });
}

function getTipo(select, id) {
    clearModal();
    localStorage.setItem('itemUp', id);
    let modalVal = []
    for(aux of select.children) {
        modalVal = [...modalVal, aux.textContent]
    }
    $('#name').val(modalVal[0]);
    $('#description').val(modalVal[1]);
    $('#updateTiposButton').attr('disabled', false);
}

function getConductores(param) {

    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'groupsofdrivers.select',
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            if(param == 'users') {
                renderOptionsConductores(response);
            } else if(param == 'update') {
                renderConductores(response, param);
            } else {
                renderConductores(response);
            }
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function renderConductores(response, action) {

    $('#itemModal').html(`
        <form id="tiposModal">

            <div class="form-group">
                <label for="name">Grupo</label>
                <input type="text" class="form-control" id="name" name="name">
            </div>

            <div class="form-group">
                <label for="description">Descripción</label>
                <input type="text" class="form-control" id="description" name="description">
            </div>
            
            <div class="modal-footer">
                <button type="button" class="btn btn-warning" data-dismiss="modal">Cerrar</button>
                <button type="submit" class="btn btn-dark" id="creategroupsofdrivers"><i class="fa-solid fa-file"></i> Guardar</button>
            </div>
        </form>
    `);

    const t_body = $('#conductor');
    if(action === 'update') $(t_body).html('');
    if($(t_body).children().length > 0) return;

    if($(t_body).children().length === 0) {
        response.records.forEach((el) => {
            $('#conductor').append(`
                <tr id="${el[0]}conductor">
                    <td>${el[1]}</td>
                    <td>${el[2]}</td>
                </tr>
            `);
        });

        $('tr').unbind().click(function (e) {
            onSelected(this, e);
        });
    }

    // Change -> Modal - Button
    $('.conductoresActions button').each(function () {
        $(this).mouseenter(function () { 
            if(this.id == 'createConductorButton' || this.id == 'updateConductorButton') {
                setModal(this);
                $('.modal-header').html(`
                    <h5 class="modal-title">
                        ${(this.id === 'createConductorButton') 
                        ? '<h5 class="modal-title">Nuevo Conductor</h5>' 
                        : '<h5 class="modal-title">Actualizar Conductor</h5>' }</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                `);
            }
        });
    });

    const createupdate = $('#creategroupsofdrivers');
    createupdate.mouseenter(function () { 
        validarFormDoc();
    });

    //! Submit
    $('#tiposModal').submit(function (e) { 
        e.preventDefault();
        let formValues = new FormData(this);
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('itemUp');
        setupModal(createupdate);
        if(id !== null) {
            createUpdateItem('groupsofdrivers.update', token, formValues, id);
        } else {
            createUpdateItem('groupsofdrivers.create', token, formValues);
        }
    });
}

function getConductor(select, id) {
    clearModal();
    localStorage.setItem('itemUp', id);
    let modalVal = []
    for(aux of select.children) {
        modalVal = [...modalVal, aux.textContent]
    }
    $('#name').val(modalVal[0]);
    $('#description').val(modalVal[1]);
    $('#updateConductorButton').attr('disabled', false);
}

function getUsuarios(token, action) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'users.select',
            token
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            renderUsuarios(response, action);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function renderUsuarios(response, action) {

    console.log(response);

    if(action == 'update' || action == 'refresh') {
        $('#tableusuario').DataTable().clear().destroy();
        $('#theadusuario').empty();
        if(action == 'refresh') {
            toastr.success('Usuarios Actualizados')
        }
    }

    $('#theadusuario').html(`
        <tr>
            <th class="text-center" scope="col">Nombre</th>
            <th class="text-center" scope="col">Código de empleado</th>
            <th class="text-center" scope="col">Status</th>
            <th class="text-center" scope="col"></th>
            <th class="text-center" scope="col"></th>
            <th class="text-center" scope="col"></th>
            <th class="text-center" scope="col"></th>
            <th class="text-center" scope="col"></th>
            <th class="text-center" scope="col"></th>
            <th class="text-center" scope="col"></th>
        </tr>
    `);

    $('#itemModal').html(`
        <form id="usersModal">
            <div class="row">
                <div class="col-8">
                    <div class="form-group">
                        <label for="">Nombre</label>
                        <input type="text" class="form-control" id="name" name="name">
                    </div>
                </div>
                <div class="col-4 d-flex align-items-center">
                    <div class="form-group">
                        <label for="status">Activo</label>
                        <input type="checkbox" class="" value="1" id="status" name="status">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="">Código de empleado</label>
                        <input type="text" class="form-control" id="username" name="username">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="">Contraseña</label>
                        <input type="password" class="form-control" id="userpassword" name="password">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="email" class="form-control" id="useremail" name="email">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="">Teléfono</label>
                        <input type="text" class="form-control" id="phone" name="phone">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label for="">Teléfono de emergencia</label>
                <input type="text" class="form-control" id="emergencyphone" name="emergencyphone">
            </div>

            <div class="form-group">
                <label for="">Grupo "Permisos"</label>
                <select class="form-control" name="group" id="userTipos">
                    <option value="0" selected disabled>-Seleccione-</option>
                </select>
            </div>

            <hr>

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="driversid">No. de licencia</label>
                        <input type="text" class="form-control" id="driversid" name="driversid">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="driversidduedate">Vigencia</label>
                        <input type="date" class="form-control" id="driversidduedate" name="driversidduedate">
                    </div>
                </div>
            </div>

            <div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">x</th>
                            <th scope="col">Grupo</th>
                            <th scope="col">Descripción</th>
                        </tr>
                    </thead>
                    <tbody id="userConductores">
                    </tbody>
                </table>
            </div>
            
            <div class="modal-footer mt-5">
                <button type="button" class="btn btn-warning" data-dismiss="modal">Cerrar</button>
                <button type="submit" class="btn btn-dark" id="createusers"><i class="fa-solid fa-file"></i> Guardar</button>
            </div>
        </form>
    `);

    getConductores('users');
    getTipos('users');

    response.records.forEach((el) => {
        if(el[0] == 46) {
            console.log(el);
        }
    });

    const t_body = $('#usuario');
    if(action === 'update' || action === 'refresh') $(t_body).html('');
    if($(t_body).children().length > 0) return;

    if($(t_body).children().length === 0) {
        response.records.forEach((el) => {
            $('#usuario').append(`
                <tr id="${el[0]}usuario" ondblclick="idItem('${el[0]}usuario', '${el[1].split(' ').join('').replace(/\D/g,'')}')">
                    <td>${el[1]}</td>
                    <td>${el[2]}</td>
                    <td>${(el[9] == 1 || el[9] == -1) ? 'Activo' : 'Bloqueado'}</td>
                    <td>${el[3]}</td>
                    <td>${el[4]}</td>
                    <td>${el[5]}</td>
                    <td>${el[6]}</td>
                    <td>${el[7]}</td>
                    <td>${(el[8] == null) ? '' : el[8]}</td>
                    <td>${el[10]}</td>
                </tr>
            `);
        });
    }

    let dataTable = $('#tableusuario');
    dataTable.DataTable({
        paging: false,
        scrollY: 475,
        columnDefs: [
            {
                target: 3,
                visible: false,
            },
            {
                target: 4,
                visible: false,
            },
            {
                target: 5,
                visible: false,
            },
            {
                target: 6,
                visible: false,
            },
            {
                target: 7,
                visible: false,
            },
            {
                target: 8,
                visible: false,
            },
            {
                target: 9,
                visible: false,
            },
        ],
        language: {"search": "Buscar:"},
        "info": false,
    });

    $('tr').unbind().click(function (e) {
        onSelected(this, e);
    });

    // Change -> Modal - Button
    $('#usuariosActions button').each(function () {
        $(this).mouseenter(function () { 
            if(this.id == 'createUserButton' || this.id == 'updateUserButton') {
                setModal(this);
                $('.modal-header').html(`
                    <h5 class="modal-title">
                        ${(this.id === 'createUserButton') 
                        ? '<h5 class="modal-title">Nuevo Usuario</h5>' 
                        : '<h5 class="modal-title">Actualizar Usuario</h5>' }</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                `);
            }
        });
    });

    const createupdate = $('#createusers');
    createupdate.mouseenter(function () { 
        validarFormDoc();
    });

    //! Submit
    $('#usersModal').submit(function (e) { 
        e.preventDefault();
        let formValues = new FormData(this);
        if(!($('#status').prop('checked'))) {
            formValues.append('status', '0')
        }

        if($('#userTipos').val() == null) {
            formValues.append('group', '0')
        }

        let i = 0;
        $('#userConductores input').each(function (index, element) {
            if(this.checked) {
                formValues.append(`driver_groups[${i}]`, this.value);
                i++;
            }
        });

        const token = localStorage.getItem('token');
        const id = localStorage.getItem('itemUp');
        setupModal(createupdate);
        if(id !== null) {
            createUpdateItem('users.update', token, formValues, id);
        } else {
            createUpdateItem('users.create', token, formValues);
        }
    });

}

function renderOptionsConductores(response) {
    response.records.forEach((el, i) => {
        console.log(i);
        $('#userConductores').append(`
            <tr>
                <td><input type="checkbox" class="w-100" id="driver_groups[${i}]" name="" value="${el[0]}"></td>
                <td>${el[1]}</td>
                <td>${el[2]}</td>
            </tr>
        `);
    });
}

function renderOptionsTipos(response) {
    response.records.forEach((el) => {
        $('#userTipos').append($('<option>', {
            value: el[0],
            text: el[1]
        })); 
    });
}

function getUser(select, id) {

    clearModal();
    localStorage.setItem('itemUp', id);

    const data = $('#tableusuario').DataTable().row(select).data();
    console.log(data);

    if(data[2] == 'Activo') {
        $('#status').prop('checked', true);
    } else {
        $('#status').prop('checked', false);
    }
    $('#name').val(data[0]);                    
    $('#username').val(data[1]);               
    $('#userpassword').val(data[3]);                
    $('#useremail').val(data[4]);                   
    $('#phone').val(data[5]);                   
    $('#emergencyphone').val(data[6]);          
    $('#driversid').val(data[7]);               
    $('#driversidduedate').val(data[8]);        

    $('#updateUserButton').attr('disabled', false);
    $('#deleteUserButton').attr('disabled', false);
}

function eliminarUsuario(id, token, usersbuttons) {

    console.log(id, token);
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'users.delete',
            token,
            id
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response);
                return;
            }
            afterCRUD(response, usersbuttons);
        },
        error: function (response) {
            handleError(response);
        }
    });
}

function getPermisos(id) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'groups.select',
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            renderPermisos(response);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function renderPermisos(response) {

    const t_body = $('#permisosGroup');
    if($(t_body).children().length === 0) {
        response.records.forEach((el) => {
            $('#permisosGroup').append(`
                <tr id="${el[0]}gruposP">
                    <td>${el[1]}</td>
                    <td>${el[2]}</td>
                </tr>
            `);
        });

        $('tr').unbind().click(function (e) {
            onSelected(this, e);
        });
    }
}

function selectPermisos(select, id) {

    console.log(select, id);

    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'groups.permissions',
            group: id,
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            settingPermissions(response)
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function settingPermissions(response) {

    $('#onPermisos input').each(function () {
        $(this).attr('disabled', false);
    });
    $('#setPermisos').attr('disabled', false);

    response.records.forEach((el) => {
        el.forEach((per) => {
            $('#onPermisos input').each(function () {
                if(this.name == `permissions[${per}]`) {
                    $(this).prop('checked', true);
                }
            });
        })
    });
}

function setPermisos(id, token) {
    
    let formData = new FormData();
    formData.append('method', 'groups.setpermissions');
    formData.append('token', token);
    formData.append('group', id);

    $('#onPermisos input').each(function () {
        if(this.checked) {
            formData.append(this.name, this.value);
        }
    });

    console.log(formData);

    return;
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function (response) {
            console.log(response);
        },
        error: function (response) {
            Swal.fire({
                icon: "error",
                title: "Ha ocurrido un error",
                text: response.message,
            });
            console.log(response);
        }
    });
}

function getAuth(id, action) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'groups.select',
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            renderAuth(response, action);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function renderAuth(response, action) {

    const t_body = $('#authGroup');
    if(action === 'update') $(t_body).html('');
    if($(t_body).children().length > 0) return;
    
    if($(t_body).children().length === 0) {
        response.records.forEach((el) => {
            $('#authGroup').append(`
                <tr id="${el[0]}authP" ondblclick="idItem('${el[0]}authP', '${el[1].split(' ').join('').replace(/\D/g,'')}')">
                    <td>${el[1]}</td>
                    <td>${el[2]}</td>
                </tr>
            `);
        });

        $('tr').unbind().click(function (e) {
            onSelected(this, e);
        });
    }

    const p_body = $('#authGroupOption');
    if($(p_body).children().length === 0) {
        response.records.forEach((el) => {
            $('#authGroupOption').append(`
                <tr id="${el[0]}authPP" ondblclick="idItem('${el[0]}authPP', '${el[1].split(' ').join('').replace(/\D/g,'')}')">
                    <td>${el[1]}</td>
                </tr>
            `);
        });

        $('tr').unbind().click(function (e) {
            onSelected(this, e);
        });
    }
}

function getEje() {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'hubs.select',
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            selectEjes(response);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function selectEjes(response) {
    response.records.forEach((el) => {
        $('#authhub').append($('<option>', {
            value: el[0],
            text: el[1]
        })); 
    });
}

function loadSetAuth() {
    const group = localStorage.getItem('marca');
    const hub = $('#authhub').val();
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'common.authorizations',
            group,
            hub,
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            isAuth(response);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function isAuth(response) {
    
    if(response.records === undefined || response.records.length === 0) return;

    let permission = [];
    response.records.forEach((el) => {
        el.forEach((id) => {
            console.log(id);
            $('#authGroupOption tr').each(function (index, element) {
                if(id == this.id.split('').reverse().slice(6).reverse().join('')) {
                    permission = [...permission, `${this.outerText},${this.id.split('').reverse().slice(6).reverse().join('')}`];
                }
            });
        })
    });

    permission.forEach((el, i) => {
        console.log(el.split(','));
        $('#isAuthGroup').html(`
            <tr id="isauthPP${i}">
                <td>${el.split(',')[0]}</td>
                <td>
                    <input type="hidden" name="${el.split(',')[0]}" value="${el.split(',')[1]}">
                </td>
            </tr>
        `);
        $('tr').unbind().click(function (e) {
            onSelected(this, e);
        });
    }); 
    console.log(permission);

}

function createAuth() {

    const group = localStorage.getItem('marca');
    const permission = localStorage.getItem('createAuth');
    const text = localStorage.getItem('createAuthText');
    const hub = $('#authhub').val();
    if(group == null || permission == null || text == null  || hub == '' ) return;

    let control = 0;
    $('#isAuthGroup input').each(function () {
        if(this.name === text) {
            control++;
            alert('permisos ya existente');
        }
    });

    if(control === 0) {
        $('#isAuthGroup').append(`
                <tr id="isauthPP${$('#isAuthGroup').children().length+1}">
                    <td>${text}</td>
                    <td>
                        <input type="hidden" name="${text}" value="${permission}">
                    </td>
                </tr>
            `);
        $('tr').unbind().click(function (e) {
            onSelected(this, e);
        });
    }

    localStorage.removeItem('createAuthText');
    localStorage.removeItem('createAuth');
}

function starDeleteAuth(id) {

    const permission = localStorage.getItem('deleteAuth');
    const trDelete = localStorage.getItem('deleteTR');
    
    $(`#${trDelete}`).remove();

    localStorage.removeItem('deleteAuth');
    localStorage.removeItem('deleteTR');
}

function newAutorizaciones(token) {

    let formData = new FormData();    
    const group = localStorage.getItem('marca');
    const hub = $('#authhub').val();
    
    formData.append('method', 'common.setauthorizations');
    formData.append('token', token);
    formData.append('group', group);
    formData.append('hub', hub);

    $('#isAuthGroup input').each(function (index, element) {
        formData.append(`permission[${index}][index]`, index);
        formData.append(`permission[${index}][permission]`, this.value);
    });

    console.log(formData);
    //return;
    
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            afterCRUD(response, 'common');
        },
        error: function (response) {
            handleError(response, action);
        }
    });

}

function getRegistros(token, action) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'log.select',
            token
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            renderRegistros(response, action);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function renderRegistros(response, action) {

    const modulos = ['Vehículos', 'Solicitudes', 'Colores', '(Vehículos) Marcas y Submarcas', 'Ejes', 'Usuarios', 'Grupos', 'Reportes', 'Categorías', 'Sistema', 'Rubros', 'Documentos'];
    const actividad = ['Alta', 'Actuaización', 'Baja', 'Autorización', 'Impresión', 'Cancelación', 'Inicio de sesión', 'Cierre de sesión'];
    
    let t_body = $('#registros');
    if(action === 'update') {
        $(t_body).html('');
        toastr.success('Registros Actualizados');
    } 
    if($(t_body).children().length > 0) return;

    response.records.forEach((el) => {
        $(t_body).append(`
            <tr id="${el[0]}registro">
                <td clas="w-100">${el[8]}</td>
                <td clas="w-100">${modulos[el[2]]}</td>
                <td clas="w-100">${el[3].toString().padStart(6, "0")}</td>
                <td clas="w-100">${actividad[el[5]]}</td>
                <td clas="w-100">${(el[6] == null || el[6] == '') ? '' : el[6]}</td>
                <td clas="w-100">${el[7]}</td>
            </tr>
        `);
    });
}

function getReportesDatos(token, action) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'data_reports.select',
            token
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            renderReportesDatos(response, action);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function renderReportesDatos(response, action) {

    $('#itemModal').html(`
        <form id="data_reportsModal">
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="titledata_reports">Titulo</label>
                        <input type="text" class="form-control" id="titledata_reports" name="title">
                    </div>
                </div>
                <div class="col-6 d-flex align-items-center">
                    <div class="form-group">
                        <label for="descriptiondata_reports">Descripción</label>
                        <textarea class="form-control" name="description" id="descriptiondata_reports" rows="3"></textarea>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <textarea id="consultasql" class="form-control" name="sentence" placeholder="SQL" rows="4"></textarea>
            </div>

            <button id="consultasqlbutton" disabled class="btn btn-dark text-rigth"><i class="fa-solid fa-code"></i> Consultar</button>

            <hr>

            <div class="form-group">
                <div class="table-h45 table-container">
                    <table class="table table-bordered table-striped table-sql">      
                        <thead class="thead-dark" id="sqlreporthead">
                        </thead>
                        <tbody id="sqlreport">
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="modal-footer">
                <button type="button" class="btn btn-warning" data-dismiss="modal">Cerrar</button>
                <button type="submit" class="btn btn-dark" id="createdata_reports"><i class="fa-solid fa-file"></i> Guardar</button>
            </div>
        </form>
    `);

    const t_body = $('#reportes-datos');
    if(action === 'update' || action === 'refresh') $(t_body).html('');
    if($(t_body).children().length > 0) return;

    response.records.forEach((el) => {
        $(t_body).append(`
            <tr id="${el[0]}data_reports">
                <td>${el[1]}</td>
                <td>${el[2]}</td>
            </tr>
        `);
    });

    $('tr').unbind().click(function (e) {
        onSelected(this, e);
    });

    // Change -> Modal - Button
    $('#data_reportsActions button').each(function () {
        $(this).mouseenter(function () {
            if(this.id == 'createdata_reportsbutton' || this.id == 'updatedata_reportsbutton')  {
                setModal(this);
                $('.modal-header').html(`
                    <h5 class="modal-title">
                        ${(this.id === 'createdata_reportsbutton') 
                        ? '<h5 class="modal-title">Nuevo reporte de datos</h5>' 
                        : '<h5 class="modal-title">Actualizar reporte de Datos</h5>' }</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                `);  
            }
        });
    });

    $('#consultasql').change(function (e) { 
        e.preventDefault();
        if(this.value.length > 16) {
            $('#consultasqlbutton').attr('disabled', false);
        } else {
            $('#consultasqlbutton').attr('disabled', true);
        }
    });

    $('#consultasqlbutton').unbind().click(function (e) { 
        e.preventDefault();
        const sql = $('#consultasql').val();
        $(this).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Consultando...');
        $('.modal-content button').each(function () {
            $(this).attr('disabled', true);
        });
        consultarSQL(sql);
    });

    const createupdate = $('#createdata_reports');
    createupdate.mouseenter(function () { 
        validarFormDoc();
    });

    //! Submit
    $('#data_reportsModal').submit(function (e) { 
        e.preventDefault();
        let formValues = new FormData(this);
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('itemUp');
        setupModal(createupdate)
        if(id !== null) {
            createUpdateItem('data_reports.update', token, formValues, id);
        } else {
            createUpdateItem('data_reports.create', token, formValues);
        }
    });
}



function consultarSQL(sql) {
    const token = localStorage.getItem('token');
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'data_reports.test',
            token,
            sql
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response);
                console.log(response);
                return;
            }
            renderSQLTest(response)
        },
        error: function (response) {
            handleError(response);
            console.log(response);
        }
    });
}

function renderSQLTest(response) {

    $('.modal-content button').each(function () {
        $(this).attr('disabled', false);
    });
    $('#consultasqlbutton').html('<i class="fa-solid fa-code"></i> Consultar');

    const t_body = $('#sqlreport');
    t_body.empty();

    $('#sqlreporthead').html(`
        <tr>
            <th class="text-center" scope="col">Id</th>
            <th class="text-center" scope="col">Name</th>
            <th class="text-center" scope="col">Username</th>
            <th class="text-center" scope="col">Password</th>
            <th class="text-center" scope="col">Email</th>
            <th class="text-center" scope="col">Phone</th>
            <th class="text-center" scope="col">Emergencyphone</th>
            <th class="text-center" scope="col">DriversID</th>
            <th class="text-center" scope="col">DriversIDFecha</th>
            <th class="text-center" scope="col">Active</th>
            <th class="text-center" scope="col">Deleted</th>
        </tr>
    `);

    response.records.forEach((el) => {
        $(t_body).append(`
            <tr id="${el[0]}sql">
                <td style="width: 10px">${el[0]}</td>
                <td style="width: 10px">${el[1]}</td>
                <td style="width: 10px">${el[2]}</td>
                <td style="width: 10px">${el[3]}</td>
                <td style="width: 10px">${el[4]}</td>
                <td style="width: 10px">${el[5]}</td>
                <td style="width: 10px">${el[6]}</td>
                <td style="width: 10px">${el[7]}</td>
                <td style="width: 10px">${(el[8] == null) ? '' : el[8]}</td>
                <td style="width: 10px">${el[9]}</td>
                <td style="width: 10px">${el[10]}</td>
            </tr>
        `);
    });
}

function getdata_reports(select, id) {

    clearModal();
    localStorage.setItem('itemUp', id);

    let modalVal = [];
    for(aux of select.children) {
        modalVal = [...modalVal, aux.textContent]
    }

    console.log(modalVal);

    $('#titledata_reports').val(modalVal[0]);
    $('#descriptiondata_reports').val(modalVal[1]);

    $('#updatedata_reportsbutton').attr('disabled', false);
    $('#deletedata_reportsbutton').attr('disabled', false);
}

function eliminardata_reports(id, token, action) {

    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'data_reports.delete',
            token,
            id
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            afterCRUD(response, action);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function getReportes(token, action) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'reports.select',
            token,
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            renderReportes(response, action);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function renderReportes(response, action) {

    $('#itemModal').html(`
        <form id="reporteModal">
            <div class="row">
                <div class="col-5">
                    <div class="form-group">
                        <label for="title">Titulo</label>
                        <input type="text" class="form-control" id="titlereporte" title="title" name="title">
                    </div>
                    <div class="form-group">
                        <label for="description">Descripción</label>
                        <textarea class="form-control" name="description" id="descriptionreporte" rows="3"></textarea>
                    </div>
                </div>

                <div class="col-7">
                    <div class="onprintrepo" id="printid">
                        <p class="ml-2">Al imprimir</p>
                        <div class="form-group ml-2">
                            <input type="radio" class="" name="onprint" value="0" id="onprint1" checked>
                            <label class="form-check-label" for="onprint">Previsualizar antes de imprimir</label>
                        </div>
                        <div class="form-group ml-2">
                            <input type="radio" class="" name="onprint" value="1" id="onprint2">
                            <label class="form-check-label" for="onprint">Mostrar solo dialogo de impresión</label>
                        </div>
                        <div class="form-group ml-2">
                            <input type="radio" class="" name="onprint" value="2" id="onprint3">
                            <label class="form-check-label" for="onprint">Usar impresora predeterminada</label>
                        </div>
                    </div>
                    <div class="onprintrepo" id="exportid">
                        <div class="row text-center">
                            <div class="form-group col m-0 p-0">
                                <input type="radio" class="" name="onexport" checked value="0" id="onexport1">
                                <label class="form-check-label" for="onexport">Abrir</label>
                            </div>
                            <div class="form-group col m-0 p-0">
                                <input type="radio" class="" name="onexport" value="1" id="onexport2">
                                <label class="form-check-label" for="onexport">Notificar</label>
                            </div>
                            <div class="form-group col m-0 p-0">
                                <input type="radio" class="" name="onexport" value="2" id="onexport3">
                                <label class="form-check-label" for="onexport">Ignorar</label>
                            </div>
                        </div>
                    </div>

                    <button class="btn btn-dark mt-2 text-center" disabled><i class="fa-solid fa-file"></i> Modificar Reporte</button>
                </div>
            </div>
            
            <div class="modal-footer mt-2">
                <button type="button" class="btn btn-warning" data-dismiss="modal">Cerrar</button>
                <button type="submit" class="btn btn-dark" id="createreports"><i class="fa-solid fa-file"></i> Guardar</button>
            </div>
        </form>
    `);

    const t_body = $('#reportes');
    if(action === 'update' || action === 'refresh') $(t_body).html('');
    if($(t_body).children().length > 0) return;

    let imprimir = 'Previsualizar';
    let exportar = 'Abrir';
    let eliminar = 'No';
    response.records.forEach((el) => {
        if(el[3] == 1) imprimir = 'Dialogo';
        if(el[3] == 2) imprimir = 'Impresora predeterminada';
        if(el[4] == 1) exportar = 'Notificar';
        if(el[4] == 2) exportar = 'Ignorar';
        if(el[5] == 1) eliminar = 'Si';
        $(t_body).append(`
            <tr id="${el[0]}report">
                <td>${el[1]}</td>
                <td>${el[2]}</td>
                <td>${imprimir}</td>
                <td>${exportar}</td>
                <td>${eliminar}</td>
            </tr>
        `);
    });

    $('tr').unbind().click(function (e) {
        onSelected(this, e);
    });

    // Change -> Modal - Button
    $('#reportesActions button').each(function () {
        $(this).mouseenter(function () {
            if(this.id == 'createreportbutton' || this.id == 'updatereportbutton')  {
                setModal(this);
                $('.modal-header').html(`
                    <h5 class="modal-title">
                        ${(this.id === 'createreportbutton') 
                        ? '<h5 class="modal-title">Nuevo reporte</h5>' 
                        : '<h5 class="modal-title">Actualizar reporte</h5>' }</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                `);  
            }
        });
    });

    const createupdate = $('#createreports');
    createupdate.mouseenter(function () { 
        validarFormDoc();
    });

    //! Submit
    $('#reporteModal').submit(function (e) { 
        e.preventDefault();
        let formValues = new FormData(this);
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('itemUp');
        setupModal(createupdate);
        formValues.append('data', null);
        if(id !== null) {
            createUpdateItem('reports.update', token, formValues, id);
        } else {
            createUpdateItem('reports.create', token, formValues);
        }
    });
}

function getReporte(select, id) {
    clearModal();
    localStorage.setItem('itemUp', id);

    let modalVal = [];
    for(aux of select.children) {
        modalVal = [...modalVal, aux.textContent]
    }

    console.log(modalVal);

    let onprint = '0';
    let onexport = '0';
    let ondelete = '0';
    if(modalVal[2] == 'Dialogo') onprint = '1';
    if(modalVal[2] == 'Impresora predeterminada') onprint = '2';
    if(modalVal[3] == 'Notificar') onprint = '1';
    if(modalVal[3] == 'Ignorar') onprint = '2';
    if(modalVal[3] == 'Si') ondelete = '1';

    $('#printid input').each(function () {
        $(this).prop('checked', false);
        if(this.value == onprint) $(this).prop('checked', true);
    });

    $('#exportid input').each(function () {
        $(this).prop('checked', false);
        if(this.value == onexport) $(this).prop('checked', true);
    });

    $('#titlereporte').val(modalVal[0]);
    $('#descriptionreporte').val(modalVal[1]);

    $('#updatereportbutton').attr('disabled', false);
    $('#deletereportbutton').attr('disabled', false);    
}

function eliminarReporte(id, token, action) {
    $.ajax({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
        data: {
            method: 'reports.delete',
            token,
            id
        },
        dataType: 'json',
        success: function (response) {
            if(response.status == 'error') {
                handleError(response, action);
                return;
            }
            afterCRUD(response, action);
        },
        error: function (response) {
            handleError(response, action);
        }
    });
}

function validarLoginUpdate(token) {

    if($('#newpassword').val() !== $('#confirmpassword').val()) {
        $('#confirmpassword').val('');
        $('#confirmpassword').addClass('is-invalid');
        Swal.fire('<h3>Error, Las contraseñas no coinciden!</h3>');
    } else {
        const oldpassword = $('#oldpassword').val();
        const newpassword = $('#newpassword').val();
        $.ajax({
            type: 'POST',
            url: 'https://lionware.dev/services/sgv/webservice/index.php',
            data: {
                method: 'login.update',
                token,
                oldpassword,
                newpassword,
            },
            dataType: 'json',
            success: function (response) {
                if(response.status == 'error') {
                    handleError(response);
                    return;
                }
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: response.message,
                    showConfirmButton: false,
                    timer: 2500
                });
                $('#oldpassword').val('');
                $('#newpassword').val('');
                $('#confirmpassword').val('');
            },
            error: function (response) {
                handleError(response);
            }
        });   
    }
}

function orderControl(prop) {

    const posiciones = $('#isAuthGroup').children().length
    if(posiciones > 1) {
        $('#plusbutton').attr('disabled', false);
        $('#lessbutton').attr('disabled', false);
    }
}

function orderAuth(param) {
    
    const control = localStorage.getItem('deleteTR');
    if(param.id == 'plusbutton') {
        $(`#${control}`).prev().insertAfter($(`#${control}`));
    } else {
        $(`#${control}`).insertAfter($(`#${control}`).next());
    }    
}



// Revisar altura de tabla COLORES
// const colores = $('.tbody-color').children().length
// for (let i = 0; i < ((($('.color-view').height() / $('#tr-color').height())-colores)-1); i++) {
//     $('.tbody-color').append(`
//         <tr>
//             <td class="p-1 pl-4">
//                 <input type="text">
//             </td>
//         </tr>
//     `);
// }


//! Buscar usuario, 