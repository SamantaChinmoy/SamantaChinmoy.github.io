<?Php

$name     = $_POST['fname'];
$email    = $_POST['email'];
$phone    = $_POST['phone'];
$gender   = $_POST['gender'];
$country  = $_POST['country'];
$address  = $_POST['address'];
$interest = $_POST['interest'];
$state    = "";

$status_form = "OK"; // Set a flag to check
$msg         = ""; // Message variable

$row = array(
    "msg" => "",
    "status_form" => "OK"
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
    if ($valid) {
        $myf = @fopen("details.csv", "a");
        fwrite($myf, $name . "\n");
        fwrite($myf, $email . "\n");
        fwrite($myf, $country . "\n");
        if ($country == 'India' || $country == 'Usa')
            fwrite($myf, $state . "\n");
        fwrite($myf, $phone . "\n");
        fwrite($myf, $gender . "\n");
        fwrite($myf, $address . "\n");
        fwrite($myf, $interest . "\n");
        fclose($myf);
        
    }
}
$row["msg"] = "$msg";
$main       = array(
    'data' => array(
        $row
    )
);
echo json_encode($main);
?>