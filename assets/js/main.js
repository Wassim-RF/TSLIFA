const buttonProfessionFonctionnaire = document.getElementById("button_profession--fonctionnaire");
const buttonProfessionSalarie = document.getElementById("button_profession--salarie");
const buttonProfessionRetraite = document.getElementById("button_profession--retraite");
const buttonProfessionProfessionnel = document.getElementById("button_profession--professionnel");
const buttonProfessionSansEmploi = document.getElementById("button_profession--sansEmploi");
let buttoonOfProfessionPressed = false;


// Calculer le versement mentionnel

let mentantRange = document.getElementById("mentant_range");
let numberRangeMentant = document.getElementById("number_range_mentant");
let dureeRange = document.getElementById("duree_range");
let numberRangeDuree = document.getElementById("number_range_duree");
let salairRange = document.getElementById("Salair_range");
let numberRangeSalair = document.getElementById("salair_range_mentant");
let TEG; // taux nominal annuel
let VerMen; 
let Mentant = mentantRange.value;
let Duree = dureeRange.value;
let Salair = salairRange.value;

// calculer le mentant de credit
numberRangeMentant.addEventListener("input" , function() {
    mentantRange.value = numberRangeMentant.value;
    Mentant = mentantRange.value;
    console.log(Mentant);
});
mentantRange.addEventListener("input" , function () {
    Mentant = mentantRange.value;
    numberRangeMentant.value = mentantRange.value;
    console.log(Mentant);
});
// calculer la duree
numberRangeDuree.addEventListener("input" , function() {
    dureeRange.value = numberRangeDuree.value;
    Duree = dureeRange.value;
    console.log(Duree);
});
dureeRange.addEventListener("input" , function () {
    Duree = dureeRange.value;
    numberRangeDuree.value = dureeRange.value;
    console.log(Duree);
});
// calculer le salair
numberRangeSalair.addEventListener("input" , function() {
    salairRange.value = numberRangeSalair.value;
    Salair = salairRange.value;
    console.log(Duree);
});
salairRange.addEventListener("input" , function () {
    Salair = salairRange.value;
    numberRangeSalair.value = salairRange.value;
    console.log(Salair);
});




// stocker la valeur de TEG
buttonProfessionFonctionnaire.addEventListener("click" , () => {
    buttonProfessionFonctionnaire.classList.add("button_profession_afterClicked");
    buttonProfessionSalarie.classList.remove("button_profession_afterClicked");
    buttonProfessionRetraite.classList.remove("button_profession_afterClicked");
    buttonProfessionProfessionnel.classList.remove("button_profession_afterClicked");
    buttonProfessionSansEmploi.classList.remove("button_profession_afterClicked");
    buttoonOfProfessionPressed = true;


    TEG = 0.08;
    TEG = TEG/12;
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
    TEG = TEG/12;
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
    TEG = TEG/12;
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
    TEG = TEG/12;
    console.log(TEG);
});

buttonProfessionSansEmploi.addEventListener("click" , () => {
    buttonProfessionFonctionnaire.classList.remove("button_profession_afterClicked");
    buttonProfessionSalarie.classList.remove("button_profession_afterClicked");
    buttonProfessionRetraite.classList.remove("button_profession_afterClicked");
    buttonProfessionProfessionnel.classList.remove("button_profession_afterClicked");
    buttonProfessionSansEmploi.classList.add("button_profession_afterClicked");


    console.log("Error");
});



// Change les section

// continue au section de select de mentant et duree
let continueProfessionButton = document.getElementById("continueProfessionButton").addEventListener("click" , () => {
    if (buttoonOfProfessionPressed) {
        let select_profession_section = document.getElementById("select_profession_section").style.display = "none";
        let select_mentantDure_section = document.getElementById("select_mentant&durre_section").style.display = "flex";
        console.log("Is clicked");
        console.log(TEG);
    } else {
        alert("Vous ne selection pas votre profession");
    }
});

// continue au section de selection de info
let continuetoInfoSectionBUtton = document.getElementById("toInfoSectionBUtton").addEventListener("click" , () => {
    if (Mentant !== "0" && Duree !== "0") {
        let select_mentantDure_section = document.getElementById("select_mentant&durre_section").style.display = "none";
        let select_info_section = document.getElementById("select_info_section").style.display = "flex";
        console.log(Mentant);
        console.log(Duree);
        VerMen = Mentant * (TEG * ((1 + TEG) ** Duree)) / (((1 + TEG) ** Duree) - 1);
        console.log(VerMen)
    } else {
        alert("Vous avez lesse votre menttant est duree vide")
        console.log(Mentant);
    }
})