function login() {
    let username = document.getElementById("InputUsername").value;
    let senhauser = document.getElementById("InputPassword").value;
    if (senhauser !== "2678") {
        alert("Senha incorreta, tente novamente");

    } else {
        alert("Seja bem-vindo " + username);
        window.location.href = "/sistema.html";
    }
}