function calcularValor() {
    let assinaturaDeluxe = parseFloat(document.getElementById("deluxe").value);
    let mensalTotal = parseFloat(assinaturaDeluxe / (document.getElementById("meses").value));
    let anualTotal = parseFloat(assinaturaDeluxe / document.getElementById("dias").value);

    

}