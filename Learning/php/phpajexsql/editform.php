<html>
<head>
<?php
  include 'editvalue.php';
  ?>
    <link rel="stylesheet" type="text/css" href="ms.css">
    </link>
    <script src="script.js">
    </script>
</head>
<body>
  <?php
  $id1='';
$id1= $_GET["id"];
$row=editvalue($id1);
 $inerestArr=array();
        $inerestArr=explode(",",$row['Interest']);
        ?>
     <div class="container border">
        <div id="formdiv" class="form_div border">
            <form name="sub_form" action="" method="post" id="sub_form" >
                <span class="LargeFont">&nbsp;Update Form</span>
                <table cellspacing="">
                    <tr>
                        <td>
                            <span class="form_lebel_font">Name</span>
                            <input type="text" class="input" name="fname" id="name" value="<? echo "$row[Name]"?>"
                            ></input>
                        </td>
                        <td>
                            <span class="form_lebel_font left_lebel">Country</span>
                            <select id="country" class="input" onclick="state();" name="country">
                                
                                <option <?php if ($row['Country']=='India') {
                                    echo "selected";}
                                    ?> value="India" >India
                                </option>
                                <option <?php if ($row['Country']=='Usa') echo "selected";?> value="Usa" >USA</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="form_lebel_font">Email</span>
                            <input type="text" class="input" name="email" id="email" value="<? echo "$row[Email]"?>" </input>
                        </td>
                        <td>
                       
                            <span id="india_label_state"class="form_lebel_font ">State&nbsp;&nbsp;&nbsp;&nbsp;</span>
                             <select id="india" class="input display" name="india">
                  
                                <option  <?php  if ($row['State']=='West Bengal') echo "selected";?> value="West Bengal">West Bengal</option>
                                <option <?php if ($row['State']=='Udar Pradesh') echo "selected";?> value="Udar Pradesh">Udar Pradesh</option>
                            </select>
                             <select id="nostate"  class="input">
                            </select>
                             <select id="usa" class="input display" name="usa">
                                <option  <?php if ($row['State']=='Cal')  echo "selected";?> value="Cal">California</option>
                                <option  <?php if ($row['State']=='Tex')  echo "selected";?> value="Tex">Texas</option>
                            </select>
                             <?php
                        if($row['Country']=='India'||$row['Country']=='Usa'){
                        echo "<script type='text/javascript'>state();</script>";}
                        ?>
                        </td>
                    </tr>
                    <tr>
                       <td>
                            <span class="form_lebel_font label-phone">Phone</span>
                            <input type="text" class="input phone" name="phone" id="phone" value="<? echo "$row[Phone]"?>"</input>
                        </td>
                        <td>
                            <span class="form_lebel_font">Address</span>
                            <textarea class="input textarea" name= "address" id="address"><?php echo $row['Address'];?></textarea>
                         </td>   
                      </tr>  
                    <tr>
                        <td><span class="form_lebel_font radio">Sex&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <input type="radio" id="M" name="gender" <?php if ($row['Gender']=='male') echo 'checked="checked"';?>value="male"></input><span class="form_lebel_font">Male</span>
                            <input type="radio" name="gender" id="F" <?php if ($row['Gender']=='female')echo 'checked="checked"';?>value="female"></input><span class="form_lebel_font">Female</span>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td><span class="form_lebel_font">Interest</span>
                            <input type="checkbox"  name="interest[]" <?php if(in_array("Football",$inerestArr)) echo "checked='checked'"; ?>value="Football"></input>
                            <span class="form_lebel_font" >Football</span>
                            <input type="checkbox" name="interest[]" <?php if(in_array("Movie",$inerestArr)) echo "checked='checked'"; ?>value="Movie">
                            <span class="form_lebel_font">Movie</span>
                            <input type="checkbox" name="interest[]" <?php if(in_array("Reading",$inerestArr)) echo "checked='checked'"; ?> value="Reading"></input>
                            <span class="form_lebel_font">Reading</span>
                        </td>
                    </tr>
                </table>
                <div class="subscribe_button border">
                   <?php
                    echo "<input type='button' id='{$id1}'  class='action_btn-style' onclick='update(this.id);'  value='update'>
    </input>"?>
                </div>
                <div>
                <a href="show_information.php">Admin</a>
                <a href="index.php">Home</a>
                </div>
            </form>
        </div>
    </div>
    <div class="error" id="errdiv">
</body>
</html>