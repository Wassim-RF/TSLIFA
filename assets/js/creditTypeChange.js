let creditConsommationSection = document.getElementById("credit_Consommation--section");
let creditInvestisemmentSection = document.getElementById("credit_Investisemment--section");
let creditConsommationButton = document.getElementById("credit_Consommation--Button");
let creditInvestisemmentButton = document.getElementById("credit_Investisemment--Button");

// C'est en clicker sur la boutton de credit de consommation
creditConsommationButton.addEventListener("click" , () => {
    // add class et remove l'autre parmis la button qui j'ai clicke pour que le color va change et le hover
    creditConsommationButton.classList.add("button_credit_afterCllick");
    creditConsommationButton.classList.remove("button_credit_beforCllick");
    creditInvestisemmentButton.classList.add("button_credit_beforCllick");
    creditInvestisemmentButton.classList.remove("button_credit_afterCllick");
    // la part du le credit qui va apparaitre ou qui va disparu
    creditConsommationSection.style.display = "block";
    creditInvestisemmentSection.style.display = "none";
});

// C'est en clicker sur la boutton de credit d'invistissement
creditInvestisemmentButton.addEventListener("click" , () => {
    // add class et remove l'autre parmis la button qui j'ai clicke pour que le color va change et le hover
    creditInvestisemmentButton.classList.add("button_credit_afterCllick");
    creditInvestisemmentButton.classList.remove("button_credit_beforCllick");
    creditConsommationButton.classList.add("button_credit_beforCllick");
    creditConsommationButton.classList.remove("button_credit_afterCllick");
    // la part du le credit qui va apparaitre ou qui va disparu 
    creditConsommationSection.style.display = "none";
    creditInvestisemmentSection.style.display = "flex";
});