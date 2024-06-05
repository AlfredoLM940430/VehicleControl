<?php include 'template/header.php'; ?>
    <?php include 'template/navbar.php'; ?>
    
    <div class="m-5 text-center">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Numero Economico</th>
                    <th scope="col">Uso</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Color</th>
                    <th scope="col">Placas</th>
                </tr>
            </thead>
            <tbody id="vehiclelist">
            </tbody>
        </table>
    </div>

    <div id="actionsVehiculos" class="d-flex justify-content-between ml-5 mr-5 mb-5">
        <div>
            <button id="printvehicle" type="button" class="btn btn-dark" disabled><i class="fa-solid fa-print"></i> Imprimir</button>
        </div>
        <div class="btn-group">
            <button id="createvehicle" type="button" class="btn btn-dark" disabled>
                <i class="fa-solid fa-file"></i> Nuevo
            </button>
            <button id="readvehicle" type="button" class="btn btn-dark" disabled>
                <i class="fa-solid fa-eye"></i> Ver</button>
            <button id="updatevehicle" type="button" class="btn btn-dark" disabled>
                <i class="fa-solid fa-pen-to-square"></i> Editar</button>
            <button id="deletevehicle" type="button" class="btn btn-dark" disabled>
                <i class="fa-solid fa-trash"></i> Eliminar</button>
        </div>
        <div>
            <button id="refreshvehicle" type="button" class="btn btn-dark" disabled><i class="fa-solid fa-arrows-rotate"></i></button>
        </div>
    </div>
    
    <?php include 'template/modal.php'; ?>

    <div id="printcartablediv">
    </div>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.6/dist/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/2.0.6/js/dataTables.js"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/dataTables.buttons.js"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/buttons.dataTables.js"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/buttons.print.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/buttons.html5.min.js"></script>
    <!-- Toastr -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
    <script src="js/vehiculos.js"></script>
    </body>
</html>