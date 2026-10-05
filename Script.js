function calcularArea() {

    // Pega os valores digitados pelo usuário
    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    // Verifica se os valores são válidos
    if (base <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML =
            "Digite valores maiores que zero.";

        return;
    }

    // Calcula a área
    let area = (base * altura) / 2;

    // Mostra o resultado
    document.getElementById("resultado").innerHTML =
        "A área do triângulo é: " + area.toFixed(2);
}