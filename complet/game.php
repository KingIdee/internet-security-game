<?php
session_start();
?>

<!DOCTYPE html>
<html>
  <head>

  <meta charset="utf-8">
  <link href="vendor/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="game.css" rel="stylesheet"/>

  	<style>

  	</style>

    <!--  <script src="fabric.min.js"></script> -->

    <script src="theorix.js"></script>

  </head>
  <body style="background-color:blue;background-image:url('best003.gif');background-size:100%; background-repeat:no-repeat; cursor:url('fishs.png'), default">

<?php

$username = $_SESSION['username'];
    $gamePage = <<<EOG

    <img src="besthook22.png" class="hook">
    <div class="container-fluid">

      <img src="fish.png" class="fish">
      <img src="fish.png" style="width:15%; height:20%; position:fixed; top:1%" id="cursor">
      <div class="row">
        <div class="col-md-2">
          <p style="color:white; font-size:20px;"> Player: $username </p>
        </div>
        <div class="col-md-8">

          <p id="score" class="score"></p>
        <!--  <button id="replay" class="btn btn-info replay">Replay</button> -->

          <div class="row" id="w">
            <div class="col-md-4">
                <h3 id="title">Question 1</h3>
            </div>
            <div class="col-md-2">
            </div>
            <div class="col-md-6">
              <p id="question" name="is">

              </p>
            </div>
          </div>


          <div id="q" class="row">
            <div class="col-md-4">
                <div class="quiz-container">
                  <p id="q1" class="init"></p>
                </div>
            </div>
            <div class="col-md-4">
              <div class="quiz-container">
                <p id="q2" class="init correct"></p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="quiz-container">
                <p id="q3" class="init"></p>
              </div>
            </div>

          </div>

        </div>

        <div class="col-md-2"></div>

      </div>

      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">

        </div>
        <div class="col-md-3">
          <img src="next.png" style="width:60px; height:60px; margin-left:20%" id="next"><span id="nextt" style="color:white">Next Question</span>
        </div>

      </div>
    </div>
    <h2 id = "level"> Level 1</h2>
EOG;



if(isset($_GET['score'])) {
  include_once "config.php";
  //store present score in db
  $score = $_GET['score'];
  if($score > -1) {
    $db->query("INSERT INTO `$dbname`.`game`(username,score) VALUES('$username','$score')");
    echo "<script>window.location.href='http://localhost/game/complet/game.php?score=-1'</script>";
  }

  //fetch scores from db
  $scores = fetchAssoc("game","id, username, score, time","id > -1 ORDER BY score DESC");
  //print_r($scores);
  //generate a table of high scores
  $hScores = "<div class ='row'><div class='col-md-2'></div><div class='col-md-8'><table class='table' style='width:70%;  color:white; font-size:1.5em; background-color:blue; margin-left:20%;'><tr><td>S/N</td><td>User Name</td><td>Score</td><td>Time</td></tr>";
  for($i=0; $i < count($scores); $i++) {
    $hScores .= "<tr><td>".($i+1)."</td>";
    $hScores .= "<td>".$scores[$i]['username']."</td>";
    $hScores .= "<td>".$scores[$i]['score']."</td>";
    $hScores .= "<td>".$scores[$i]['time']."</td></tr>";
  }
  $hScores .= "</table></div><div class='col-md-2'></div></div>";
  //create score page
  echo $hScores."<br/><a class='btn btn-info' href='http://localhost/game/complet/game.php?n=$username'>Replay Game</a><br/>";
}
else echo $gamePage;
?>

<script src="fab.js"></script>
  </body>
</html>
