
    <div class="form-view h-loginupdate text-center">
        <form id="loginupdateform" method="POST">
            <div class="form-group">
                <label for="pwd">Contraseña actual</label>
                <input type="password" class="form-control" name="oldpassword" id="oldpassword">
            </div>
            <div class="form-group">
                <label for="pwd">Nueva contraseña</label>
                <input type="password" class="form-control" name="newpassword" id="newpassword">
            </div>
            <div class="form-group">
                <label for="pwd">Confirmar contraseña</label>
                <input type="password" class="form-control" name="confitmpassword" id="confirmpassword">
            </div>
            <button type="submit" class="btn btn-dark" id="updateloginbutton">
                <i class="fa-solid fa-check"></i> Aceptar
            </button>
        </form> 
    </div>