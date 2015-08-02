<?php
include 'dbconfig.php';
?>
<?php
function updateintodb($name,$email,$ph,$country,$state,$gender,$address,$interest,$id)
{
$conn=db();
$sql = "UPDATE  data set Name='$name',Email='$email',Phone='$ph',Country='$country',State='$state',Gender='$gender',Address='$address',Interest='$interest' where id='$id'";
if (mysqli_query($conn, $sql)) {
    $suMsg="success.....";
} else {
    $suMsg="Not Sucess......";
}

mysqli_close($conn);
return $suMsg;
}
?>