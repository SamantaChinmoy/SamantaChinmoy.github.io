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