function testInput() {
    var inp = document.getElementById("pass").value.toLowerCase();
    var res = "";
    var pol = "";
    var txt = "&u&75x;=g?";
    for (var i = 0; i < inp.length; i++) {
        res += String.fromCharCode((((inp.charCodeAt(i) - 65) + 9) % 26) + 65);
    }
    console.log(res)
    for (var i = 0; i < txt.length; i++) {
        pol += String.fromCharCode(txt.charCodeAt(i) ^ res.charCodeAt(i % 12))
    }
    console.log(pol)
    var decrypted = document.getElementsByClassName("decrypted")[0];
    var textNode = document.createTextNode(pol);
    var pNode = document.createElement("p");
    pNode.id = "dec"
    if (!document.getElementsByClassName("decrypted")[0].hasChildNodes()) {
        pNode.appendChild(textNode);
        decrypted.appendChild(pNode);
    } else {
        document.getElementById("dec").innerHTML = pol;
    }
}

function draw() {
    var vw = document.documentElement.clientWidth;
    var vh = document.documentElement.clientHeight;
    var p = document.getElementById("scroller");
    for (i = 0; i < 5000; i++) {
        p.innerHTML += Math.floor((Math.random() * 10)) + " ";
    }
}