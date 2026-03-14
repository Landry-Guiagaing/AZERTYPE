// affichage du résultat à l'utilisateur
function afficherResultat(score, nbPropositions){
    let spanScore = document.querySelector(".zoneScore span");
    spanScore.innerHTML = `${score} / ${nbPropositions}`;
}

function afficherProposition(proposition){
    let zoneProposition = document.querySelector(".zoneProposition")

    zoneProposition.innerHTML = proposition
}


function lancerJeu(){
    let score = 0;
    let listeProposition = listeMots
    let i = 0;
    proposition = listeMots[i]


    let btnValider = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");
    afficherProposition(listeProposition[i]);


    btnValider.addEventListener("click", () =>{
        console.log("jai cliquer sur le bouton valider ! ");
        console.log(inputEcriture.value)

        if (inputEcriture.value === listeProposition[i]){
            score ++
        }
        
        i++
        afficherResultat(score, i);
        inputEcriture.value = '';
        if (listeProposition[i] === undefined){
            afficherProposition("Le jeu est fini !")
            btnValider.desabled = true
        } else {
            afficherProposition(listeProposition[i]);
        }

    })

}

