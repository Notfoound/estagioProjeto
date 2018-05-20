Vue.component('login', {
    template: '<div class="lg-container">'+
        '<a href="'+ engineMA.routesConfig.index +'"><p>Voltar</p></a>' +
        '<h2>Autenticação</h2>' +
        '<p>Preencha os campos abaixo para se autenticar</p>' +
        '<form method="" action="">'+
            '<input type="text" class="form-control" v-model="user" name="user" placeholder="User" required/>'+
            '<input type="password" class="form-control" v-model="pass" name="senha" placeholder="Senha" required />'+
            '<input type="submit" id="bt-sub" class="bt-ticket" value="ENVIAR" />' +
        '</form>' +
    '</div>',
    
   /* data: function(){
        return{
            userData: {
                user: "",
                pass: ""
            }
        }
    },*/
    
})


//Main
new Vue({
    el: "#login-1",
    data: {
        user: " ",
        pass: " "
    }
})