function converti() {
    let binario = document.getElementById("binario").value;

    let cifre = "0123456789ABCDEF";
    let esadecimale = "";

    // Aggiungo degli 0 per avere gruppi di 4 bit
    while (binario.length % 4 != 0) {
        binario = "0" + binario;
    }

    // Divido la stringa in gruppi di 4 bit
    while (binario.length > 0) {
        let gruppo = binario.substring(0, 4);
        let valore = 0;
        
        let pesi = [8, 4, 2, 1];

        for (let i = 0; i < 4; i++) {
            if (gruppo[i] == "1") {
                valore += pesi[i];
            }
        }

        esadecimale += cifre[valore];
        binario = binario.substring(4);
    }

    document.getElementById("risultato").innerHTML =
        "Risultato: " + esadecimale;
}