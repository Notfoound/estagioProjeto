var engineTK = engineTK || {}

//conteudo dentro do container principal
engineTK.tk_container = {
    template: '<div class="tk-group">'+
        '<div class="tk-ticket">' +
            '<div class="tk-info">' +
                '<h3 class="tk-event-title">' + engineMA.info.details.event + '</h3>' +     
                '<div class="sub-text">' + engineMA.info.template + '</div>' +
            '</div>' +
    
            //template das opções
            '<div class="tk-group-opt">'+
                engineMA.ticketDefault.template.cat_1 +
                engineMA.ticketDefault.template.cat_2 +
                engineMA.ticketDefault.template.cat_3 +
                engineMA.ticketDefault.template.youth +
            '</div>' +
            
        '</div>' +
        '<div class="tk-shirt">' +
            '<h3>Ingresso + Camisa do time</h3>' +
            '<p>Agora você pode incluir na compra, a camisa de seu time!</p>' +
            '<div class="tk-shirt-content">' +
                '<button type="button" id="home-bt" class="bt-tk">' + engineMA.HomeTeam.name + '</button>' +
                '<button type="button" id="visitor-bt" class="bt-tk">' + engineMA.VisitorTeam.name + '</button>' +
                '<div class="tk-shirt-container"></div>' +
                
            '</div>' +
        '</div>'+
        '<button type="button" class="bt-remove center-al-row" id="tk-remove"><div></div></button>Remover itens' +
        '<div class="tk-payment">' +
            '<h3>TOTAL: </h3><p class="tk-pay-total">R$ <span id="total-buy">0</span>,00</p>' +
            '<div class="tk-pay-qtd">' +
                '<p>Qtd. Camisa Home: <span id="countHome"></span></p>' +
                '<p>Qtd. Camisa Away: <span id="countVisit"></span></p>' +
                '<div class="tk-qtd-ticket">' +
                    '<label>Qtd. Ingressos<br /></label>' +
                    '<p>Categoria 1: <span id="ctk1"></span></p><br />' +
                    '<p>Categoria 2: <span id="ctk2"></span></p><br />' +
                    '<p>Categoria 3: <span id="ctk3"></span></p><br />' +
                    '<p>Youth Package: <span id="cyt"></span></p><br />' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>'
}

    
Vue.component('ticket', {
    template: '<div class="tk-align-content">'+
    '<div class="tk-container">' +
        engineTK.tk_container.template +
    '</div>' +
    '</div>'
})

new Vue({
    el: "#conteudo"
})

engineTK.data = {
    total: 0,
    countHome: 0,
    countVisit: 0,
    countTicket: [0,0,0,0],
    method:{
        add_Shirt: function(){
            let home = document.getElementById("home-bt");
            let visitor = document.getElementById("visitor-bt");
        
            home.addEventListener("click", function(){

                engineTK.data.total += 250; //somando o preço com o da camisa
                engineTK.data.countHome ++; //guardando a quantidade da camisa 1
                engineTK.data.update(); //atualizando a variavel
            });
            visitor.addEventListener("click", function(){

                engineTK.data.total += 190; //somando o preço com a camisa
                engineTK.data.countVisit ++; //guardando a quantidade da camisa 2
                engineTK.data.update(); //atualizando a variavel
            });
        },
        add_Ticket: function(){
            let btc1 = document.getElementById("cat_1");
            let btc2 = document.getElementById("cat_2");
            let btc3 = document.getElementById("cat_3");
            let btcyt = document.getElementById("youth");

            btc1.addEventListener("click", function(){
                let c1 = document.getElementById("valor_c1").value;

                engineTK.data.total += parseInt(c1);
                engineTK.data.countTicket[0] += 1;
                engineTK.data.update();
                
            });
            btc2.addEventListener("click", function(e){
                let c2 = document.getElementById("valor_c2").value;
                
                engineTK.data.total += parseInt(c2);
                engineTK.data.countTicket[1] += 1;
                engineTK.data.update();
            });
            btc3.addEventListener("click", function(){
                let c3 = document.getElementById("valor_c3").value;
                
                engineTK.data.total += parseInt(c3);
                engineTK.data.countTicket[2] += 1;
                engineTK.data.update();
            });
            btcyt.addEventListener("click", function(){
                let yt = document.getElementById("valor_youth").value;
                
                engineTK.data.total += parseInt(yt);
                engineTK.data.countTicket[3] += 1;
                engineTK.data.update();
            });
        },
        remove: function(){
            let removeTk = document.getElementById("tk-remove");
            
            removeTk.addEventListener("click", function(){
                
                //resetando variaveis
                engineTK.data.total = 0;
                engineTK.data.countHome = 0;
                engineTK.data.countVisit = 0;
                engineTK.data.countTicket[0] = 0;
                engineTK.data.countTicket[1] = 0;
                engineTK.data.countTicket[2] = 0;
                engineTK.data.countTicket[3] = 0;
                console.log(engineTK.data.countTicket);
                
                engineTK.data.update(); 
            });
        }
    },
    update: function(){
        
        /* informações sobre as camisas */
        let p = document.getElementById('total-buy')
        p.innerHTML ="";
        p.innerHTML = engineTK.data.total;
        
        let home = document.getElementById('countHome');
        home.innerHTML = engineTK.data.countHome;
        
        let visit = document.getElementById('countVisit');
        visit.innerHTML = engineTK.data.countVisit;
        
        
        /* informações sobre o ingresso */
        let ctk1 = document.getElementById("ctk1");
        let ctk2 = document.getElementById("ctk2");
        let ctk3 = document.getElementById("ctk3");
        let ctkyt = document.getElementById("cyt");

        
        if(engineTK.data.countTicket[0]){
            ctk1.innerHTML = engineTK.data.countTicket[0]; 
        }
        if(engineTK.data.countTicket[1]){
            ctk2.innerHTML = engineTK.data.countTicket[1]; 
        }
        if(engineTK.data.countTicket[2]){
            ctk3.innerHTML = engineTK.data.countTicket[2]; 
        }
        if(engineTK.data.countTicket[3]){
            ctkyt.innerHTML = engineTK.data.countTicket[3]; 
        }
        console.log(engineTK.data.countTicket);
    }
}
engineTK.data.method.add_Shirt(),
engineTK.data.method.add_Ticket(),
engineTK.data.method.remove()