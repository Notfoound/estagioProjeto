Vue.component('login', {
    template: '<div class="lg-container">'+
        '<a href="'+ engineMA.routesConfig.index +'"><p>Voltar</p></a>' +
        '<h2>Autenticação</h2>' +
        '<p>Preencha os campos abaixo para se autenticar</p>' +
        //'<form method="" action="">'+
            '<input type="text" class="form-control" id="formUser" name="user" placeholder="User" required/>'+
            '<input type="password" class="form-control"  name="pass" placeholder="Password" required />'+
            '<input type="submit" id="bt-sub" onclick="engineLG.variables.axios()" class="bt-ticket" value="SUBMIT" />' +
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

var engineLG = engineLG || {}

engineLG.variables = {
   axios: function(){

        let data = document.getElementById("formUser").value;
        let url = "http://localhost:3000/auth/" + data;

        var context = this;
        console.log(data);
        console.log(url);
        axios.get(url).then((req) =>{
            context.message = true; 
            console.log(req.data);  
        })
    }
}