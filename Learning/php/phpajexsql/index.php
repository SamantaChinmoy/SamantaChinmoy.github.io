<!doctype html public "-//w3c//dtd html 3.2//en">
<html>
<head>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
    </link>
    <script src="script.js">
    </script>
</head>
<body>

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
            <form name="myForm" action="" method="post" id="sub_form" >
                <span class="LargeFont">&nbsp;Subscription Form</span>
                <table cellspacing="">
                    <tr>
                        <td>
                            <span class="form_lebel_font">Name</span>
                            <input type="text" class="input" name="fname" id="name" value=
                            
                            ></input>
                        </td>
                        <td>
                            <span class="form_lebel_font left_lebel">Country</span>
                            <select id="country" class="input" onclick="state();" name="country">
                                <option  value="-1" ></option>
                                <option 
                                     value="India" >India
                                </option>
                                <option value="Usa" >USA</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="form_lebel_font">Email</span>
                            <input type="text" class="input" name="email" id="email" 
                            </input>
                        </td>
                        <td>
                       
                            <span id="india_label_state"class="form_lebel_font ">State&nbsp;&nbsp;&nbsp;&nbsp;</span>
                             <select id="india" class="input display" name="india">

                               <option   value="West Bengal" >West Bengal</option>
                                <option  value="Udar Pradesh">Udar Pradesh</option>
                            </select>
                             <select id="nostate"  class="input">
                            </select>
                             <select id="usa" class="input display" name="usa">
                                <option  value="California">California</option>
                                <option  value="Texas">Texas</option>
                            </select>
                            
                        </td>
                    </tr>
                    <tr>
                       <td>
                            <span class="form_lebel_font label-phone">Phone</span>
                            <input type="text" class="input phone" name="phone" id="phone" 
                            </input>
                        </td>
                        <td>
                            <span class="form_lebel_font">Address</span>
                            <textarea class="input textarea" name= "address" id="address"></textarea>
                         </td>   
                      </tr>  
                    <tr>
                        <td><span class="form_lebel_font radio">Sex&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <input type="radio" id="M" name="gender" value="male"></input><span class="form_lebel_font">Male</span>
                            <input type="radio" name="gender" id="F" value="female"></input><span class="form_lebel_font">Female</span>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td><span class="form_lebel_font">Interest</span>
                            <input type="checkbox"  name="interest[]" value="Football"></input>
                            <span class="form_lebel_font" >Football</span>
                            <input type="checkbox" name="interest[]" value="Movie">
                            <span class="form_lebel_font">Movie</span>
                            <input type="checkbox" name="interest[]" value="Reading"></input>
                            <span class="form_lebel_font">Reading</span>
                        </td>
                    </tr>
                </table>
                

                <div class="subscribe_button border">
                    <input type="button" onclick='validation();' name="Submit1" id="subscribe" class="action_btn-style" value="subscribe">
    </input>
                </div>
                <div  class="reset_button border">
                    <input type="reset" name="Reset" id="subscribe" class="action_btn-style" value="reset">
                    </input>
                </div>
            </form>
        </div>
        <div>
        <a href="show_information.php">Admin</a>
        </div>
    </div>
    
    <div class="error" id="errdiv">
    </div>
</body>
</html>