function DateDiff(d1, d2) {

    this.inDays = function() {

        return Math.abs(parseInt((d1.getTime() - d2.getTime()) / (24 * 3600 * 1000)));
    };

    this.inWeeks = function() {


        return Math.abs(parseInt((d1.getTime() - d2.getTime()) / (24 * 3600 * 1000 * 7)));
    };

    this.inMonths = function() {

        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return Math.abs((d2M + 12 * d2Y) - (d1M + 12 * d1Y));
    };

    this.inYears = function() {
        return Math.abs(d2.getFullYear() - d1.getFullYear());
    };
}

function TimeDiff() {
    this.hour = function(h1, h2) {
        return Math.abs(h1 - h2);
    }
    this.minute = function(m1, m2) {
        return Math.abs(m1 - m2);
    }
    this.second = function(s1, s2) {
        return Math.abs(s1 - s2);
    }
}

function result(option) {
    if (option == "date") {
        document.getElementById("rdate").innerHTML = show_date();
    } else if (option == "time") {
        document.getElementById("rtime").innerHTML = show_time();
    } else if (option == "interval") {
        document.getElementById("itime").innerHTML = interval();
    }
}

function show_date() {

    var dString = document.getElementById("syear").value + "-" + document.getElementById("smonth").value + "-" + document.getElementById("sday").value;

    var d2String = document.getElementById('eyear').value + "-" + document.getElementById("emonth").value + "-" + document.getElementById("eday").value;

    var d1 = new Date(dString);
    var d2 = new Date(d2String);
    var D = new DateDiff(d1, d2);
    return D.inDays() + 'days, ' +
        D.inWeeks() + 'weeks, ' + D.inMonths() + 'months, ' + D.inYears() + 'years. '

}

function show_time() {

    var time = new TimeDiff();
    return time.hour(document.getElementById("shour").value, document.getElementById("ehour").value) + 'houres, ' +
        time.hour(document.getElementById("sminute").value, document.getElementById("eminute").value) + 'minutes,' + time.hour(document.getElementById("ssecond").value, document.getElementById("esecond").value) + 'seconds.'

}

function interval() {
    debugger;
    var ptime = document.getElementById("tyear").value + "-" + document.getElementById("tmonth").value + "-" + document.getElementById("tday").value + " " + document.getElementById("thour").value + ":" + document.getElementById("tminute").value + ":" + document.getElementById("tsecond").value;
    var d = new Date(ptime);
    var itime = d.getTime() + document.getElementById("ihour").value * 3600000;
    var d1 = new Date(parseInt(itime));
    return "time is:" + d1.toString();
}