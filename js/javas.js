


var password = document.getElementById('password')


function gerarpass() {
    var chars =
        '0123456789acbdefhgijklmnopqrstuvwxyz!@#$%¨&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var passwordLeng = 12
    var password = ''
    for (var i = 0; i < passwordLeng; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    document.getElementById('password').value = password

}



function copypassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("senha copiada!!");
}

const passwordInput = document.getElementById("password");
const passwordStrengthDisplay = document.getElementById("password-strength");

passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    const result = zxcvbn(password);
    const strength = result.score;
    const feedback = result.feedback.suggestions.join(" ");

    const strengthText = [
        "Muito Fraca",
        "Fraca",
        "Razoável",
        "Boa",
        "Muito Boa"
    ][strength];

    passwordStrengthDisplay.innerHTML = `Força da Senha: ${strengthText}. ${feedback}`;
});