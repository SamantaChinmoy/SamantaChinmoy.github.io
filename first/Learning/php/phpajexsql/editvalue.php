<?php
include 'dbconfig.php'
?>
<?php
function editvalue($id1)
{
$conn=db();
$order = "SELECT * FROM data
  where id='$id1'";

        $result = mysqli_query($conn,$order);

        $row = mysqli_fetch_array($result);
        $inerestArr=array();
        $inerestArr=explode(",",$row['Interest']);
mysqli_close($conn);
return $row;
}
?>