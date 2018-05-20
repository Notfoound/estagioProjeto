

const http = require('http');
const debug = require('debug')('nodestr:server');
const app = require('../src/app');

const port = normalizePort(process.env.port || '3000');
app.set('port', port); //colocando a rota da aplicação a porta pré definida acima

const server = http.createServer(app); //criando um servidor

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log("Api rodando na porta " + port);

function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){ //se não for um numero vai retornar o valor
        return val;
    }
    if(port >= 0) { //caso for, retornará a porta
        return port;
    }
    return false;
}

function onError(error) {
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch(error.code){
        case 'EACCES' :
            console.error(bind + 'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE' :
            console.error(bind + 'is already in use');
            process.exit(1);
            break;
        default: 
            throw error;
    }
}
function onListening(){
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port' + address.port;

    debug('Listening on' + bind);
}