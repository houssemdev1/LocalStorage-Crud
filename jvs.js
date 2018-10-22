
 



function test_nom() {
    var vnom = document.getElementById("n").value;

    var j;
    for (j = 0; j < 10; j++) {
        if (vnom[j] == " ") {
        document.getElementById("prnom").innerHTML="Le nom ne doit pas contenir des espaces!";
            break;
        }


    }
}


function test_prenom() {
    var j;
    var esp = " ";
    var vnom = document.getElementById("pren").value;


    for (j = 0; j < 10; j++) {
        if (vnom[j] == esp) {
            document.getElementById("prprenom").innerHTML="Le prenom ne doit pas contenir des espaces!";
            break;
        }
    }
}

        function validation()
         {
            var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

            if (!(expressionReguliere.test(document.getElementById("email").value)))
            document.getElementById("premail").innerHTML=" L'adresse mail n'est pas valide!";

        }

        function tester() {

            var i;
            var tcm;
            var tcmj;
            var tn;
            var tcs;
            var chmin = "abcdefghijklmnopqrstuvwxyz";
            var chmaj = chmin.toUpperCase();
            var chsp = ".é&èçà$ù";
            var chnum = "123567890";

            var ch = document.getElementById("tt").value;
            for (i = 0; i < 10; i++) {
                tcm = chmin.indexOf(ch[i]);
                if (tcm != -1)
                document.getElementById("prmotpasse").innerHTML= "mot de passe faible!";

            }

            for (i = 0; i < 10; i++) {
                tcmj = chmaj.indexOf(ch[i]);
                if (tcmj != -1)

                document.getElementById("prmotpasse").innerHTML="mot de passe moyenne!";
            }



            for (i = 0; i < 10; i++) {
                tn = chnum.indexOf(ch[i]);
                if (tn != -1)
                document.getElementById("prmotpasse").innerHTML="mot de passe  forte!";

            }

            for (i = 0; i < 10; i++) {
                tcs = chsp.indexOf(ch[i]);
                if (tcs != -1)
                document.getElementById("prmotpasse").innerHTML="mot de passe tres forte";

            }
        

        }
    
        
      








        




