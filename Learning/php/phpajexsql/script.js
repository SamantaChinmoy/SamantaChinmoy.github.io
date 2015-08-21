
/* jshint strict: false */
/* jshint quotmark: false*/
/*jshint unused:false*/
// jshint undef:false
/*jshint -W009 */ 
/* jshint ignore:start */
function ajax(url,parameters,readyfun) {
    var httpxml;

    try {
        httpxml = new XMLHttpRequest();
    } catch (e) {
        try {
            httpxml = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                httpxml = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("Your browser does not support AJAX!");
                return false;
            }
        }
    }
     httpxml.open("POST", url, true)
    httpxml.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    httpxml.send(parameters);
httpxml.onreadystatechange =function aa()
{
readyfun(httpxml);
};
   
}
/* jshint ignore:end */
function validation() //validation
{  
var myForm = document.forms[0];
var parameters = getFormData(myForm);
ajax('validation.php',parameters, function stateChanged(hx) {
        if (hx.readyState == 4) {
            var myObject = JSON.parse(hx.responseText);
            
            if (myObject.data[0].status_form === "NOTOK") {/* falls through */ // status of form if notok
                document.getElementById("errdiv").innerHTML = myObject.data[0].msg;
            } else {
                
                document.getElementById("errdiv").innerHTML = myObject.data[0].status_msg;
            }

        }

    });
}
function del(id)//delete 
{
    var param="id="+id;
ajax('delete.php',param,function del(hx){
    document.body.innerHTML=hx.responseText;});
} 
function update(id)//update
{
var myForm = document.forms[0];
var parameters = getFormData(myForm,id);
ajax('update.php',parameters, function statechange(hx) {
        if (hx.readyState == 4) {
            var myObject = JSON.parse(hx.responseText);
            
            if (myObject.data[0].status_form === "NOTOK") { // status of form if notok
                document.getElementById("errdiv").innerHTML = myObject.data[0].msg;
            } else {
                
                document.getElementById("errdiv").innerHTML = myObject.data[0].status_msg;
            }

        }

    });
} 
   function getFormData(myForm,id) { //taking form data

    
        var myParameters = new Array();
        var val = myForm.fname.value;
        val = "fname=" + val;
        myParameters.push(val);
        val = myForm.email.value;
        val = "email=" + val;
        myParameters.push(val);
        val = myForm.phone.value;
        val = "phone=" + val;
        myParameters.push(val);
        val = "";
        for (var i = 0; i < myForm.gender.length; i++) {
            if (myForm.gender[i].checked) {
                val = myForm.gender[i].value;
            }
        }
        val = "gender=" + val;
        myParameters.push(val);
        val = myForm.country.options[myForm.country.options.selectedIndex].value;
        val = "country=" + val;
        myParameters.push(val);
        val = myForm.india.options[myForm.india.options.selectedIndex].value;
        val = "indiast=" + val;
        myParameters.push(val);
        val = myForm.usa.options[myForm.usa.options.selectedIndex].value;
        val = "usast=" + val;
        myParameters.push(val);
        val = myForm.address.value;
        val = "address=" + val;
        myParameters.push(val);
        var checkboxes = document.getElementsByName('interest[]');
        val = "";
        for (i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                val += checkboxes[i].value + ",";
            }
        }
        val = "interest=" + val;
        myParameters.push(val);
        val="id="+id;
        myParameters.push(val);
        return myParameters.join("&");
    }  



function subscribe_tab() {

    document.getElementById("news_tab").style.color = "black";
    document.getElementById("subscribe_tab").style.color = "#1b6bce";
    document.getElementById("subscribe_tab").style.background = "#E5EFFF";
    document.getElementById("news_tab").style.background = "none";
    document.getElementById("text_div").style.display = "none";
    document.getElementById("image_div").style.display = "none";
    document.getElementById("formdiv").style.display = "block";
}

function news_tab() {

    document.getElementById("news_tab").style.color = "#1b6bce";
    document.getElementById("subscribe_tab").style.color = "black";
    document.getElementById("news_tab").style.background = "#E5EFFF";
    document.getElementById("subscribe_tab").style.background = "none";
    document.getElementById("text_div").style.display = "block";
    document.getElementById("image_div").style.display = "block";
    document.getElementById("formdiv").style.display = "none";
}


function state() {
    var selectBox = document.getElementById("country");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    if (selectedValue == "India") {

        document.getElementById("nostate").style.display = "none";
        document.getElementById("india").style.display = "inline";
        document.getElementById("usa").style.display = "none";
    } else if (selectedValue == "Usa") {
        document.getElementById("nostate").style.display = "none";
        document.getElementById("india").style.display = "none";
        //document.getElementById("india_label_state").style.display="none";
        document.getElementById("usa").style.display = "inline";
        //document.getElementById("usa_label_state").style.display="inline";
    } else if (selectedValue == -1) {
        document.getElementById("nostate").style.display = "inline";
        document.getElementById("india").style.display = "none";
        document.getElementById("usa").style.display = "none";
    }
}