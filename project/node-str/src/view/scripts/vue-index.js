var engineID = engineMA || {}; // Objeto do Index (InDex - ID)

/* Templates - serão utilizados em vários pontos do site */

/* ______________________________
        Blocos de Conteudo 
   ----------------------------*/
/*
    Primeiro bloco de conteudo
*/
engineID.bc_one = {
    template: '<div class="align-main">' +
    '<div class="bc01-logo center-al-column">' +
        '<img id="logo-uefa" src="content/images/emblem-uefa.svg" >' +
    '</div>' + 
    
    //começo do bc01-info -> informações da final
    '<div class="bc01-info">' +
    
        // abrindo o align section 1
        '<div class="align-section">' +
            '<div class="bc01-team-name center-al-column">' +
                '<h2>' + engineMA.HomeTeam.name + '</h2>' +
            '</div>' +
            '<div class="bc01-team-emblem center-al-column">' +
                '<img id="logo-team" alt="'+ engineMA.HomeTeam.name +'" src="'+ engineMA.HomeTeam.logo +'">' +
            '</div>' +
        '</div>' + 
        // fechando o align section 1

        //abrindo o align section 2
        '<div class="align-section" id="info-finals">' +
            engineMA.info.template + //chamando o layout das informações prontas!
            '<a href="http://localhost:3000"><button type="button" class="bt-ticket" id="bt-bc-01">Comprar</button></a>' +
        '</div>' +
        //fechando o align section 2

        //abrindo o align section 3
        '<div class="align-section">' +
            '<div class="bc01-team-emblem center-al-column">' +
                '<img id="logo-team" alt="'+ engineMA.VisitorTeam.name +'" src="'+ engineMA.VisitorTeam.logo +'">' +
            '</div>' +
            '<div class="bc01-team-name center-al-column" >' +
                '<h2>' + engineMA.VisitorTeam.name + '</h2>'+
            '</div>' +
        '</div>' +
        //fechando o align section 3
    
    '</div>' + 
    '</div>' 
}

/*
    Segundo bloco de conteudo
*/
engineID.bc_two = {
    template: '<div class="align-main">' +
    '<div class="bc02-al-title">' +
        '<div class="bc02-logo">' +
            '<img id="logo-team" alt="'+ engineMA.HomeTeam.name +'" src="'+ engineMA.HomeTeam.logo +'" >' +
            
        '</div>' +
        '<div class="center-al-row"><p>' + engineMA.HomeTeam.fullName + '</p></div>' +
    '</div>' +
    '<div class="bc02-al-infoStadium">' +
        '<label>Estádio</label>' +
        '<p>'+ engineMA.HomeTeam.stadium +'</p>' +
    '</div>' +
    
    //resumo do time
    '<div class="bc02-abs">' +
        '<div class="align-section">' +
        '<p class="text">' + engineMA.HomeTeam.history + '</p>' +//chamando a história do time escolhido
        '</div>' +
        '<div class="align-section">' +
            '<div class="bc02-abs-img center-al-row">' +
                '<img class="img-resize-box" src="'+ engineMA.HomeTeam.images[0] +'">' +
            '</div>' +
            '<div class="bc02-abs-img2 center-al-row">' +
                '<img class="img-resize-box" src="'+ engineMA.HomeTeam.images[1] +'">' +
            '</div>' +
        '</div>' +
        '<div class="align-section">' +
            '<div class="bc02-abs-stadium">' +
                '<img class="mainImg-resize-box" src="'+ engineMA.HomeTeam.images[2] +'"' +
            '</div>' +
        '</div>'
}

/*
    Terceiro bloco de conteudo
*/
engineID.bc_three = {
    template: '<div class="align-main">' +
    '<div class="bc02-al-title">' +
        '<div class="bc02-logo">' +
            '<img id="logo-team" alt="'+ engineMA.VisitorTeam.name +'" src="'+ engineMA.VisitorTeam.logo +'" >' +
            
        '</div>' +
        '<div class="center-al-row"><p>' + engineMA.VisitorTeam.fullName + '</p></div>' +
    '</div>' +
    '<div class="bc02-al-infoStadium">' +
        '<label>Estádio</label>' +
        '<p>'+ engineMA.VisitorTeam.stadium +'</p>' +
    '</div>' +
    
    //resumo do time
    '<div class="bc02-abs">' +
        '<div class="align-section">' +
        '<p class="text">' + engineMA.VisitorTeam.history + '</p>' +//chamando a história do time escolhido
        '</div>' +
        '<div class="align-section">' +
            '<div class="bc02-abs-img center-al-row">' +
                '<img class="img-resize-box" src="'+ engineMA.VisitorTeam.images[0] +'">' +
            '</div>' +
            '<div class="bc02-abs-img2 center-al-row">' +
                '<img class="img-resize-box" src="'+ engineMA.VisitorTeam.images[1] +'">' +
            '</div>' +
        '</div>' +
        '<div class="align-section">' +
            '<div class="bc02-abs-stadium">' +
                '<img class="mainImg-resize-box" src="'+ engineMA.VisitorTeam.images[2] +'"' +
            '</div>' +
        '</div>'
}


/*
    Quarto bloco de conteudo
*/
engineID.bc_four = {
    //processamento do layout
    template: '<div class="bc03-bg"></div>' +
    '<div class="bc03-content">' +
        '<div class="align-main">' +
            '<div class="align-section">' +
                '<h2 class="p-black">Histórico de confrontos</h2>' +
                '<div class="bc03-history-side">' +
                    '<div class="bc03-history-info">' +
                        '<label>Jogos</label>'+
                        '<p>3</p>'+
                    '</div>' +
                    '<div class="bc03-history-info">' +
                        '<label>Vitórias<br />Real Madrid</label>'+
                        '<p>0</p>'+
                    '</div>' +
                    '<div class="bc03-history-info">' +
                        '<label>Gols<br />Real Madrid</label>'+
                        '<p>0</p>'+
                    '</div>' +
                '</div>' +
                '<div class="bc03-history-side">' +
                    '<div class="bc03-history-info">' +
                        '<label>Empates</label>'+
                        '<p>0</p>'+
                    '</div>' +
                    '<div class="bc03-history-info">' +
                        '<label>Vitórias<br />Liverpool</label>'+
                        '<p>3</p>'+
                    '</div>' +
                    '<div class="bc03-history-info">' +
                        '<label>Gols<br />Liverpool</label>'+
                        '<p>6</p>'+
                    '</div>' +
                '</div>' +      
            '</div>' +
        '<div class="align-section">' +
            '<h2 class="p-black">Trajetória ' + engineMA.HomeTeam.name + '</h2>' +
            '<div class="bc03-journey-logo center-al-row">' +
                '<img class="journey-img-box" src="'+ engineMA.HomeTeam.logo +'" >' +
            '</div>' +
            '<div class="bc03-Journey" >'+
    
            //processamento dos jogos:
            engineMA.bc4_for.init(engineMA.variables.ResultsHome, engineMA.variables.OponentsHome) +
    
            '</div>' +
        '</div>' +
        '<div class="align-section">' + 
            '<h2 class="p-black">Trajetória ' + engineMA.VisitorTeam.name + '</h2>' +
            '<div class="bc03-journey-logo center-al-row">' +
                '<img class="journey-img-box" src="'+ engineMA.VisitorTeam.logo +'" >' +
            '</div>' +
            '<div class="bc03-Journey" >'+
    
            //processamento dos jogos:
            engineMA.bc4_for.init(engineMA.variables.ResultsVisitor, engineMA.variables.OponentsVisitor) +
    
            '</div>' +
        '</div>' +
    '</div>' +
    '</div>' +
    '</div>'
}

/* 
    Quinto bloco de conteudo
*/
engineID.bc_fifth = {
    template: '<div class="align-main">'+
    '<div class="bc05-header center-al-column">'+
        '<h2>Principais Jogadores</h2>' +
        '<p>' + engineMA.HomeTeam.name + '</p>' +
        '<span>X</span>' + 
        '<p>' + engineMA.VisitorTeam.name + '</p>' +
    '</div>' +
    
    //conteudo
    '<div class="bc05-content">' +
        '<div class="align-section">' +
            '<div class="bc05-content-group">' +
                '<div class="bc05-content-player ronaldo" ></div>'+
                '<div class="bc05-content-info" >'+
                    '<div class="bc05-info-personal">'+
                        '<p>' + engineMA.HomeTeam.mainPlayer.name + '</p><br />' +
                        '<span>' + engineMA.HomeTeam.mainPlayer.lastName + '</span>'+
                        '<img src="'+ engineMA.HomeTeam.mainPlayer.Nationality +'" class="bc05-flags">' +
                    '</div>' +
                    
                    //stats do atleta
                    '<div class="bc05-info-stats">' +
                        '<div class="bc05-stats-side">' +
                            '<div class="bc05-stats-info">' +
                                '<label>Velocidade Máxima</label><br />'+
                                '<p>31 KM/h</p>'+
                            '</div>' +
                            '<div class="bc05-stats-info">' +
                                '<label>Assistências</label>'+
                                '<p>2</p>'+
                            '</div>' +
                            '<div class="bc05-stats-info">' +
                                '<label>Jogos</label>'+
                                '<p>12</p>'+
                            '</div>' +
                        '</div>' +
                        '<div class="bc05-stats-side">' +
                            '<div class="bc05-stats-info">' +
                                '<label>Precisão dos passes</label>'+
                                '<p>80%</p>'+
                            '</div>' +
                            '<div class="bc05-stats-info">' +
                                '<label>Ocasiões</label>'+
                                '<p>79</p>'+
                            '</div>' +
                            '<div class="bc05-stats-info">' +
                                '<label>Gols</label>'+
                                '<p>15</p>'+
                            '</div>' +
                        '</div>' +    
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="align-section">' +
            '<div class="bc05-content-group">' +
                '<div class="bc05-content-player salah" ></div>'+
                '<div class="bc05-content-info" >'+
                    
                    //informações sobre o atleta
                    '<div class="bc05-info-personal">'+
                        '<p>' + engineMA.VisitorTeam.mainPlayer.name + '</p><br />' +
                        '<span>' + engineMA.VisitorTeam.mainPlayer.lastName + '</span>'+
                        '<img src="'+ engineMA.VisitorTeam.mainPlayer.Nationality +'" class="bc05-flags">' +
                    '</div>' +
                
                    //stats do atleta
                    '<div class="bc05-info-stats">' +
                        '<div class="bc05-stats-side">' +
                            '<div class="bc05-stats-info">' +
                                '<label>Velocidade Máxima</label><br />'+
                                '<p>33 KM/h</p>'+
                            '</div>' +
                            '<div class="bc05-stats-info">' +
                                '<label>Assistências</label>'+
                                '<p>4</p>'+
                            '</div>' +
                            '<div class="bc05-stats-info">' +
                                '<label>Jogos</label>'+
                                '<p>12</p>'+
                            '</div>' +
                        '</div>' +
                        '<div class="bc05-stats-side">' +
                            '<div class="bc05-stats-info">' +
                                '<label>Precisão dos passes</label>'+
                                '<p>79%</p>'+
                            '</div>' +
                            '<div class="bc05-stats-info">' +
                                '<label>Ocasiões</label>'+
                                '<p>41</p>'+
                            '</div>' +
                            '<div class="bc05-stats-info">' +
                                '<label>Gols</label>'+
                                '<p>10</p>'+
                            '</div>' +
                        '</div>' +    
                    '</div>' +
                    
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>' +
'</div>'
}
engineID.bc_sixth = {
    template: '<div class="align-main">' +
    '<div class="bc06-side uefa"></div>' +
    '<div class="bc06-side center-al-column">' +
        '<div class="bc06-info" id="info-finals">' + engineMA.info.template + '</div>' +
        '<div class="bc06-ticket">' +
            '<p>Compre seu ingresso agora!</p>' +
            '<a href="'+ engineMA.routesConfig.ticket +'"><button type="button" class="bt-ticket">Comprar</button></a>' +
        '</div>'+
    '</div>'+
    '</div>' // -> fechamento da align-main
        
}
engineID.footer = {
    template: '<div class="center-al-row">' +
    '<p>Desenvolvido por '+ engineMA.aboutProject.author + '</p>' +
    '<p>' + engineMA.aboutProject.date + '</p>' +
    '<p>Versão ' + engineMA.aboutProject.version  + '</p>' +
    '</div>'
}

//Main
new Vue({
    el: "#bc", // bc -> block contents
    data: {
        
/*
        chamadas dos templates manuais
                                                */
        first: engineID.bc_one.template,        // primeiro bloco
        second: engineID.bc_two.template,       // segundo bloco
        third: engineID.bc_three.template,      // terceiro bloco
        fourth: engineID.bc_four.template,      // quarto bloco
        fifth: engineID.bc_fifth.template,      // quinto bloco
        sixth:  engineID.bc_sixth.template,     // sexto bloco
        footer: engineID.footer.template,       // rodapé
    }
});

























