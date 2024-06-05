    <nav class="main-nav pt-1 mt-1">
        <div class="container-menu">
            <div id="general-menu-buttons">
                <button id="button-colores" href="" class="active-tab"><i class="fa-solid fa-palette"></i> Colores</button>
                <button id="button-vehiculos" href=""><i class="fa-solid fa-car"></i> Vehículos</button>
                <button id="button-ejes" href=""><i class="fa-brands fa-hubspot"></i> Ejes</button>
                <button id="button-rubros" href=""><i class="fa-solid fa-dollar-sign"></i> Rubros</button>
                <button id="button-documentacion" href=""><i class="fa-brands fa-dochub"></i> Documentación</button>
            </div>
        </div>
    </nav>

    <div id="general-display-colores">

        <!-- Colores -->
        <div id="colores">
            <div class="table-h75 table-container mt-3 ml-3 mr-3">
                <table class="table table-striped m-0">
                    <tbody id="color" class="tbody-color">
                    </tbody>
                </table>
            </div>
            <div class="mt-2 d-flex container">
                <input type="text" class="form-control" id="addcolor" placeholder="Agregar nuevo color">
                <button class="btn btn-dark ml-4" id="addcolorbutton" disabled><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
        
        <!-- Vehiculos -->
        <div id="vehiculos">
            <div class="container d-flex">

                <!-- Marcas -->
                <div class="m-2">
                    <p class="p-0 m-0">Marca</p>
                    <div class="table-container table-h75">
                        <table class="table table-striped">
                            <tbody id="marca">
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex mt-1">
                        <input type="text" class="form-control" id="addmarca">
                        <button class="btn btn-dark" id="addmarcabutton" disabled><i class="fa-solid fa-plus"></i>
                    </div>
                </div>

                <!-- Modelos -->
                <div class="m-2">
                    <p class="p-0 m-0">Modelo</p>
                    <div class="table-container table-h75">
                        <table class="table table-striped">
                            <tbody id="modelo">
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex mt-1">
                        <input type="text" class="form-control" disabled id="addmodelo">
                        <button class="btn btn-dark" id="addmodelobutton" disabled><i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>

        <!-- Ejes -->
        <div id="ejes">
            <div class="container d-flex">

                <!-- Eje -->
                <div class="m-2">
                    <p class="p-0 m-0">Eje</p>
                    <div class="table-container table-h75">
                        <table class="table table-striped">
                            <tbody id="eje">
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex mt-1">
                        <input type="text" class="form-control" id="addeje">
                        <button class="btn btn-dark" id="addejebutton" disabled><i class="fa-solid fa-plus"></i>
                    </div>
                </div>

                <div class="m-2">
                    <!-- Programa -->
                    <p class="p-0 m-0">Programa</p>
                    <div class="table-container programa-doc-div">
                        <table class="table table-striped">
                            <tbody id="programa">
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex mt-1">
                        <input type="text" class="form-control" id="addprograma" disabled>
                        <button class="btn btn-dark" id="addprogramabutton" disabled><i class="fa-solid fa-plus"></i>
                    </div>
                    
                    <!-- Documento -->
                    <div class="d-flex justify-content-between mb-1 mt-1">
                        <p class="p-0 m-0 align-self-center">Documento</p>
                        <button class="btn btn-primary" disabled id="addhubdocbutton"><i class="fa-solid fa-check text-white"></i></button>
                    </div>
                    <div class="table-container programa-doc-div">
                        <table class="table table-striped">
                            <tbody id="documentosejes" class="">
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>

        <!-- Rubros -->
        <div id="rubros">
            <div class="table-h75 table-container mt-3 ml-3 mr-3">
                <table class="table table-striped m-0">
                    <tbody id="rubro">
                    </tbody>
                </table>
            </div>
                <div class="mt-2 d-flex container">
                    <input type="text" class="form-control" id="addrubros">
                    <button class="btn btn-dark" id="addrubrosbutton" disabled><i class="fa-solid fa-plus"></i>
                </div>
        </div>

        <!-- Documentacion -->
        <div id="documentacion">
            <div class="table-h75 table-container mt-3 ml-3 mr-3">
                <table class="table table-striped m-0 text-center">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Documento</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Tipos de archivos</th>
                            <th scope="col">Tamaño maximo</th>
                        </tr>
                    </thead>
                    <tbody id="bdydocumentacion">
                    </tbody>
                </table>
            </div>
            <div id="docactions" class="mt-2 d-flex justify-content-center container">
                <button class="btn btn-dark ml-4" id="createdocumentbutton"><i class="fa-solid fa-plus"></i> Nuevo</button>
                <button class="btn btn-dark ml-4" id="updatedocumentbutton" disabled="false"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
            </div>
        </div>

    </div>

    
    <!-- Modal Documentacion
    <div class="modal fade" id="" tabindex="-1" aria-labelledby="" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
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
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" id="createDoc">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    Documentacion Archivos 2do Modal
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
    </div> -->