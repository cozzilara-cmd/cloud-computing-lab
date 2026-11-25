function stampaDati() {

    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let eta = document.getElementById("eta").value;
    let indirizzo = document.getElementById("indirizzo").value;
    let citta = document.getElementById("citta").value;
    let provincia = document.getElementById("prov").value;
    let commenti = document.getElementById("commenti").value;

    let sesso = "";

    for (i = 0; i < document.getElementsByName("sesso").length; i++) {

        if (document.getElementsByName("sesso")[i].checked) {

            sesso = document.getElementsByName("sesso")[i].value;

        }

    }
    let sport = "";

    for (i = 0; i < document.getElementsByName("sport").length; i++) {

        if (document.getElementsByName("sport")[i].checked) {

            sport += document.getElementsByName("sport")[i].value + " ";

        }

    }

    // Inserimento dati nella tabella
    document.getElementById("risultato").innerHTML +=
        "<tr>" +
        "<td>" + nome + "</td>" +
        "<td>" + cognome + "</td>" +
        "<td>" + eta + "</td>" +
        "<td>" + sesso + "</td>" +
        "<td>" + indirizzo + "</td>" +
        "<td>" + citta + "</td>" +
        "<td>" + provincia + "</td>" +
        "<td>" + sport + "</td>" +
        "<td>" + commenti + "</td>" +
        "</tr>";

    // Visualizzazione della tabella
    document.getElementById("tabella").style.display = "table";

}