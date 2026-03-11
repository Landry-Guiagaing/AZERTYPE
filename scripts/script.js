// déclaration des variables score, motUtilisateur qui vas contenir le mot sasie par l'utiliateur et liste
    let choix;
    let score = 0;
    let listePropositions;

function lancerBoucleDeJeu(choix){
    let motUtilisateur;
 
    // choix des listes en fonction de l'entrer utilisateur
    if (choix === "mots"){
        listePropositions = listeMots;
    } else if (choix === "phrases"){ 
        listePropositions = listePhrase;
    }

    //étallage des expression à l'utilisateur et calcul du score
    for (let i = 0; i < listePropositions.length; i++) {
        motUtilisateur = prompt("veillez saisir l'expression : " + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            score++;
        }
    }
    return score;
}

// demande d'interaction à l'utilisateur pour le choix des liste sur les quelle il souhaite s'exercer
function choisirPhrasesOuMots(){
    while (choix !== "mots" && choix !== "phrases") { 
        choix = prompt("choisissez la liste de mots ou de phrases: mots pour une liste de mots et phrases pour une liste de phrases");
    }
    return choix;
}

// affichage du résultat à l'utilisateur
function afficherResultat(score, nbPropositions){
    let spanScore = document.querySelector(".zoneScore span");
    spanScore.innerHTML = `${score} / ${nbPropositions}`;
}

function lancerJeu(){
    choisirPhrasesOuMots();
    lancerBoucleDeJeu(choix);
    afficherResultat(score, listePropositions.length);
}

