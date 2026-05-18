// 1. Pegamos o formulário todo
const formulario = document.getElementById("login-form")

// 2. Pegamos o campo de e-mail e de senha
const email = document.getElementById("email")
const password = document.getElementById("password")

// Adicionamos o "vigia" para o evento de SUBMIT (enviar)
formulario.addEventListener('submit', function(evento) {

    // IMPORTANTE: Isso impede a página de recarregar e perder os dados
    evento.preventDefault()

    // 3. Pegando o que o usuário escreveu NAQUELE MOMENTO
    const emailDigitado = email.value
    const passwordDigitado = password.value

    // Teste simples para ver se funcionou (aparece no console do navegador - F12)
    console.log(emailDigitado, passwordDigitado)

    // 4. A Lógica de Redirecionamento
    // Se o e-mail for "teste@email.com" e a senha "123", ele entra
    if (emailDigitado === "teste@email.com" && passwordDigitado === "123") {
        alert("Login bem-sucedido! Redirecionando para a próxima página...")
        // Aqui você pode usar window.location.href para redirecionar para outra página
        window.location.href = "tela1.html";
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.")
    }
});