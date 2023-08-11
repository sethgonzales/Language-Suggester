// Business Interface Logic


// User Interface Logic
function hideResultsAndError() {
    document.getElementById("c-sharp").setAttribute("class", "hidden");
    document.getElementById("js").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
}

function findCodeType(event) {
    event.preventDefault();

    const superpower = document.getElementById("superpower").value;
    const fantasy = document.getElementById("fantasy").value;
    const party = document.getElementById("party").value;
    const animal = document.getElementById("animal").value;
    const movie = document.getElementById("movie").value;

    // const cSharp = document.getElementById("c-sharp");
    // const js = document.getElementById("js");
    // const python = document.getElementById("python");



    if (superpower === "blank" || fantasy === "blank" || party === "blank" || animal === "blank" || movie === "blank") {
        document.getElementById("error-message").removeAttribute("class");
    } else {
        // //start c-sharp option
        // if (superpower === "c-sharp" && fantasy === "c-sharp" && party === "c-sharp" && animal === "c-sharp" && movie === "c-sharp") {
        //     document.getElementById("c-sharpLang").removeAttribute("class");
        // } else if (superpower === "c-sharp" && fantasy === "c-sharp" && party === "c-sharp" && animal === "c-sharp" || movie === "c-sharp") {
        //     document.getElementById("c-sharpLang").removeAttribute("class");
        // } else if (superpower === "c-sharp" && fantasy === "c-sharp" && party === "c-sharp" && animal || "c-sharp" && movie === "c-sharp") {
        //     document.getElementById("c-sharpLang").removeAttribute("class");
        // } else if (superpower === "c-sharp" && fantasy === "c-sharp" && party === "c-sharp" || animal === "c-sharp" && movie === "c-sharp") {
        //     document.getElementById("c-sharpLang").removeAttribute("class");
        // } else if (superpower === "c-sharp" && fantasy === "c-sharp" || party === "c-sharp" && animal === "c-sharp" && movie === "c-sharp") {
        //     document.getElementById("c-sharpLang").removeAttribute("class");
        // } else if (superpower === "c-sharp" || fantasy === "c-sharp" && party === "c-sharp" && animal === "c-sharp" && movie === "c-sharp") {
        //     document.getElementById("c-sharpLang").removeAttribute("class");

        //start alt c# option
    } if (superpower === "c-sharp" && fantasy === "c-sharp" && party === "c-sharp" && animal === "c-sharp" && movie === "c-sharp") {
        document.getElementById("c-sharpLang").removeAttribute("class");
    } else if (if (superpower === "c-sharp" && fantasy === "c-sharp" && party === "c-sharp" && animal === "c-sharp" && movie === "c-sharp") {
        document.getElementById("c-sharpLang").removeAttribute("class");


    }
}
window.addEventListener("load", function () {
    const form = document.getElementById("questionnaire");
    form.addEventListener("submit", findCodeType);
});