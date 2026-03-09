const listeMots = ["Cachalot", "Pétunia", "Serviette"];
const listePhrase = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"];

let score = 0;
let motUtilisateur;
let choix = prompt("choisissez la liste de mots ou de phrases: mots pour les mots et phrases pour les phrases");
let liste;


while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("choisissez la liste de mots ou de phrases: mots pour une liste de mots et phrases pour une liste de phrases");
}

if (choix === "mots"){
    liste = listeMots;
} else if (choix === "phrases"){
    liste = listePhrase;
}

for (let i = 0; i < liste.length; i++) {
    motUtilisateur = prompt("veillez saisir l'expression : " + liste[i])
    if (motUtilisateur === liste[i]) {
        score++;
    }
}


console.log(`Votre score est de ${score} sur ${liste.length}`);