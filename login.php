<?php include 'template/header.php'; ?>

    <div class="form-view text-center">
        <form id="form-login" method="POST">
            <input type="hidden" name="method" value="login.login">
            <div class="form-group">
                <label for="text">Nombre de Usuario</label>
                <input type="text" class="form-control" name="username" id="username">
            </div>
            <div class="form-group">
                <label for="pwd">Contraseña</label>
                <input type="password" class="form-control" name="password" id="password">
            </div>
            <button type="submit" class="btn btn-secondary" id="submit-button">
                <i class="fa-solid fa-right-to-bracket" style="color: white;"></i>
            </button>
        </form> 
    </div>

    </body>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="js/login.js"></script>
</html>