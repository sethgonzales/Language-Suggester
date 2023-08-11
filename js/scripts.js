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

    // const cSharp = document.getElementById("c-sharp").value;
    // const js = document.getElementById("js").value;
    // const python = document.getElementById("python").value;



if (superpower === "blank" || fantasy === "blank" || party === "blank" || animal === "blank" || movie === "blank") {
    document.getElementById("error-message").removeAttribute("class");
}
}


window.addEventListener("load", function () {
    const form = document.getElementById("questionnaire");
    form.addEventListener("submit", findCodeType);
});