<?php
include 'dbconfig.php'
?>
<?php
function insertintodb($name,$email,$ph,$country,$state,$gender,$address,$interest)
{
$conn=db();
$su1=0;

$eph=mysqli_query($conn, "SELECT Email from data where Phone='$ph'");  //this if for checking of duplicate  ph number
 $num_rows=mysqli_num_rows($eph);
if($num_rows==0)
{
$sql = "INSERT INTO data(Name,Email,Phone,Country,State,Gender,Address,Interest)
VALUES('$name','$email','$ph','$country','$state','$gender','$address','$interest')";
}
else
{
$suMsg="Phone Number Exist"; //if ph number exist then data does not insert into database
$su1=1;
}
if($su1==0)
{
if (mysqli_query($conn, $sql)) {
    $suMsg="success.....";
} else {
    $suMsg="Not Sucess..check your query....";
}
}

mysqli_close($conn);
return $suMsg;
}
?>