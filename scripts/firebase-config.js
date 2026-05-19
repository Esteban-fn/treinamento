// Importando as funções básicas do Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"; // Importe o Auth, não o Analytics
// TODO: Adicione os SDKs dos produtos Firebase que você deseja usar.
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuração do Firebase do seu aplicativo web
// Para o SDK JS do Firebase v7.20.0 e versões posteriores, o measurementId é opcional
const firebaseConfig = {
  apiKey: "AIzaSyAj8fdtTurW2-mOD4s6KHhubTi1NCza-js",
  authDomain: "treinamento-982f1.firebaseapp.com",
  projectId: "treinamento-982f1",
  storageBucket: "treinamento-982f1.firebasestorage.app",
  messagingSenderId: "179068023296",
  appId: "1:179068023296:web:d40f9fb537eaa052f99ee5",
  measurementId: "G-SWNVXXLP0Q"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
// Exportar a ferramenta de autenticação
export const auth = getAuth(app); // Isso permite que outros arquivos usem seu login