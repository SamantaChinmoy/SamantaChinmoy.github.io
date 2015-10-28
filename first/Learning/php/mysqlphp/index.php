<html>
<head>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
    </link>
    <script src="script.js">

    </script>
</head>
<body>
<?php
$nameErr = $emailErr=$countryErr=$phErr=$suMsg=$addressErr=$genderErr=$interestErr="";
$name=$email=$country=$ph=$address=$gender=$indiaSt=$usaSt=$state="";
$interest=array();
$su=false;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $su1=0;
     $valid = true;
   if (empty($_POST["name"])) {
     $nameErr = "Name Filed is required";
    $valid = false;
 }
      else {
     $name = $_POST["name"];
 }
 if (empty($_POST["email"])) {
     $emailErr = "Email is required";
   $valid = false;
   } else {
     $email = $_POST["email"];
     
     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $emailErr = "Invalid email format"; 
      $valid = false;
     }
   }
   if($_POST["country"]==-1)
   {
    $countryErr="Country Filed is required";
   $valid = false;
   }else
   {
$country=$_POST["country"];
if($country=='India')
$indiaSt=$_POST['india'];
if($country=='Usa')
$usaSt=$_POST['usa'];
   }
   if(empty($_POST['phone']))
   {
$phErr="Phone Number is required";
$valid = false;
   }
   else
   {
     $ph = $_POST['phone'];
     if(!ctype_digit($ph))
     {
      $phErr="Phone Number should not be letter";
       $valid = false;
     }
     else if(strlen($ph)<10||strlen($ph)>10)
     {
        $phErr="Phone Number should be 10 digit";
       $valid = false;
    }
   }
 if (empty($_POST["address"])) {
     $addressErr = "Address Filed Should Not Empty";
     $valid=false;
   } else {
     $address = $_POST["address"];
   }

   if (empty($_POST["gender"])) {
     $genderErr = "Gender is required";
     $valid=false;
   } else {
     $gender = $_POST["gender"];
   }
   if (empty($_POST["football"])&&empty($_POST["movie"])&&empty($_POST["read"]))
   {
    $interestErr="Pleas Provide One Interest";
    $valid=false;
   }
   else
   {
    if(!empty($_POST["football"]))
       $interest[]=$_POST["football"];
        if(!empty($_POST["movie"]))
       $interest[]=$_POST["movie"];
   if(!empty($_POST["read"]))
       $interest[]=$_POST["read"];
   }

   if($valid)
   {
  $interestStr=implode(',',$interest);
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "subscribe";
if($country=='India')
  $state=$indiaSt;
if($country=='Usa')
  $state=$usaSt;
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$eph=mysqli_query($conn, "SELECT Email from data where Phone='$ph'");
 $num_rows=mysqli_num_rows($eph);
if($num_rows==0)
{
$sql = "INSERT INTO data(Name,Email,Phone,Country,State,Gender,Address,Interest)
VALUES('$name','$email','$ph','$country','$state','$gender','$address','$interestStr')";
}
else
{
$suMsg="Phone Number Exist";
$su1=1;
}
if($su1==0)
{
if (mysqli_query($conn, $sql)) {
    $suMsg="success.....";
} else {
    $suMsg="Not Sucess......";
}
}
mysqli_close($conn);
}

   }

  ?>
    <div onclick="news_tab()" id="news_tab" class="tab border news_tab P-Format">
        <center>News</center>
    </div>
    <div onclick="subscribe_tab()" id="subscribe_tab" class="tab border subscribe_tab subscribe_tab_format">Subscribe</div>
    <div class="container border">
        <div id="text_div" class="container_under_first_div border">
            <span class="LargeFont">Welcome</span>
            <p class="MedimumFont">Simple and effective Angularjs binding for FusionCharts javascript Charting Libary.Simple and effective Angularjs binding for FusionCharts javascript Charting Libary
            </p>
            <p class="P-Format">Angularjs binding for FusionCharts javascript Charting Libary</p>
            <div class="Learn_more_button border">
                <center>LEARN MORE</center>
            </div>
        </div>
        <div id="image_div" class="container_under_first_div second_div border">
            <span class="LargeFont">Leatest News</span>
            <img class="img" src="image.jpg" width="90%" height="80%"></img>
        </div>
        <div id="formdiv" class="form_div border">
            <form name="sub_form" action="" method="post" id="sub_form" >
                <span class="LargeFont">&nbsp;Subscription Form</span>
                <table cellspacing="">
                    <tr>
                        <td>
                            <span class="form_lebel_font">Name</span>
                            <input type="text" class="input" name="name" id="name" value=
                            "<?php 
                            echo $name;
                            ?>"
                            ></input>
                        </td>
                        <td>
                            <span class="form_lebel_font left_lebel">Country</span>
                            <select id="country" class="input" onclick="state();" name="country">
                                <option <?php if (isset($country) && $country==-1) echo "selected";?>value="-1" ></option>
                                <option <?php if (isset($country) && $country=='India') {
                                    echo "selected";}
                                    ?> value="India" >India
                                </option>
                                <option <?php if (isset($country) && $country=="Usa") echo "selected";?> value="Usa" >USA</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="form_lebel_font">Email</span>
                            <input type="text" class="input" name="email" id="email" value=
                            "<?php 
                            echo $email;
                            ?>"></input>
                        </td>
                        <td>
                       
                            <span id="india_label_state"class="form_lebel_font ">State&nbsp;&nbsp;&nbsp;&nbsp;</span>
                             <select id="india" class="input display" name="india">
                  
                                <option  <?php if (isset($indiaSt) && $indiaSt=='West Beengal') echo "selected";?> value="West Bengal">West Bengal</option>
                                <option <?php if (isset($indiaSt) && $indiaSt=='Udar Pradesh') echo "selected";?> value="Udar Pradesh">Udar Pradesh</option>
                            </select>
                             <select id="nostate"  class="input">
                            </select>
                             <select id="usa" class="input display" name="usa">
                                <option  <?php if (isset($usaSt) && $usaSt=='Cal') echo "selected";?> value="Cal">California</option>
                                <option  <?php if (isset($usaSt) && $usaSt=='Tex') echo "selected";?> value="Tex">Texas</option>
                            </select>
                             <?php
                        if($country=='India'||$country=='Usa'){
                        echo "<script type='text/javascript'>state();</script>";}
                        ?>
                        </td>
                    </tr>
                    <tr>
                       <td>
                            <span class="form_lebel_font label-phone">Phone</span>
                            <input type="text" class="input phone" name="phone" id="phone" value=
                            "<?php 
                            echo $ph;
                            ?>"></input>
                        </td>
                        <td>
                            <span class="form_lebel_font">Address</span>
                            <textarea class="input textarea" name= "address" id="address"><?php echo $address;?></textarea>
                         </td>   
                      </tr>  
                    <tr>
                        <td><span class="form_lebel_font radio">Sex&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <input type="radio" id="M" name="gender" <?php if (isset($gender) && $gender=="male") echo 'checked="checked"';?>value="male"></input><span class="form_lebel_font">Male</span>
                            <input type="radio" name="gender" id="F" <?php if (isset($gender) && $gender=="female") echo 'checked="checked"';?>value="female"></input><span class="form_lebel_font">Female</span>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td><span class="form_lebel_font">Interest</span>
                            <input type="checkbox"  name="football" <?php if(isset($_POST['football'])) echo "checked='checked'"; ?>value="Football"></input>
                            <span class="form_lebel_font" >Football</span>
                            <input type="checkbox" name="movie" <?php if(isset($_POST['movie'])) echo "checked='checked'"; ?>value="Movie">
                            <span class="form_lebel_font">Movie</span>
                            <input type="checkbox" name="read" <?php if(isset($_POST['read'])) echo "checked='checked'"; ?> value="Reading"></input>
                            <span class="form_lebel_font">Reading</span>
                        </td>
                    </tr>
                </table>
                <div class="subscribe_button border">
                    <input type="submit"  name="Submit1" id="subscribe" class="action_btn-style" value="subscribe"><?php
                    if (isset($_POST['Submit1'])) {
    echo "<script type='text/javascript'>subscribe_tab();</script>";
}
    ?></input>
                </div>
                <div  class="reset_button border">
                    <input type="reset" onclick="clear()" name="Reset" id="subscribe" class="action_btn-style" value="reset">
                    </input>
                </div>
                <div>
                <a href="value.php">Admin</a>
                </div>
            </form>
        </div>
    </div>
    <div class="error" id="errordiv">
   <?php
   
    echo $suMsg;
    echo $nameErr;
    ?>
    <br>
    <?php
    echo $emailErr;
    ?>
    <br>
    <?php
    echo $countryErr;
    ?>
    <br>
    <?php
    echo $phErr;
    ?>
    <br>
    <?php
    echo $addressErr;
    ?>
    <br>
    <?php
    echo $genderErr;
    ?>
    <br>
    <?php
    echo $interestErr;
    ?>
    </div>
</body>
</html>