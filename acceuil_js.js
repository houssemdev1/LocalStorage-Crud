

function afficher() {
    var cle2 = "";
    var val;
    var i; var c; var pos3;
    var j; var k; var chainea = ""; var chaineb = ""; var chainec = ""; var pos; var pos2;
    var paires = "<tr class=\"first\"><td><b>Email/ID</b></td><td><b>Prenom</b></td><td><b>Nom</b></td><td><b>Date De Naissance</b></td></tr> \n";
    var i = 0;
    for (i = 0; i <= localStorage.length - 1; i++) {
        cle2 = localStorage.key(i);
        val = localStorage.getItem(cle2);
        pos = val.indexOf(",");
        pos2 = val.indexOf(";");
        pos3 = val.indexOf("-");
        chainea = "";
        for (j = 0; j < pos; j++) { chainea = chainea + val[j]; }
        chaineb = "";
        for (k = pos + 1; k < pos2; k++) { chaineb = chaineb + val[k]; }
        chainec = ""
        for (c = pos2 + 1; c < pos3; c++) { chainec = chainec + val[c]; }
        
        paires += "<tr><td>" + cle2 + "</td>\n<td>" +chainea + "</td>\n<td>" + chaineb  + "</td>\n<td>" + chainec + "</td> </tr>\n";
    }
    document.getElementById('paires').innerHTML = paires;
}

function supprimer_tout() {
    localStorage.clear();
    afficher();
}

function supprimer_utilisateur() {
    var email = document.getElementById("email").value;
    localStorage.removeItem(email);

    document.getElementById("email").value = "";
    afficher();
}

function save_storage() {
    var val;
    var objetform = {
        objemail: document.getElementById("email").value,
        objnom: document.getElementById("n").value,
        objpren: document.getElementById("pren").value,
       
        objmotpasse: document.getElementById("tt").value,
        objdatenais: document.getElementById("datenais").value
    };
    val = objetform;
    localStorage.setItem(val.objemail, val.objpren + "," + val.objnom + ";" + val.objdatenais + "-" + val.objmotpasse);
}


function modifier() {s
    var cle2 = "";
    var val;
    var i;
    var user = document.getElementById("email").value;
    var i = 0;
    for (i = 0; i <= localStorage.length - 1; i++) {
        if (user == localStorage.key(i)) {
            save_storage();
        }
    }
    afficher();
}

