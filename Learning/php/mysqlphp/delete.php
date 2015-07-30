<?php
$id1='';
$id1= $_GET["id"];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "subscribe";
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$delSQL = "DELETE FROM data where Id='$id1'";
  if( !( $selectRes1 = mysqli_query($conn, $delSQL ) ) ){
    echo 'Retrieval of data from Database Failed - #'.mysql_errno().': '.mysql_error();
  }else{
    
    header("Location: value.php");
  }
    ?>
