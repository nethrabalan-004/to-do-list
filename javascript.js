var a=document.getElementById("result");
var b=document.getElementById("get");
var n=1;

function add(){
    var x=document.createElement("p");
    var y=document.createElement("hr");
   

    x.textContent=b.value;
    a.append(n+"-"+x.textContent);
    n++;
    a.append(y);
}
