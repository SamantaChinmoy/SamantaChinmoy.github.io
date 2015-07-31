function takeValue() {
    var name = document.getElementById("name").value;
    var country = document.getElementById("country").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var obj = {},
        arr = [];
    var checkbox = document.getElementsByName("Interest");
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) arr.push(checkbox[i].value);
    }
    obj.name = name;
    obj.country = country;
    obj.email = email;
    obj.address = address;
    if (document.getElementById('M').checked) {
        obj.sex = document.getElementById('M').value;
    } else if (document.getElementById('F').checked) {
        obj.sex = document.getElementById('F').value;
    }
    obj.Interest = arr;
    JSON.stringify(obj);
    console.log(obj);
}

function ajax() {
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

    function stateChanged() {
        if (httpxml.readyState == 4) {
            var myObject = JSON.parse(httpxml.responseText);
            if (myObject.data[0].status_form === "NOTOK") { // status of form if notok
                document.getElementById("errdiv").innerHTML = myObject.data[0].msg;
            } else {
                document.getElementById("errdiv").innerHTML = "Sucess.................";
            }

        }
    }

    function getFormData(myForm) {
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
        for (var i = 0; i < document.myForm.gender.length; i++) {
            if (document.myForm.gender[i].checked) {
                val = document.myForm.gender[i].value;
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
        var checkboxes = document.getElementsByName('Interest[]');
        val = "";
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            if (checkboxes[i].checked) {
                val += checkboxes[i].value + ",";
            }
        }
        val = "interest=" + val;
        myParameters.push(val);
        return myParameters.join("&");
    }



    var url = "validation.php";
    var myForm = document.forms[0];

    var parameters = getFormData(myForm);
    httpxml.onreadystatechange = stateChanged;
    httpxml.open("POST", url, true)
    httpxml.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    httpxml.send(parameters);

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