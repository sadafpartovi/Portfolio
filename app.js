const chevron = document.getElementsByClassName("chevron");


chevron.addEventListener("click", e => {
    const portfolio = document.getElementById("portfolio");

    if(e.target === chevron) {

        chevron.classList.toggle("portfolio-heading");
        return portfolio;
    }

});




