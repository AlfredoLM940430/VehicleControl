<?php include 'template/header.php'; ?>
    <?php include 'template/navbar.php'; ?>

    <div id="loadview">
        <div class="spinner-border" role="status" style="width: 3rem; height: 3rem;">
            <span class="visually-hidden"></span>
        </div>
    </div>

    <div id="onLoadSolicitudes" style="display: none;">
        <div class="mr-3">
            <div class="pt-2 text-right">
                <button id="approvesolicitud" class="btn btn-dark" disabled><i class="fa-solid fa-check"></i> Aprovar</button>
                <button id="cancelsolicitud" class="btn btn-dark" disabled data-toggle="modal" data-target="#cancelModal"><i class="fa-solid fa-xmark"></i></i> Cancelar</button>
            </div>
        </div>

        <div class="ml-3 mr-3" id="solicitudesdiv">
            <table class="table table-bordered text-center display nowrap" id="tablesolicitudes">
                <thead class="thead-dark" id="theadsolicitudes">
                </thead>
                <tbody id="solicitudes">
                </tbody>
                <tfoot class="thead-dark" id="tfootsolicitudes">
            </tfoot>
            </table>
        </div>

        <div id="actionssolicitud" class="d-flex justify-content-between ml-5 mr-5 mt-2">
            <div>
                <button id="printsolicitud" type="button" class="btn btn-dark" disabled><i class="fa-solid fa-print"></i> Imprimir</button>
            </div>
            <div class="btn-group">
                <button id="createsolicitud" type="button" class="btn btn-dark" disabled>
                    <i class="fa-solid fa-file"></i> Nuevo
                </button>
                <button id="readsolicitud" type="button" class="btn btn-dark" disabled>
                    <i class="fa-solid fa-eye"></i> Ver</button>
                <button id="updatesolicitud" type="button" class="btn btn-dark" disabled>
                    <i class="fa-solid fa-pen-to-square"></i> Editar</button>
                <button id="deletesolicitud" type="button" class="btn btn-dark" disabled>
                    <i class="fa-solid fa-trash"></i> Eliminar</button>
            </div>
            <div>
                <button id="refreshsolicitud" type="button" class="btn btn-dark" disabled><i class="fa-solid fa-arrows-rotate"></i></button>
            </div>
        </div>

        <?php include 'template/modal-solicitudes.php'; ?>
        <?php include 'template/modal-cancelar.php'; ?>

        <div id="printsolicituddiv">
        </div>
    </div>
    
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.6/dist/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/2.0.7/js/dataTables.js"></script>
    <!-- <script src="https://cdn.datatables.net/2.0.6/js/dataTables.js"></script> -->
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/dataTables.buttons.js"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/buttons.dataTables.js"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/buttons.print.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/searchpanes/2.3.1/js/dataTables.searchPanes.js"></script>
    <script src="https://cdn.datatables.net/searchpanes/2.3.1/js/searchPanes.dataTables.js"></script>
    <script src="https://cdn.datatables.net/select/2.0.2/js/dataTables.select.js"></script>
    <script src="https://cdn.datatables.net/select/2.0.2/js/select.dataTables.js"></script> 
    <!-- Toastr -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
    <script src="js/solicitudes.js"></script>
    </body>
</html>