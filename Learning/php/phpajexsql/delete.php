<?php
include 'dbconfig.php';
$conn=db();
$id1='';
$id1= $_POST["id"];
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$delSQL = "DELETE FROM data where id='$id1'";
  if( !( $selectRes1 = mysqli_query($conn, $delSQL ) ) ){
    echo 'Retrieval of data from Database Failed - #'.mysql_errno().': '.mysql_error();
  }else{
    
 echo  header("Location: show_information.php");
  }
    ?>
