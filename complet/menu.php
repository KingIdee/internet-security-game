<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>
  <title>
    Select Level
  </title>

  <meta charset="utf-8">
  <link href="vendor/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="game.css" rel="stylesheet"/>
</head>
<body style="background-color:blue">
  <?php
  $username = $_SESSION['username'];
  $menu = <<<EOM
  <section class="menu">
	<div class="menu-options">
      <a href="game.php?n=$username&l=1" class="btn">
  			<span class="glyphicon glyphicon-user"></span>
  			<span class="menu-txt">Level 1</span>
  		</a>
      <a href="game.php?score=-1&l=1" class="btn">
			<span class="glyphicon glyphicon-user"></span>
			<span class="menu-txt">High Scores</span>
		</a>
	</div>

	<div class="menu-options">
    <a href="game.php?n=$username&l=2" class="btn">
			<span class="glyphicon glyphicon-user"></span>
			<span class="menu-txt">Level 2</span>
		</a>
    <a href="game.php?score=-1&l=2" class="btn">
			<span class="glyphicon glyphicon-user"></span>
			<span class="menu-txt">High Scores</span>
		</a>
	</div>
</section>
EOM;

echo $menu;
  ?>
</body>
</html>
