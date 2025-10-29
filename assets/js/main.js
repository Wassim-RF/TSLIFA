const buttonProfessionFonctionnaire = document.getElementById("button_profession--fonctionnaire");
const buttonProfessionSalarie = document.getElementById("button_profession--salarie");
const buttonProfessionRetraite = document.getElementById("button_profession--retraite");
const buttonProfessionProfessionnel = document.getElementById("button_profession--professionnel");
const buttonProfessionSansEmploi = document.getElementById("button_profession--sansEmploi");

let TEG; // taux nominal annuel

function calculeVersementMensuel(TEG) {
    let VerMen; 
    let Mentant; 
    let Duree;
    TEG = TEG/12;
    VerMen = Mentant * ((TEG * ((1 + TEG) ** Duree)) / (((1 + TEG) ** Duree) - 1));
}

buttonProfessionFonctionnaire.addEventListener("click" , () => {
    buttonProfessionFonctionnaire.classList.add("button_profession_afterClicked");
    buttonProfessionSalarie.classList.remove("button_profession_afterClicked");
    buttonProfessionRetraite.classList.remove("button_profession_afterClicked");
    buttonProfessionProfessionnel.classList.remove("button_profession_afterClicked");
    buttonProfessionSansEmploi.classList.remove("button_profession_afterClicked");


    TEG = 0.08;
    console.log(TEG);
});

buttonProfessionSalarie.addEventListener("click" , () => {
    buttonProfessionFonctionnaire.classList.remove("button_profession_afterClicked");
    buttonProfessionSalarie.classList.add("button_profession_afterClicked");
    buttonProfessionRetraite.classList.remove("button_profession_afterClicked");
    buttonProfessionProfessionnel.classList.remove("button_profession_afterClicked");
    buttonProfessionSansEmploi.classList.remove("button_profession_afterClicked");


    TEG = 0.1;
    console.log(TEG);
}) 

buttonProfessionRetraite.addEventListener("click" , () => {
    buttonProfessionFonctionnaire.classList.remove("button_profession_afterClicked");
    buttonProfessionSalarie.classList.remove("button_profession_afterClicked");
    buttonProfessionRetraite.classList.add("button_profession_afterClicked");
    buttonProfessionProfessionnel.classList.remove("button_profession_afterClicked");
    buttonProfessionSansEmploi.classList.remove("button_profession_afterClicked");


    TEG = 0.08;
    console.log(TEG);
}) 

buttonProfessionProfessionnel.addEventListener("click" , () => {
    buttonProfessionFonctionnaire.classList.remove("button_profession_afterClicked");
    buttonProfessionSalarie.classList.remove("button_profession_afterClicked");
    buttonProfessionRetraite.classList.remove("button_profession_afterClicked");
    buttonProfessionProfessionnel.classList.add("button_profession_afterClicked");
    buttonProfessionSansEmploi.classList.remove("button_profession_afterClicked");


    TEG = 0.11;
    console.log(TEG);
}) 

buttonProfessionSansEmploi.addEventListener("click" , () => {
    buttonProfessionFonctionnaire.classList.remove("button_profession_afterClicked");
    buttonProfessionSalarie.classList.remove("button_profession_afterClicked");
    buttonProfessionRetraite.classList.remove("button_profession_afterClicked");
    buttonProfessionProfessionnel.classList.remove("button_profession_afterClicked");
    buttonProfessionSansEmploi.classList.add("button_profession_afterClicked");


    console.log("Error");
}) 