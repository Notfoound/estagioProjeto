Vue.component('login', {
    template: '<div class="lg-container">'+
        '<a href="'+ engineMA.routesConfig.index +'"><p>Voltar</p></a>' +
        '<h2>Autenticação</h2>' +
        '<p>Preencha os campos abaixo para se autenticar</p>' +
        //'<form method="" action="">'+
            '<input type="text" class="form-control" id="formUser" name="user" placeholder="User" required/>'+
            '<input type="password" class="form-control"  name="pass" placeholder="Password" required />'+
            '<input type="submit" id="bt-sub" onclick="engineLG.variables.login()" class="bt-ticket" value="SUBMIT" />' +
        //'</form>' +
    '</div>'
})

//Main
new Vue({
    el: "#login-1",
    data: {
        message: false,
    },
    methods: {
        login() {
            engineLG.variables.axios(this.user)
        }
    }
})

// Iniciando Firebase
var config = {
    apiKey: "AIzaSyDfVoxXZ99_WZLk_sJz9G3GnCdEOBs-gJc",
    authDomain: "estagio-2018.firebaseapp.com",
    databaseURL: "https://estagio-2018.firebaseio.com",
    projectId: "estagio-2018",
    storageBucket: "estagio-2018.appspot.com",
    messagingSenderId: "751571535533"
  };
firebase.initializeApp(config);

var actionCodeSettings = {
    url: 'http://localhost:3000/auth/',
    handleCodeInApp: true
}

var engineLG = engineLG || {}

engineLG.variables = {
   login: function(){
    let email = document.getElementById("formUser").value; //descobrindo o email do usuario

    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .then(function() {
            console.log("Form de login enviado")
        })
        .catch(function(error){
            console.log("Erro ao enviar dados de login: " + error.message)
        });
    }
}