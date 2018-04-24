<?php
session_start();
?>
<?php
if(isset($_POST['start'])) {
  //manipulate database
  include_once "config.php";
  $username = $_POST['username'];
  $password = $_POST['password'];
  $_SESSION['username'] = $username;
  $_SESSION['password'] = $password;
  $user = fetchAssoc("user","username","username = '$username'");
  if($user != -1) {
    ;
  }
  else {
    $db->query("INSERT INTO `$dbname`.`user`(username,password) VALUES('$username','$password')");
  }
  header("location:game.php?n=$username");
}
?>
<!DOCTYPE html>
<html>
  <head>

  <meta charset="utf-8">
  <link href="vendor/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="game.css" rel="stylesheet"/>

  	<style>
    /* Login style */
    #loginForm {
      width:100%;
      height:100%;
      margin-top:20%;
      color:blue;
    }
    .form-group {
      opacity:0.5;
    }

    .form-control {
      border-top:0;
      border-left:0;
      border-right:0;
      padding:5%;
      font-size:20px;
    }

    .form {
    /*  background-image:url("best5.gif");*/

    }
  	</style>

  </head>

<body>

  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <div class="form">
        <form role="form" name="loginForm" id="loginForm" action="index.php" method="post">
          <h1>LOGIN TO GAME</h2>
          <div class="form-group">
            <label for="username">User Name</label>
            <input type="text" placeholder="Username" id="username" name="username" class="form-control"/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" name="password" class="form-control"/>
          </div>
          <button type="submit" name="start" class="btn btn-info" style="width:100%">Login</button>
        </form>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>

  <script src="login.js"></script>
</body>
