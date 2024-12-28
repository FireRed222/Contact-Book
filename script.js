
let addContact = () => {
    let nameEl = document.querySelector("#name").value.toUpperCase();
    let numberEl = document.querySelector("#number").value;
    let confirmationEl = document.querySelector("#confirmation");
    let getInfoEl = sessionStorage.getItem(nameEl);

    if (getInfoEl) {
        return console.log("There is already a person with this name");
    }

    if (nameEl === "" || numberEl === "") {
        confirmationEl.innerHTML = "Please enter something"; 
        confirmationEl.style.color = "red";
    }
    else {
        sessionStorage.setItem(nameEl, numberEl);
        confirmationEl.innerHTML = "Successful";
        confirmationEl.style.color = "green";
    }

    document.querySelector("#name").value = "";
    document.querySelector("#number").value = "";

    setTimeout(() => {
        confirmationEl.innerHTML = "";
    }, 3000);
}

let getContact = () => {
    let getNameEl = document.querySelector("#get_name").value.toUpperCase();
    let displayEl = document.querySelector("#display_info");
    let getInfoEl = sessionStorage.getItem(getNameEl);

    if (getInfoEl) {
        displayEl.innerHTML = `${getNameEl}: ${getInfoEl}`;
    } else {
        displayEl.innerHTML = `There is no such person`;
    }

    setTimeout(() => {
        displayEl.innerHTML = "";
    }, 3000);
}

let reset = () => {
    location.reload();
}

let 