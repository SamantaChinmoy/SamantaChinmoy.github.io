function takeValue() {
     var name = document.getElementById("name").value;
     var country = document.getElementById("country").value;
     var email = document.getElementById("email").value;
     var address = document.getElementById("address").value;
     var obj = {},
         arr = [];
     var checkbox = document.getElementsByName("Interest");
     for (var i = 0; i < checkbox.length; i++) {
         if (checkbox[i].checked == true) arr.push(checkbox[i].value);
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

 function myfunc() {
     var n1 = document.getElementById("phone").value;
     var xa1 = String(n1);
     var reg = /^[987][0-9]{9}$/;
     var isN1 = reg.test(xa1);
     if (isN1 == true) {
         document.getElementById("phone").style.backgroundColor = "green";
     }
     if (isN1 == false) {
         document.getElementById("phone").style.backgroundColor = "red";
     }
 }

 function myFunction() {
     var n = document.getElementById("phone").value;
     var xa = String(n);
     var len = xa.length;
     var reg = /^[987]/;
     var reg1 = /^[0-9]([0-9])*$/;
     var reg2 = /[0-9]\1{5}/;
     var isN2 = reg1.test(xa);
     var isN = reg.test(xa);
     if (isN == true && isN2 == true && len <= 10) {
         document.getElementById("phone").style.backgroundColor = "green";
     } else {
         document.getElementById("phone").style.backgroundColor = "red";
     }
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

 function countryfirst() {
     alert("at first select country");
 }

 function show() {
     alert("1");
     document.getElementById("dialog").style.display = "inline";
 }