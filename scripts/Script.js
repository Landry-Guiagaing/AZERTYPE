let listeProposition;
let ListeBtnRadio = document.querySelectorAll(".optionSource input");
let zoneProposition = document.querySelector(".zoneProposition");
let inputEcriture = document.getElementById("inputEcriture");
let btnValider = document.getElementById("btnValiderMot");
let spanZoneScore = document.querySelector(".zoneScore span");
let form = document.querySelector("form")

function afficherScore(score, nbProposition){
    spanZoneScore.innerHTML = `${score}/${nbProposition}`
}

function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function afficherProposition(proposition){
    zoneProposition.innerText = proposition
}

function verifierBalise(balise){
    if (balise.value.trim() === ''){
        console.log("votre balise n'est pas remplis")
    }
}

function validerNom(nom){
    if (nom.trim().length >= 2){
        return true
    } 
    return false
}

function validerEmail(email){
    let emailRegExp = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9._-]+$");
    if(emailRegExp.test(email)){
        return true
    }
    return false
}

function lancerJeu(){
    initAddEventListenerPopup()
    let score = 0
    let i = 0;
    let listeProposition = listeMots 

    afficherProposition(listeProposition[i])
    btnValider.addEventListener("click" , () => {
        console.log("j'ai cliquer sur valider")
        if (inputEcriture.value  === zoneProposition.innerText){
            score++
        }
        i++
        if (listeProposition[i] === undefined){
            afficherProposition("Le jeu est terminer !")
            btnValider.disabled = true
        } else {
        afficherProposition(listeProposition[i])
        }
        inputEcriture.value = ''

        afficherScore(score, i)
    })

    for(let j = 0; j < ListeBtnRadio.length; j++){
        
        ListeBtnRadio[j].addEventListener("change", (event) =>{
            console.log(event.target.value)
            if(event.target.value === '1'){
                listeProposition = listeMots;
            } else {
                listeProposition = listePhrases
            }
            afficherProposition(listeProposition[i]);
 
        })
    }

    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        let baliseNom = document.getElementById("nom")
        let baliseEmail = document.getElementById("email")
        nom = baliseNom.value;
        email = baliseEmail.value;

        if (validerNom(nom) && validerEmail(email)){
            let scoreEmail = `${score}/${i}`
            afficherEmail(nom, email, scoreEmail)
        } else {
            console.log("erreur")
        }

    })

}