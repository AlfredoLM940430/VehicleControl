<div class="ml-3 mr-3 mt-3 table-h45 table-container">
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Código de empleado</th>
            </tr>
        </thead>
        <tbody id="authGroup">
        </tbody>
    </table>
</div>

<div class="d-flex table-container ml-3 mr-3 mt-3 align-items-center">
    <div class="w-100 m-2">
        <div>
            <label for="">Eje</label>
            <select name="hub" id="authhub" class="form-control" disabled>
                <option value="" selected disabled>-Seleccione-</option>
            </select>
        </div>
        <div class="table-container table-h23 mt-2">
            <table class="table">
                <tbody id="isAuthGroup">
                </tbody>
            </table>
        </div>
    </div>

    <input type="hidden" name="">

    <div class="d-flex flex-column">
        <div id="orderActions">
            <button disabled id="plusbutton" class="authactions btn btn-dark p-1"><i class="fa-solid fa-plus"></i></button>
            <button disabled id="lessbutton" class="authactions btn btn-dark p-1 mb-2"><i class="fa-solid fa-minus"></i></button>
        </div>
        <button disabled id="addAuth" class="authactions btn btn-dark p-1 mt-2"><i class="fa-solid fa-less-than"></i></button>
        <button disabled id="removeAuth" class="authactions btn btn-dark p-1"><i class="fa-solid fa-greater-than"></i></button>
    </div>

    <div class="w-100 m-2">
        <p class="mb-1">Grupos</p>
        <div class="table-container table-h30">
            <table class="table">
                <tbody id="authGroupOption" style="display: none;">
                </tbody>
            </table>
        </div>

    </div>
</div>

<div class="text-center m-2">
    <button class="btn btn-dark" disabled id="createcommon"><i class="fa-solid fa-floppy-disk"></i> Guardar</button>
</div>