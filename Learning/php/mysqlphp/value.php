<html>
<head>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "subscribe";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$selectSQL = 'SELECT * FROM `data`';
  if( !( $selectRes = mysqli_query($conn, $selectSQL ) ) ){
    echo 'Retrieval of data from Database Failed - #'.mysql_errno().': '.mysql_error();
  }else{
    ?>
    </head>
    <body>
    <h1><u><b>The Information</b></u></h1>
<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Country</th>
      <th>State</th>
      <th>Address</th>
      <th>Gender</th>
      <th>Interest</th>
    </tr>
  </thead>
  <tbody>
    <?php
      if( mysqli_num_rows( $selectRes )==0 ){
        echo '<tr><td colspan="4">No Rows Returned</td></tr>';
      }else{
        while( $row = mysqli_fetch_assoc( $selectRes ) ){
          echo "<tr><td>{$row['Name']}</td><td>{$row['Email']}</td><td>{$row['Phone']}</td><td>{$row['Country']}</td>
          <td>{$row['State']}</td><td>{$row['Address']}</td><td>{$row['Gender']}</td><td>{$row['Interest']}</td>
          <td><a href='edit.php?id={$row['Id']}'>Edit</a></td>
          <td><a href='delete.php?id={$row['Id']}'>Delete</a></td></tr>\n";
        }
      }
    ?>
  </tbody>
</table>
<a href="index.php">Home</a>
    <?php
  }

?>
</body>
</html>
