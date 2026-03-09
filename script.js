// déclaration des tableau de mots et de phrases à proposer à l'utilisateur
const listeMots = ["Cachalot", "Pétunia", "Serviette"];
const listePhrase = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"];

// déclaration des variables 
let score = 0;
let motUtilisateur;
let liste;

// demande d'interaction à l'utilisateur pour le choix des liste sur les quelle il souhaite s'exercer
let choix = prompt("choisissez la liste de mots ou de phrases: mots pour les mots et phrases pour les phrases");
while (choix !== "mots" && choix !== "phrases") { 
    choix = prompt("choisissez la liste de mots ou de phrases: mots pour une liste de mots et phrases pour une liste de phrases");
}

// choix des listes en fonction de l'entrer utilisateur
if (choix === "mots"){
    liste = listeMots;
} else if (choix === "phrases"){ qdsfqs
    liste = listePhrase;
}

//étallage des expression à l'utilisateur et calcul du score
for (let i = 0; i < liste.length; i++) {
    motUtilisateur = prompt("veillez saisir l'expression : " + liste[i])
    if (motUtilisateur === liste[i]) {
        score++;
    }
}

// affichage du score à l'utilisateur pour le moment dans la console
console.log(`Votre score est de ${score} sur ${liste.length}`);