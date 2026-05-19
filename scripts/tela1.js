import { auth } from "./firebase-config.js";
import { 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// --- LOGIN MANUAL (E-MAIL/SENHA) ---
const formulario = document.getElementById("login-form");

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const emailDigitado = document.getElementById("email").value;
    const passwordDigitado = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, emailDigitado, passwordDigitado)
        .then(() => {
            window.location.href = "tela1.html";
        })
        .catch((error) => {
            alert("Erro ao entrar: " + error.message);
        });
});

// --- LOGIN COM GOOGLE ---
const btnGoogle = document.getElementById('google-login');

btnGoogle.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            alert("Olá, " + result.user.displayName);
            window.location.href = "tela1.html";
        })
        .catch((error) => {
            console.error("Erro Google:", error.code);
        });
});