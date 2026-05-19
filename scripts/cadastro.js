// 1. Importações necessárias
import { auth } from "./firebase-config.js"; // Importe a configuração do Firebase
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"; // Importe a função de criação de usuário

// 2. Seleção dos elementos
const form = document.getElementById("cadastro-form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    // 3. Chamando o Firebase para criar o usuário
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Se der certo, o usuário é criado
            console.log("Usuário criado com sucesso:", userCredential.user);
            alert("Cadastro bem-sucedido! Você pode agora fazer login.");
            window.location.href = "home.html"; // Redireciona para a tela de login
        })
        .catch((error) => {
            // Se der erro (ex: senha curta, email inválido)
            console.error("Erro ao cadastrar:", error.code);
            alert("Erro ao cadastrar: " + error.message);
        });
});