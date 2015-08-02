<?php
function db()
{
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "subscribe";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
    return $conn;
}
?>