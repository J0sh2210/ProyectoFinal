import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'
import {getDatabase, ref, onValue, update, push,child}  from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js'

const firebaseConfig = {
  apiKey: "AIzaSyDSIaj6W18RknVhF-hQrhO5rraq_caOF2c",
  authDomain: "chat2023-130ac.firebaseapp.com",
  projectId: "chat2023-130ac",
  storageBucket: "chat2023-130ac.appspot.com",
  messagingSenderId: "720762709567",
  appId: "1:720762709567:web:30cbd063fdadb154787a8a",
  measurementId: "G-R10RKFH0YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var btnIniciar = document.getElementById('btnIniciar')
var btnCerrar = document.getElementById('btnCerrar')
var nombreUsuario = document.getElementById('nombreUsuario')
var textoMensaje =document.getElementById('textoMensaje')
var usuarioConectado = "";
var divChat = document.getElementById('divChat')

btnIniciar.onclick = async function (){
    var auth = getAuth();
    var provider = new GoogleAuthProvider;
    auth.language = 'es';
    var response = await signInWithPopup(auth,provider);
    nombreUsuario.innerText = response.user.email;
    btnIniciar.style.display = "none";
    btnCerrar.style.display = "flex";
    usuarioConectado= response.user.email;
    escucharYDibujarMensajes();
}

btnCerrar.onclick = async function(){
  var auth= getAuth();
  await auth.signOut();
  btnIniciar.style.display = "flex";
  btnCerrar.style.display = "none";
  nombreUsuario.innerText = "Usuario no autenticado";
  usuarioConectado = "";
}

textoMensaje.onkeydown = async function (event ){
  if (event.key == "Enter"){
      if (usuarioConectado == ""){
          alert("Debes de iniciar sesion para escribir")
          return;
      }
      var db = getDatabase();
      var referenciaAMensajes = ref(db, 'Mensajes');
      var nuevaLlave = push(child(ref(db),'Mensajes')).key;
      var nuevosDatos = {
          [nuevaLlave]:{
              usuario: usuarioConectado,
              Mensajes: textoMensaje.value,
              fecha: new Date()
          }
      }
      textoMensaje.value="";
      await update(referenciaAMensajes, nuevosDatos);
  }
}
function escucharYDibujarMensajes (){
  //Recuperamos la base de datos de Firebase
  var db = getDatabase();
  //Creamos la referencia al mensaje.
  var referenciaAMensajes = ref(db, 'Mensajes');
  //Escuchamos cuando hay nuevos mensajes
  onValue(referenciaAMensajes, (datos)=>{
       var valores = datos.val();
       divChat.innerHTML = "";
       Object.keys(valores).forEach(function(llave){
           divChat.innerHTML += "<div class='usuario'>"+ valores[llave].usuario + "</div>";
           divChat.innerHTML += "<div class='Mensajes'>"+ valores[llave].Mensajes + "</div>";
           divChat.innerHTML += "<div class='fecha'>"+ valores[llave].fecha + "</div>";
           divChat.innerHTML += "<hr>"
       })
       divChat.scrollTo(0, divChat.scrollHeight)
  },
  (error)=>{
   console.log(error)
  }
  )
}