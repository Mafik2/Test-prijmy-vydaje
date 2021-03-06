class Transaction {
    constructor(vydaj, castka, popis) {
        this.vydaj = vydaj;
        this.castka = castka;
        this.popis = popis;
    }
}

let transactions = [
    new Transaction(true, 1000, "Na jidlo"),
    new Transaction(false, 5000, "za oběd"),
    new Transaction(false, 100, "pro sama"),
    new Transaction(true, 3000, "výplata"),

]
window.onload = () => {
    writeTransactions();
}

function writeTransactions() {
    let list = document.getElementById("listOfTransactions")
    list.innerText = '';
    for (let i = 0; i < transactions.length; i++) {
        let li = document.createElement("li")
        if (transactions[i].vydaj === false) {
            li.innerHTML = "<i class=\"far fa-arrow-alt-circle-down\"></i>"
            li.style.color = "red";
        } else {
            li.innerHTML = "<i class=\"far fa-arrow-alt-circle-up\"></i>"
            li.style.color = "green";
        }
        li.innerHTML += "<a>" + transactions[i].castka + ",-" + "</a>" +"<a>" +transactions[i].popis  + "</a>";
        li.classList = "list-group-item d-flex justify-content-between h4";
        list.appendChild(li);
    }
}
