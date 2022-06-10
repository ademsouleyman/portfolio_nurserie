let nb1;
let nb2;
let tentatives;
let choix="oui";
while (choix=="oui") {
    nb1 = prompt("Donner un nombre 1");
    tentatives=3;
    let victoire="D";
    while (tentatives>0 && victoire!="V") {
        nb2 = prompt("Donner un nombre 2");
        if (nb1==nb2) {
            alert("Bravo!");
            victoire= "V";
        }
        else if (nb2>nb1) {
            tentatives=tentatives-1;
            alert("C'est -");
        } else {
            tentatives=tentatives-1;
            alert("C'est +");
        }
    }
    if (tentatives==0) {
        alert("Vous avez perdu, le chiffre à deviner était" + nb1);
    }
    choix = prompt("Voulez-vous recommencer?");
}
