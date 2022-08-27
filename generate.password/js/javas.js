


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
    var copyText = document.getElementById("passoword");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Sua senha é: " + copyText.value);
}