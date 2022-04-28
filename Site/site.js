function settings() {
    var settings = document.getElementById("settings")

    if (settings.style.display == "none") {
        settings.style.display = "initial"
    } else if (settings.style.display == "initial") {
        settings.style.display = "none";
    } else {
        settings.style.display = "initial"
    }
}

function updates() {
    var settings = document.getElementById("updates")

    if (settings.style.display == "none") {
        settings.style.display = "initial"
    } else if (settings.style.display == "initial") {
        settings.style.display = "none";
    } else {
        settings.style.display = "initial"
    }
}

if(localStorage.getItem("title").text != "") {
    document.title = localStorage.getItem("title");
}

function titleSet(text) {
    if(text != "") {
        document.title = text;
        localStorage.setItem("title", text);
    }
    
    else {
        localStorage.removeItem("title");
        document.title = "Zaluea";
    }
}

function icoSet(text1) {
    if(text != "") {
        document.querySelector("link[rel= 'shortcut icon']").href = text1
    }
}

function reset() {
    localStorage.removeItem('title');
    window.location.href = "";
}