// Business Interface Logic


// User Interface Logic

function hideResultsAndError() {
    document.getElementById("error-message").setAttribute("class", "hidden");
    document.getElementById("c-sharpLang").setAttribute("class", "hidden");
    document.getElementById("jsLang").setAttribute("class", "hidden");
    document.getElementById("pythonLang").setAttribute("class", "hidden");
}

function findCodeType(event) {
    event.preventDefault();

    //Process user name information
    let userName = document.getElementById("username-input").value;
    document.getElementById("username1").innerText = userName.toString().toUpperCase() + "! ";
    document.getElementById("username2").innerText = userName.toString().toUpperCase() + "! ";
    document.getElementById("username3").innerText = userName.toString().toUpperCase() + "! ";


    //Find question response values
    const superpower = document.getElementById("superpower").value;
    const fantasy = document.getElementById("fantasy").value;
    const party = document.getElementById("party").value;
    const animal = document.getElementById("animal").value;
    const movie = document.getElementById("movie").value;

    //Must have a set of THREE in order to show preference to a language 
    //c# combinations
    if (superpower === "c-sharp" && fantasy === "c-sharp" && party === "c-sharp") {
        document.getElementById("c-sharpLang").removeAttribute("class");
    } else if (superpower === "c-sharp" && fantasy === "c-sharp" && animal === "c-sharp") {
        document.getElementById("c-sharpLang").removeAttribute("class");
    } else if (superpower === "c-sharp" && fantasy === "c-sharp" && movie === "c-sharp") {
        document.getElementById("c-sharpLang").removeAttribute("class");
    } else if (superpower === "c-sharp" && party === "c-sharp" && animal === "c-sharp") {
        document.getElementById("c-sharpLang").removeAttribute("class");
    } else if (superpower === "c-sharp" && party === "c-sharp" && movie === "c-sharp") {
        document.getElementById("c-sharpLang").removeAttribute("class");
    } else if (superpower === "c-sharp" && animal === "c-sharp" && movie === "c-sharp") {
        document.getElementById("c-sharpLang").removeAttribute("class");
    } else if (fantasy === "c-sharp" && party === "c-sharp" && animal === "c-sharp") {
        document.getElementById("c-sharpLang").removeAttribute("class");
    } else if (fantasy === "c-sharp" && party === "c-sharp" && movie === "c-sharp") {
        document.getElementById("c-sharpLang").removeAttribute("class");
    } else if (fantasy === "c-sharp" && animal === "c-sharp" && movie === "c-sharp") {
        document.getElementById("c-sharpLang").removeAttribute("class");
    } else if (party === "c-sharp" && animal === "c-sharp" && movie === "c-sharp") {
        document.getElementById("c-sharpLang").removeAttribute("class");

        //js combinations
    } else if (superpower === "js" && fantasy === "js" && party === "js") {
        document.getElementById("jsLang").removeAttribute("class");
    } else if (superpower === "js" && fantasy === "js" && animal === "js") {
        document.getElementById("jsLang").removeAttribute("class");
    } else if (superpower === "js" && fantasy === "js" && movie === "js") {
        document.getElementById("jsLang").removeAttribute("class");
    } else if (superpower === "js" && party === "js" && animal === "js") {
        document.getElementById("jsLang").removeAttribute("class");
    } else if (superpower === "js" && party === "js" && movie === "js") {
        document.getElementById("jsLang").removeAttribute("class");
    } else if (superpower === "js" && animal === "js" && movie === "js") {
        document.getElementById("jsLang").removeAttribute("class");
    } else if (fantasy === "js" && party === "js" && animal === "js") {
        document.getElementById("jsLang").removeAttribute("class");
    } else if (fantasy === "js" && party === "js" && movie === "js") {
        document.getElementById("jsLang").removeAttribute("class");
    } else if (fantasy === "js" && animal === "js" && movie === "js") {
        document.getElementById("jsLang").removeAttribute("class");
    } else if (party === "js" && animal === "js" && movie === "js") {
        document.getElementById("jsLang").removeAttribute("class");

        //python combinations
    } else if (superpower === "python" && fantasy === "python" && party === "python") {
        document.getElementById("pythonLang").removeAttribute("class");
    } else if (superpower === "python" && fantasy === "python" && animal === "python") {
        document.getElementById("pythonLang").removeAttribute("class");
    } else if (superpower === "python" && fantasy === "python" && movie === "python") {
        document.getElementById("pythonLang").removeAttribute("class");
    } else if (superpower === "python" && party === "python" && animal === "python") {
        document.getElementById("pythonLang").removeAttribute("class");
    } else if (superpower === "python" && party === "python" && movie === "python") {
        document.getElementById("pythonLang").removeAttribute("class");
    } else if (superpower === "python" && animal === "python" && movie === "python") {
        document.getElementById("pythonLang").removeAttribute("class");
    } else if (fantasy === "python" && party === "python" && animal === "python") {
        document.getElementById("pythonLang").removeAttribute("class");
    } else if (fantasy === "python" && party === "python" && movie === "python") {
        document.getElementById("pythonLang").removeAttribute("class");
    } else if (fantasy === "python" && animal === "python" && movie === "python") {
        document.getElementById("pythonLang").removeAttribute("class");
    } else if (party === "python" && animal === "python" && movie === "python") {
        document.getElementById("pythonLang").removeAttribute("class");

        //Any sets of two, random combinations, or too many blanks lead to error
    } else {
        document.getElementById("error-message").removeAttribute("class");
    }
}

window.addEventListener("load", function () {
    const form = document.getElementById("questionnaire");
    form.addEventListener("submit", hideResultsAndError);
    form.addEventListener("submit", findCodeType);
});