<?php
include 'dbupdate.php';
?>
<?Php
$id=$_POST['id'];
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
$msg= ""; // Message variable

$arr = array(
    "msg" => "",
    "status_form" => "OK","status_msg"=>""
);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $valid = true;
    if (empty($name)) {
        $arr["status_form"] = "NOTOK";
        $msg .= "Name is required<br>";
        $valid = false;
    }
    if (empty($email)) {
        $arr["status_form"] = "NOTOK";
        $msg .= "Email is required<br>";
        
        $valid = false;
    } else {
        
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $arr["status_form"] = "NOTOK";
            $msg .= "Invalid email format<br>";
            $valid = false;
        }
    }
    if (empty($phone)) {
        $arr["status_form"] = "NOTOK";
        $msg .= "Phone Number is required<br>";
        $valid = false;
    } else {
        
        if (!ctype_digit($phone)) {
            $arr["status_form"] = "NOTOK";
            $msg .= "Phone Number should not be letter<br>";
            $valid = false;
        } else if (strlen($phone) < 10 || strlen($phone) > 10) {
            $arr["status_form"] = "NOTOK";
            $msg .= "Phone Number should be 10 digit<br>";
            $valid = false;
        }
    }
    if (empty($gender)) {
        $arr["status_form"] = "NOTOK";
        $msg .= "Gender Is Required<br>";
        $valid = false;
    }
    if ($country == -1) {
        $arr["status_form"] = "NOTOK";
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
        $arr["status_form"] = "NOTOK";
        $msg .= "Address is required<br>";
        $valid = false;
    }
    if (empty($interest)) {
        $arr["status_form"] = "NOTOK";
        $msg .= "Interest is required<br>";
        $valid = false;
    }
    if ($valid) {
        $status_msg .=updateintodb($name,$email,$phone,$country,$state,$gender,$address,$interest,$id);

    }
}
$arr["msg"] = "$msg";
$arr["status_msg"]="$status_msg";
$main       = array(
    'data' => array(
        $arr
    )
);
echo json_encode($main);
?>