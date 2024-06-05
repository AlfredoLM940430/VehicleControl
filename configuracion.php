<?php include 'template/header.php'; ?>
    <?php include 'template/navbar.php'; ?>
    
    <nav class="main-nav pt-1 mt-1">
        <div class="container-menu">
            <div class="config-menu">
                <button id="config-general" href="views/general.php"><i class="fa-solid fa-gears"></i> General</button>
                <button id="config-grupos" href="views/grupos.php"><i class="fa-solid fa-users"></i> Grupos</button>
                <button id="config-usuarios" href="views/usuarios.php"><i class="fa-solid fa-user-plus"></i> Usarios</button>
                <button id="config-permisos" href="views/permisos.php"><i class="fa-solid fa-lock"></i> Permisos</button>
                <button id="config-autorizaciones" href="views/autorizaciones.php"><i class="fa-solid fa-lock"></i> Autorizaciones</button>
                <button id="config-registros" href="views/registros.php"><i class="fa-solid fa-book"></i></i> Registros</button>
                <button id="config-reportes-datos" href="views/reportes_datos.php"><i class="fa-solid fa-chart-simple"></i> Reportes - Datos</button>
                <button id="config-reportes" href="views/reportes.php"><i class="fa-solid fa-chart-simple"></i> Reportes</button>
                <button id="config-acceso" class="active-tab" href="views/acceso.php"><i class="fa-solid fa-right-from-bracket "></i> Acceso</button>
            </div>
        </div>
    </nav>

    <div id="menu-config">
        
        <section id="menu-general">
            <?php include 'template/configuracionTabViews/general.php'; ?>
        </section>
        
        <section id="menu-grupos">
            <?php include 'template/configuracionTabViews/grupos.php'; ?>
        </section>
        
        <section id="menu-usuarios">
            <?php include 'template/configuracionTabViews/usuarios.php'; ?>
        </section>
        
        <section id="menu-permisos">
            <?php include 'template/configuracionTabViews/permisos.php'; ?>
        </section>
        
        <section id="menu-autorizaciones">
            <?php include 'template/configuracionTabViews/autorizaciones.php'; ?>
        </section>
        
        <section id="menu-registros">
            <?php include 'template/configuracionTabViews/registros.php'; ?>
        </section>
        
        <section id="menu-reportes-datos">
            <?php include 'template/configuracionTabViews/registros-datos.php'; ?>
        </section>
        
        <section id="menu-reportes">
            <?php include 'template/configuracionTabViews/reportes.php'; ?>
        </section>

        <section id="menu-acceso">
            <?php include 'template/configuracionTabViews/acceso.php'; ?>
        </section>

        <!-- Modal Documentacion -->
        <div class="modal fade" id="" tabindex="-1" aria-labelledby="" data-backdrop="static" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" id="itemModal">
                    </div>
                </div>
            </div>
        </div>

        <!-- Documentacion Archivos 2do Modal -->
        <div id="tipoArchivo">
            <div class="modal fade" id="tipoArchivoModal" tabindex="-1" role="dialog" aria-hidden="true" style="z-index: 1600;">
                <div class="">
                    <div class="modal-dialog border-id">
                        <div class="modal-content ">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Tipos de archivos</h5>
                            </div>
                            <div class="modal-body"">
                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">x</th>
                                            <th scope="col">Desciptor</th>
                                            <th scope="col">Filtros</th>
                                        </tr>
                                    </thead>
                                    <tbody id="filefilter" class="text-center">
                                        <tr>
                                            <td><input class="w-100" type="checkbox" name="Archivos de imagen" value="1" id="imagen"></td>
                                            <td>Archivos de imagen</td>
                                            <td>*.bmp, *.jpg, *.jpeg, *.png, *.gif</td>
                                        </tr>
                                        <tr>
                                            <td><input class="w-100" type="checkbox" name="Archivos PDF" value="2" id="PDF"></td>
                                            <td>Archivos PDF</td>
                                            <td>*.pdf</td>
                                        </tr>
                                        <tr>
                                            <td><input class="w-100" type="checkbox" name="Archivos XML" value="3" id="XML"></td>
                                            <td>Archivos XML</td>
                                            <td>*.xml</td>
                                        </tr>
                                        <tr>
                                            <td><input class="w-100" type="checkbox" name="Documentos de Word" value="4" id="Word"></td>
                                            <td>Documentos de Word</td>
                                            <td>*.doc, *.docm, *.docx, *.dot, *.dotm</td>
                                        </tr>
                                        <tr>
                                            <td><input class="w-100" type="checkbox" name="Libros de Excel" value="5" id="Excel"></td>
                                            <td>Libros de Excel</td>
                                            <td>*.xls, *.xlt, *.xlm, *.xlsx, *.xltx</td>
                                        </tr>
                                        <tr>
                                            <td><input class="w-100" type="checkbox" name="Presentaciones PowerPoint" value="6" id="PowerPoint"></td>
                                            <td>Presentaciones PowerPoint</td>
                                            <td>*.ppt, *.pot, *.pps, *.pptx, *.pptm, *.potx</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="modal-footer" id="second-modal-archivos">
                                <button id="cerrar-archivos" type="button" class="btn btn-secondary">Cerrar</button>
                                <button id="ok-archivos" type="button" class="btn btn-primary">OK</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
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
    <script src="js/configuracion.js"></script>
    </body>
</html>