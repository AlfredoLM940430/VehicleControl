    <nav class="main-nav pt-1 mt-1">
        <div class="container-menu">
            <div id="grupos-menu-buttons">
                <button id="button-tipos" href="" class="active-tab"><i class="fa-solid fa-users"></i> Tipos</button>
                <button id="button-conductores" href=""><i class="fa-solid fa-id-card"></i> Conductores</button>
            </div>
        </div>
    </nav>

    <div id="general-display-grupos">

        <div id="tipos">
            <div class="d-flex mt-3">
                <div class="table-container tipos-conductores-h ml-3">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Grupo</th>
                                <th scope="col">Descripción</th>
                            </tr>
                        </thead>
                        <tbody id="idtipos">
                        </tbody>
                    </table>
                </div>
                <div class="tiposActions text-center">
                    <button id="createTiposButton" class="btn btn-dark"><i class="fa-solid fa-plus"></i></button>
                    <button id="updateTiposButton" class="btn btn-dark mt-2" disabled><i class="fa-solid fa-pen-to-square"></i></button>
                </div>
            </div>
        </div>

        <div id="conductores">
            <div class="d-flex mt-3">
                <div class="table-container tipos-conductores-h ml-3">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Grupo</th>
                                <th scope="col">Descripción</th>
                            </tr>
                        </thead>
                        <tbody id="conductor">
                        </tbody>
                    </table>
                </div>
                <div class="text-center conductoresActions">
                    <button id="createConductorButton" class="btn btn-dark"><i class="fa-solid fa-plus"></i></button>
                    <button id="updateConductorButton" class="btn btn-dark mt-2" disabled><i class="fa-solid fa-pen-to-square"></i></button>
                </div>
            </div>
        </div>


    </div>