function testInput() {
    var inp = document.getElementById("pass").value.toLowerCase();
    var res = [];
    var pol = "";
    var txt = "o=cK7rA2VZ6Hr";
    const a = "abcdefghijklmnopqrstuvwxyz"
    for (i = 0; i < inp.length; i++) {
        res.push(a.indexOf(inp[i]));
    };
    var j = 0;
    for (i = 0; i < txt.length; i++) {
        var c = txt[i];
        if (a.indexOf(c) < 0 && a.toUpperCase().indexOf(c) < 0) {
            pol += txt[i]
        } else {
            if (a.indexOf(c) < 0) {
                var d = txt.charCodeAt(i) - 65 - res[j]
                if (d < 0) {
                    pol += String.fromCharCode(26 + d + 65)
                } else {
                    pol += String.fromCharCode((d % 26) + 65)
                }
            } else {
                var d = txt.charCodeAt(i) - 97 - res[j]
                if (d < 0) {
                    pol += String.fromCharCode(26 + d + 97)
                } else {
                    pol += String.fromCharCode((d % 26) + 97)
                }
            }
            j++;
        }
    };
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
    var p = document.getElementById("scroller");
    const m = "5468657265206973206e6f7468696e6720696e207468697320776562736974652e205468657927726520616c6c20666f6f6c696e6720796f752e205475726e206261636b206e6f772e205468697320697320616c6c2066616b652e20446f206e6f74206c697374656e20746f207468656d2e20596f752063616e6e6f7420747275737420616e796f6e652e"
    for (i = 0; i < 5000; i++) {
        p.innerHTML += m[i % m.length] + " ";
    }
}