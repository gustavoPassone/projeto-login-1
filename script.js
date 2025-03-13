document.addEventListener("DOMContentLoaded", () => {
    const toggleSenha = document.getElementById("toggleSenha");
    const senhaInput = document.getElementById("senha");

    toggleSenha.addEventListener("click", () => {
        if (senhaInput.type === "password") {
            senhaInput.type = "text";
            toggleSenha.src = "img-hide-password.png"; // Ícone de ocultar senha
        } else {
            senhaInput.type = "password";
            toggleSenha.src = "img-password.svg"; // Ícone de mostrar senha
        }
    });
});