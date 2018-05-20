var engineMA = engineMA || {}; // Objeto do Main (MAin - MA)

//Informações sobre o site
engineMA.aboutProject = {
    author: "Matheus Silvério",     // -> criador do site
    date: "23/05/2018",             // -> data de entrega
    version: "1.0",                 // -> versão final do projeto
}

engineMA.routesConfig = {
    
    //as variaveis são as páginas!
    ticket: 'ticket.html',
    login: 'login.html',
    index: 'index.html',
}

//Informações dos Times
engineMA.HomeTeam = {
    name: 'Real Madrid',
    fullName: 'Real Madrid Club de Fútbol',
    stadium: 'Santiago Bernabéu',
    logo: 'content/images/emblem-real-madrid.svg',
    mainPlayer: {
        name: 'Cristiano',
        lastName: 'Ronaldo',
        Nationality: 'content/images/Flag_of_Portugal.svg'
    },
    images: ["content/images/history-real-madrid-01.jpg",
            "content/images/history-real-madrid-02.jpg",
            "content/images/history-real-madrid-stadium.jpg", "content/images/camisa-madrid.jpg"],
    
    history: 'A história do Real Madrid Club de Fútbol começa em 1902 em Madri, capital da Espanha, quando funda a equipe que seria o futuro conjunto merengue.  O Real Madrid é um dos clubes de futebol com mais renome mundial, em 11 de dezembro de 2000, em sua festa anual, a FIFA lhe concedeu o título de Melhor Clube do Século XX aos "merengues". <br /><br /> Em suas vitrines conta com trinta e três campeonatos de Liga, dezenove Copas do Rei, nove supercopas da Espanha, fazendo-lhe o conjunto mais vencedor de seu país, com doze Liga dos campeões, duas copas da UEFA, três Supercopa da Europa, três Copas Intercontinentais, e dois mundiais da FIFA.' 
}
engineMA.VisitorTeam = {
    name: 'Liverpool',
    fullName: 'Liverpool Football Club',
    stadium: 'Anfield Road',
    logo: 'content/images/emblem-liverpool.svg',
    mainPlayer: {
        name: 'Mohamed',
        lastName: 'Salah',
        Nationality: 'content/images/Flag_of_Egypt.svg'
    },
    images: ["content/images/history-liverpool-01.jpg",
            "content/images/history-liverpool-02.jpg",
            "content/images/history-liverpool-stadium.jpg", "content/images/camisa-liverpool.png"],
    
    history: 'O Liverpool Football Club ou L.F.C é um clube de futebol inglês com sede na cidade de Liverpool. Fundado em 1892, ingressou na Football League no ano seguinte e desde então atua no Anfield Road. O lema do clube é "You will Never Walk Alone" , que traduzido significa "Você Nunca Caminhará Sozinho".<br /><br /> É uma das equipes mais vitoriosas da Inglaterra e da Europa, tendo já conquistado 5 Liga dos Campeões, 3 Copa da UEFA, 18 Campeonatos Ingleses, 7 Taças de Inglaterra, 8 Taças da Liga e 15 Supertaças da Inglaterra. O período mais glorioso de sua história foi entre as décadas de 1970 e 1980, quando Bill Shankly e Bob Paisley lideraram o Liverpool a onze títulos nacionais e sete troféus europeus.' 
}

//Informações da Final
engineMA.info = {
    template: '<p>Final, Kyiv</p>' +
    '<p>Sábado 26 de maio</p>' +
    '<p>15:45</p>',
    
    //detalhes sobre o evento
    details: {
        event: "Final UEFA Champions League",
        local: "Kyiv",
        date: "26/05/2018",
        hour: "15:45"
    }
}
engineMA.aboutTicket = {
    category_1: {
        value: 1970,
        description: 'Posicionado centralmente'
    },
    category_2: {
        value: 1400,
        description: 'Principalmente posicionado nos cantos'
    },
    category_3: {
        value: 700,
        description: 'Atrás dos gols'
    },
    youth_Package: {
        value: 610,
        description: "Um Adulto e uma Criança (até 14 anos)"
    }
}
engineMA.ticketDefault = {
    template: {
        cat_1: '<div class="tk-opt" id="cat_1" >' +
            '<p class="tk-title-text">Categoria 1</p>' +
            '<label>Valor: R$ ' + engineMA.aboutTicket.category_1.value + ',00</label>' +
            '<p>'+ engineMA.aboutTicket.category_1.description +'</p>' +
            '<input type="hidden" value="'+ engineMA.aboutTicket.category_1.value +'" id="valor_c1">' +
        '</div>',
        cat_2: '<div class="tk-opt" id="cat_2">' +
            '<p class="tk-title-text">Categoria 2</p>' +
            '<label>Valor: R$ ' + engineMA.aboutTicket.category_2.value + ',00</label>' +
            '<p>'+ engineMA.aboutTicket.category_2.description +'</p>' +
            '<input type="hidden" value="'+ engineMA.aboutTicket.category_2.value +'" id="valor_c2">' +
        '</div>',
        cat_3: '<div class="tk-opt" id="cat_3">' +
            '<p class="tk-title-text">Categoria 3</p>' +
            '<label>Valor: R$ ' + engineMA.aboutTicket.category_3.value + ',00</label>' +
            '<p>'+ engineMA.aboutTicket.category_3.description +'</p>' +
            '<input type="hidden" value="'+ engineMA.aboutTicket.category_3.value +'" id="valor_c3">' +
        '</div>',
        youth: '<div class="tk-opt" id="youth">' +
            '<p class="tk-title-text">Youth Package</p>' +
            '<label>Valor: R$ ' + engineMA.aboutTicket.youth_Package.value + ',00</label>' +
            '<p>'+ engineMA.aboutTicket.youth_Package.description +'</p>' +
            '<input type="hidden" value="'+ engineMA.aboutTicket.youth_Package.value +'" id="valor_youth">' +
        '</div>',
    }
}
engineMA.variables = {
    
    //Informações sobre os times que serão usadas
    
    //Madrid
    OponentsHome: ["Bayern", "Juventus", "PSG", "Fase de grupos"],
    ResultsHome: ["4x3", "4x3", "5x2", "2º"],
    
    //Liverpool
    OponentsVisitor: ["Roma", "Machester City", "Porto", "Fase de grupos", "Hoffenheim"],
    ResultsVisitor: ["7x6", "5x1", "5x0", "1º", "6x3"],
}
engineMA.bc4_for = {
    
    //e -> primeiro vector  (resultados)
    //r -> segundo vector   (Oponentes)
    
    init: function(e, r){
        var result ='';
        
        //for para percorrer as listas (parametro) 
        for(var i=0; i < e.length; i++){

            result += '<div class="bc03-matches">' +
                '<div class="bc03-matches-resul center-al-row">' +
                    '<p>' + e[i] + '</p>' +
                '</div>' +
                '<div class="bc03-matches-opo center-al-row">'+
                    '<p>' + r[i] + '</p>' +
                '</div>' +
            '</div>';
              
        }
        return result;
    }
}
