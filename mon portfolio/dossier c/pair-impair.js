let nb;
let choix="oui";
while (choix=="oui") {
    nb=prompt("Donner un nombre");
    if (nb%2==1) {
        console.log("Le nombre est impair");
    }
    else{
        console.log("Le nombre est pair");
    }
    choix=prompt("Voulez-vous recommencer?")
}