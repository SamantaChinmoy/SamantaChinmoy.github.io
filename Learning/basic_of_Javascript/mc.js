function result() {
    var p, r, n, e, x;
    p = Number(document.getElementById("p").value);
    r = Number(document.getElementById("r").value);
    n = Number(document.getElementById("n").value);
    e = Number(document.getElementById("e").value);
    r /= 1200;
    x = Math.pow((1 + r), n);
    if (p === 0) {

        p = Math.round(((e * (x - 1)) / (r * x)));
        document.getElementById("p").value = p;
    }else if (n === 0) {
        n = (Math.log(e / ((e - (p * r))))) / (Math.log(1 + r));
        document.getElementById("n").value = Math.round(Math.abs(n));
    } else if (e === 0) {
        e = (p * r * x) / (x - 1);
        document.getElementById("e").value = Math.round(e);
    }
}
function check()
{
    var r = Number(document.getElementById("r").value);
if(r===0)
{
alert("please give rate of interest");
}
}