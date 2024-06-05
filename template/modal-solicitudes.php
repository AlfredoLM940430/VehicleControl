
<!-- Modal-Solicitudes -->
<div class="modal fade" id="" tabindex="-1" role="dialog" data-backdrop="static" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header" id="modal-header1">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="container mb-5" id="nueva-solicitud">

                <input type="hidden" name="method" value="system">

                    <div class="form-group">
                        <label for="reasons">Instituciones a visitar o actividades a realizar</label>
                        <textarea class="form-control" id="reasons" name="reasons" rows="3"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="hub">Eje</label>
                        <select class="form-control" name="hub" id="hub">
                            <option value="" selected disabled>-Seleccione-</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col">
                                <label for="states">Estado</label>
                                <select class="form-control" name="" id="states">
                                    <option value="" selected disabled>-Seleccione-</option>
                                </select>
                            </div>
                            <div class="col">
                                <label for="municipality">Municipio</label>
                                <select class="form-control" name="municipality" id="municipality">
                                    <option value="" selected disabled>-Seleccione-</option>
                                </select>
                            </div>
                        </div>
                    </div>
                        
                    <div class="form-group">
                        <div class="row">
                            <div class="col-8">
                                <label for="departureplace">Lugar de salida</label>
                                <input type="text" class="form-control" placeholder="" name="departureplace" id="departureplace">
                            </div>
                            <div class="col-4">
                                <label for="departuredate">Fecha y hora de salida</label>
                                <input type="datetime-local" class="form-control" placeholder="" name="departuredate" id="departuredate">
                            </div>
                        </div>
                    </div>
                        
                    <div class="form-group">
                        <div class="row">
                            <div class="col-8">
                                <label for="destination">Lugar de destino</label>
                                <input type="text" class="form-control" placeholder="" name="destination" id="destination">
                            </div>
                            <div class="col-4">
                                <label for="eventdate">Fecha y hora del evento</label>
                                <input type="datetime-local" class="form-control" placeholder="" name="eventdate" id="eventdate">
                            </div>
                        </div>
                    </div>
                        
                    <div class="form-group">
                        <div class="row">
                            <div class="col-8">
                                <label for="returnplace">Lugar de retorno</label>
                                <input type="text" class="form-control" placeholder="" name="returnplace" id="returnplace">
                            </div>
                            <div class="col-4">
                                <label for="returndate">Fecha y hora de retorno</label>
                                <input type="datetime-local" class="form-control" placeholder="" name="returndate" id="returndate">
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col mr-0 pr-0">
                                <label for="">Vehiculo</label>
                                <div class="d-flex">
                                    <input type="text" id="labelcar" class="form-control" readonly="true" placeholder="-Seleccione-">
                                    <input type="hidden" id="vehicle" name="vehicle">
                                    &nbsp;&nbsp;<button type="button" class="btn btn-s-modal" data-toggle="modal" id="vehicleSelectButton" data-target="#vehicleSelectModal">
                                        <i class="fa-solid fa-car"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col pl-2">
                                <label for="driver">Conductor</label>
                                <select class="form-control" name="driver" id="driver">
                                    <option value="" selected disabled>-Seleccione-</option>
                                </select>
                            </div>
                            <div class="col">
                                <label for="responsable">Responsable</label>
                                <select class="form-control" name="responsable" id="responsable">
                                    <option value="" selected disabled>-Seleccione-</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="tab-modal" style="border: 1px solid silver;">
                        <button id="relacion" type="button" class="tab-active">Relación de personas a transportar</button>
                        <button id="pago" type="button" class="tab-modal-button">Compromisos de pago del solicitante al chofer</button>
                        <button id="adjuntos" type="button" class="tab-modal-button">Adjuntos</button>
                    </div>

                    <div class="" style="border: 1px solid silver;"> 

                        <div id="relacion-div" class="container form-group mt-2">
                            <div class="form-group">
                                <p>"Inlcuya los datos del responsable si éste va a viajar"</p>
                                <div style="border: 1px solid; min-height: 6.5rem;">
                                    <table class="table">
                                        <tbody id="responsables-table">
                                        </tbody>
                                    </table> 
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row" id="add-responsable">
                                    <div class="col-3">
                                        <input type="text" class="form-control" placeholder="Código" id="codigo">
                                    </div>
                                    <div class="col-7 pr-0">
                                        <input type="text" class="form-control" placeholder="Nombre" id="nombre">
                                    </div>
                                    <div class="col-2 d-flex justify-content-between">
                                        <button class="btn btn-s-modal" id="add-responsable-button" disabled><i class="fa-solid fa-file-circle-plus"></i></button>
                                        <button class="btn btn-s-modal" id="delete-responsable-button" disabled><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="pago-div" class="container">
                            <div id="table_compromisos">
                                <table class="table table-striped table-bordered">
                                    <tbody id="compromisos-tb">
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div id="adjuntos-div" class="container form-group">
                            <label for=""><i class="fa-solid fa-paperclip"></i></label>
                            <input class="form-control" type="file" id="adjuntos" disabled="true" accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
                        </div>
                    </div>

                    <div class="d-flex justify-content-center mt-4">
                        <button class="btn btn-warning m-2" data-dismiss="modal">Cerrar</button>
                        <button class="btn btn-dark m-2" type="submit" id="nuevasolicitud-button"><i class="fa-solid fa-floppy-disk"></i> Guardar cambios</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Vehicle Select Modal -->
<div id="vehicleSelect">
    <div class="modal fade" id="vehicleSelectModal" tabindex="-1" role="dialog" aria-hidden="true" style="z-index: 1600;">
        <div class="">
            <div class="modal-dialog border-id">
                <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Eliga el vehículo</h5>
                    </div>
                    <div class="modal-body">
                    <table class="table">
                        <thead class="thead-dark text-center">
                            <tr>
                                <th scope="col">No. Ecnmco</th>
                                <th scope="col">Pasajeros</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Modelo</th>
                            </tr>
                        </thead>
                        <tbody id="vehicle-props" class="text-center">
                        </tbody>
                        </table>
                    </div>
                    <div class="modal-footer" id="second-modal-footer">
                        <button id="cerrar-autos" type="button" class="btn btn-warning">Cerrar</button>
                        <button id="ok-autos" type="button" class="btn btn-dark" disabled><i class="fa-solid fa-car"></i> OK</button>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div>

