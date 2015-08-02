<?php
include 'insert.php';
?>
<?Php
$name     = $_POST['fname'];
$email    = $_POST['email'];
$phone    = $_POST['phone'];
$gender   = $_POST['gender'];
$country  = $_POST['country'];
$address  = $_POST['address'];
$interest = $_POST['interest'];
$state    = "";
$status_msg="";
$status_form = "OK"; // Set a flag to check
$msg         = ""; // Message variable

$row = array(
    "msg" => "",
    "status_form" => "OK","status_msg"=>""
);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $valid = true;
    if (empty($name)) {
        $row["status_form"] = "NOTOK";
        $msg .= "Name is required<br>";
        $valid = false;
    }
    if (empty($email)) {
        $row["status_form"] = "NOTOK";
        $msg .= "Email is required<br>";
        
        $valid = false;
    } else {
        
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $row["status_form"] = "NOTOK";
            $msg .= "Invalid email format<br>";
            $valid = false;
        }
    }
    if (empty($phone)) {
        $row["status_form"] = "NOTOK";
        $msg .= "Phone Number is required<br>";
        $valid = false;
    } else {
        
        if (!ctype_digit($phone)) {
            $row["status_form"] = "NOTOK";
            $msg .= "Phone Number should not be letter<br>";
            $valid = false;
        } else if (strlen($phone) < 10 || strlen($phone) > 10) {
            $row["status_form"] = "NOTOK";
            $msg .= "Phone Number should be 10 digit<br>";
            $valid = false;
        }
    }
    if (empty($gender)) {
        $row["status_form"] = "NOTOK";
        $msg .= "Gender Is Required<br>";
        $valid = false;
    }
    if ($country == -1) {
        $row["status_form"] = "NOTOK";
        $msg .= "Country is required<br>";
        $valid = false;
    } else {
        if ($country == 'India') {
            $state = $_POST['indiast'];
        } else if ($country == 'Usa') {
            $state = $_POST['usast'];
        }
    }
    if (empty($address)) {
        $row["status_form"] = "NOTOK";
        $msg .= "Address is required<br>";
        $valid = false;
    }
    if (empty($interest)) {
        $row["status_form"] = "NOTOK";
        $msg .= "Interest is required<br>";
        $valid = false;
    }
    if ($valid) { //if validation pass then insert the data into database
        $status_msg .=insertintodb($name,$email,$phone,$country,$state,$gender,$address,$interest);

    }
}
$row["msg"] = "$msg";
$row["status_msg"]="$status_msg";
$main       = array(
    'data' => array(
        $row
    )
);
echo json_encode($main); //sucess and error message print as a responsetext
?>