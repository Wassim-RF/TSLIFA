const buttonProfessionFonctionnaire = document.getElementById("button_profession--fonctionnaire");
const buttonProfessionSalarie = document.getElementById("button_profession--salarie");
const buttonProfessionRetraite = document.getElementById("button_profession--retraite");
const buttonProfessionProfessionnel = document.getElementById("button_profession--professionnel");
const buttonProfessionSansEmploi = document.getElementById("button_profession--sansEmploi");
let buttoonOfProfessionPressed = false;

let TEG; // taux nominal annuel

// fonction de calculer le versement mentionnel
let mentantRange = document.getElementById("mentant_range");
let numberRangeMentant = document.getElementById("number_range_mentant");
let dureeRange = document.getElementById("duree_rangee");
let numberRangeDuree = document.getElementById("number_range_duree");
let VerMen; 
let Mentant;
let Duree;

// calculer le mentant de credit
numberRangeMentant.addEventListener("input" , function() {
    mentantRange.value = numberRangeMentant.value;
    Mentant = mentantRange.value;
});
mentantRange.addEventListener("input" , function () {
    Mentant = mentantRange.value;
    numberRangeMentant.value = mentantRange.value;
});


TEG = TEG/12;
VerMen = Mentant * ((TEG * ((1 + TEG) ** Duree)) / (((1 + TEG) ** Duree) - 1));

buttonProfessionFonctionnaire.addEventListener("click" , () => {
    buttonProfessionFonctionnaire.classList.add("button_profession_afterClicked");
    buttonProfessionSalarie.classList.remove("button_profession_afterClicked");
    buttonProfessionRetraite.classList.remove("button_profession_afterClicked");
    buttonProfessionProfessionnel.classList.remove("button_profession_afterClicked");
    buttonProfessionSansEmploi.classList.remove("button_profession_afterClicked");
    buttoonOfProfessionPressed = true;


    TEG = 0.08;
    console.log(TEG);
});

buttonProfessionSalarie.addEventListener("click" , () => {
    buttonProfessionFonctionnaire.classList.remove("button_profession_afterClicked");
    buttonProfessionSalarie.classList.add("button_profession_afterClicked");
    buttonProfessionRetraite.classList.remove("button_profession_afterClicked");
    buttonProfessionProfessionnel.classList.remove("button_profession_afterClicked");
    buttonProfessionSansEmploi.classList.remove("button_profession_afterClicked");
    buttoonOfProfessionPressed = true;


    TEG = 0.1;
    console.log(TEG);
});

buttonProfessionRetraite.addEventListener("click" , () => {
    buttonProfessionFonctionnaire.classList.remove("button_profession_afterClicked");
    buttonProfessionSalarie.classList.remove("button_profession_afterClicked");
    buttonProfessionRetraite.classList.add("button_profession_afterClicked");
    buttonProfessionProfessionnel.classList.remove("button_profession_afterClicked");
    buttonProfessionSansEmploi.classList.remove("button_profession_afterClicked");
    buttoonOfProfessionPressed = true;


    TEG = 0.08;
    console.log(TEG);
});

buttonProfessionProfessionnel.addEventListener("click" , () => {
    buttonProfessionFonctionnaire.classList.remove("button_profession_afterClicked");
    buttonProfessionSalarie.classList.remove("button_profession_afterClicked");
    buttonProfessionRetraite.classList.remove("button_profession_afterClicked");
    buttonProfessionProfessionnel.classList.add("button_profession_afterClicked");
    buttonProfessionSansEmploi.classList.remove("button_profession_afterClicked");
    buttoonOfProfessionPressed = true;


    TEG = 0.11;
    console.log(TEG);
});

buttonProfessionSansEmploi.addEventListener("click" , () => {
    buttonProfessionFonctionnaire.classList.remove("button_profession_afterClicked");
    buttonProfessionSalarie.classList.remove("button_profession_afterClicked");
    buttonProfessionRetraite.classList.remove("button_profession_afterClicked");
    buttonProfessionProfessionnel.classList.remove("button_profession_afterClicked");
    buttonProfessionSansEmploi.classList.add("button_profession_afterClicked");
    buttoonOfProfessionPressed = true;


    console.log("Error");
});

// continue au section deuxieme
let continueProfessionButton = document.getElementById("continueProfessionButton").addEventListener("click" , () => {
    if (buttoonOfProfessionPressed) {
        let select_profession_section = document.getElementById("select_profession_section").style.display = "none";
        let select_mentantDure_section = document.getElementById("select_mentant&durre_section").style.display = "flex";
        console.log("Is clicked");
    } else {
        alert("Vous ne selection pas votre profession");
    }
    console.log(TEG);
});