<div class="ml-3 mr-3 mt-3 table-h80 table-container">
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Reporte</th>
                <th scope="col">Descripción</th>
                <th scope="col">Al imprimir</th>
                <th scope="col">Al exportar</th>
                <th scope="col">Eliminable</th>
            </tr>
        </thead>
        <tbody id="reportes">
        </tbody>
    </table>
</div>

<div class="text-center mt-2">
    <div class="btn-group" id="reportesActions">
        <button id="createreportbutton" type="button" class="btn btn-dark">
            <i class="fa-solid fa-file"></i> Nuevo
        </button>

        <button id="updatereportbutton" type="button" class="btn btn-dark" disabled>
            <i class="fa-solid fa-pen-to-square"></i> Editar
        </button>

        <button id="deletereportbutton" type="button" class="btn btn-dark" disabled>
            <i class="fa-solid fa-trash"></i> Eliminar
        </button>
    </div>
</div>