
<!-- Modal -->
<div class="modal fade" id="" tabindex="-1" role="dialog" data-backdrop="static" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="formID">
                    <input type="hidden" id="method" name="method" value="">
                    <input id="token" type="hidden" name="token">
                    <div class="row">
                        <div class="col-sm-8">
                            <p>1.Dependencia de adscripcíon</p>
                            <div class="row">
                                <div class="col">
                                    <input class="form-control" type="text" name="udg" disabled value="CENTRO UNIVERSTITARIO DEL NORTE">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div id="useudg" class="form-uso">
                                <p class="m-1">Uso</p>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="use" id="use" value="0">
                                    <label for="use" class="m-0">
                                        Directivo
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="use" id="use1" value="1">
                                    <label for="use1" class="m-0">
                                        Servicio
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <p>2.Datos del vehículo</p>
                        <div class="row">
                            <div class="col">
                                <label for="">2.1 Marca</label>
                                <select class="form-control" name="brand" id="brand">
                                    <option value="" disabled selected>--Seleccione--</option>
                                </select>
                            </div>
                            <div class="col">
                                <label for="">Tipo</label>
                                <select class="form-control" name="type" id="type">
                                    <option value="" disabled selected>--Seleccione--</option>
                                </select>
                            </div>
                            <div class="col">
                                <label for="">2.2 Modelo</label>
                                <input class="form-control" type="number" name="model" id="model" placeholder="año">
                            </div>
                            <div class="col">
                                <label for="">2.3 Color</label>
                                <select class="form-control" name="color" id="color">
                                    <option value="" disabled selected>--Seleccione--</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <div class="row">
                            <div class="col">
                                <label for="motor">2.4 No. Motor</label>
                                <input class="form-control" type="text" name="motor" id="motor">
                            </div>
                            <div class="col">
                                <label for="series">2.5 No. Serie</label>
                                <input class="form-control" type="string" name="series" id="series">
                            </div>
                            <div class="col">
                                <label for="cylinders">2.6 No. Cilindros</label>
                                <select class="form-control" name="cylinders" id="cylinders">
                                    <option value="" disabled selected>--Seleccione--</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="8">8</option>
                                    <option value="12">12</option>
                                </select>
                                <!-- <input class="form-control" type="number"  name="cylinders" id="cylinders"> -->
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <div class="row">
                            <div class="col">
                                <label for="bill">2.7 Factura de la empresa</label>
                                <input class="form-control" type="string" name="bill" id="bill">
                            </div>
                            <div class="col">
                                <label for="billno">2.8 No. de factura</label>
                                <input class="form-control" type="string" name="billno" id="billno">
                            </div>
                            <div class="col">
                                <label for="udgidate">2.9 Fecha de alta U.D.G</label>
                                <input class="form-control" type="date" name="udgidate" id="udgidate">
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <div class="form-adquisicion">
                            <p>2.10 Forma de adquisición</p>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="foa" id="foa" value="1">
                                <label class="form-check-label">Compra</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="foa" id="foa1" value="2">
                                <label class="form-check-label">Remisión</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="foa" id="foa2" value="3">
                                <label class="form-check-label">Donacíon</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="foa" id="foa3" value="4">
                                <label class="form-check-label">Otro</label>
                            </div>
                            <input class="form-control" type="text" name="foaother" id="foaother" style="display: none;">
                        </div>
                    </div>
                    <hr>
                    <div>
                        <div class="row">
                            <div class="col">
                                <label for="licenseplates">2.11 Placas</label>
                                <input class="form-control" type="string" name="licenseplates" id="licenseplates">
                            </div>
                            <div class="col">
                                <label for="economicno">2.12 No. Económico</label>
                                <input class="form-control" type="number" name="economicno" id="economicno">
                            </div>
                            <div class="col">
                                <label for="passengercapacity">2.13 Capacidad de pasajeros</label>
                                <input class="form-control" type="number" name="passengercapacity" id="passengercapacity">
                            </div>
                            <div class="col">
                                <label for="capacity">2.14 Capacidad de carga</label>
                                <input class="form-control" type="number" name="capacity" id="capacity">
                            </div>
                        </div>
                    </div>
                    <hr>
                    <p>2.15 Caracteristicas de la U.DE.G</p>
                    <div class="row">
                        <div class="col-sm">
                            <div class="">
                                <p class="m-1">Lineas de costado</p>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="llr" id="llr" value="0">
                                    <label class="m-0" for="llr">
                                        Derecha
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="lll" id="lll" value="0">
                                    <label class="m-0" for="lll">
                                        Izquierda
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="">
                                <p class="m-1">Escudo de la U.DE.G</p>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="udgsr" id="udgsr" value="0">
                                    <label class="m-0" for="udgsr">
                                        Derecha
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="udgsl" id="udgsl" value="0">
                                    <label class="m-0" for="udgsl">
                                        Izquierda
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="">
                                <p class="m-1">Número económico</p>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="enr" id="enr" value="0">
                                    <label class="m-0" for="enr">
                                        Derecha
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="enl" id="enl" value="0">
                                    <label class="m-0" for="enl">
                                        Izquierda
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="enre" id="enre" value="0">
                                    <label class="m-0" for="enre">
                                        Parte trasera
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" name="id" id="id">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Cerrar</button>
                    <button id="submitButton" type="submit" class="btn btn-dark"><i class="fa-solid fa-car"></i> Guardar cambios</button>
                </form>
            </div>
        </div>
    </div>
</div>