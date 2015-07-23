 function genrate_number_sum() {
        var operator = "+",
            first, second, count;
        first = Math.floor(Math.random() * 90 + 10);
        second = Math.floor(Math.random() * 90 + 10);
        var c = first + second;
        count = c;
        return '<table class="problem">' +
            '<tr><td></td><td>' + first + '</td></tr>' +
            '<tr><td>' + operator + '</td><td>' + second + '</td></tr>' + '<tr><td></td><td><input  maxlength=' + count.toString().length + ' id="re"  onkeydown="cursor(this)" onkeyup="check_result(' + c + ',this.value,this)" class="input" type="textbox" value=""></td></tr>' +
            '</table>';
    }

    function genrate_number_sub() {
        var operator = "-",
            a, b, c, first, second, r, count;
        a = Math.floor(Math.random() * 90 + 10);
        b = Math.floor(Math.random() * 90 + 10);
        if (b > a) {
            first = b;
            second = a;
        } else {
            first = a;
            second = b;
        }
        c = first - second;
        count = c;

        c = first - second;
        return '<table class="problem">' +
            '<tr><td></td><td>' + first + '</td></tr>' +
            '<tr><td>' + operator + '</td><td>' + second + '</td></tr>' + '<tr><td></td><td><input  id="re" maxlength=' + count.toString().length + ' onkeydown="cursor(this)" onkeyup="check_result(' + c + ',this.value,this)" class="input" type="textbox" value=""></td></tr>' +
            '</table>';
    }

    function create(id) {
        for (var i = 0; i < 3; i++) {


            for (var j = 0; j < 7; j++) {
                if(id=="add")
          document.getElementById("cell" + i + "" + j).innerHTML = genrate_number_sum();
      else if(id="sub")
         document.getElementById("cell" + i + "" + j).innerHTML = genrate_number_sub();
            }

        }
    }

    

    function check_result(result, value, id) {
        if (result == value)
            id.style.background = "green";
        else
            id.style.background = "red";

    }

    function cursor(e) {
        if (e.setSelectionRange) {
            e.setSelectionRange(0, 0);
        }

    }