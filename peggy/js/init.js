var x = 100;
var start=[false];
var eng =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var string;
var k=0;
window.onkeydown = function (evt) {
    x = Number(evt.keyCode);
    if(start==false) return;
    if (x >= 97 && x <= 122)
    {
        x = x - 97;
        check ();
    }
    else if (x >= 65 && x <= 90)
    {
        x = x - 65;
        check ();
    }
    else
    {
        x = 100;
    }
}

function clear (){
    $("#Main>P").remove();
}

function check (){
    if(string.length==1 && string.substring(k,k+1)===eng[x])
    {
        clear ();
        string=[];
        alert('すごいね');
        start=[false];
        $("input[name=start]").show();
        $("input[name=change]").hide();
    }
    else if (x >= 0 && x <= 26 && string.substring(k,k+1)==eng[x])
    {
        string=string.substring(1,string.length);
    }
    else
    {
        alert('バカ～');
    }
    clear ();
    show();
}

function show (){
    var para = document.createElement("P"); 
    var t = document.createTextNode(string);      
    para.appendChild(t);                                          
    document.getElementById("Main").appendChild(para);
}

function Init () {
    clear (); 
    start=[true];
    string="";
    var N = Math.floor(Math.random()*25+5);
    for (var i = 0; i < N; i++){
        var num = Math.floor(Math.random()*25);
        string = string + eng[num];
    }
    show ();
    $("input[name=start]").hide();
    $("input[name=change]").show();
}

function change () {
    alert('ダッセー');
    Init();
}
