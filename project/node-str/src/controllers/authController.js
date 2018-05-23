//imports
const mongoose = require('mongoose');
const User = mongoose.model('User');

//métodos
exports.get = (req, res) =>{
    User
    .find({})
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
}
exports.getLogin = (req, res) => {
    User
    .findOne({
        name: req.params.name
    }, 'name')
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
}

exports.post = (req, res, next) => {
    var user = new User();
    
    user.name = req.body.name;
    user.pass = req.body.pass;
    user.purchased = 2;

    user.save().then(x=>{
        res.satus(201).send({ message: 'Usuário cadastrado!' });
    }).catch(e=> {
        res.status(400).send({ message: 'Falha ao cadastrar', data: e, info: user});
    });

};

exports.putPurchased = (req, res) => {
    User
    .findOneAndUpdate(req.params.name, {
        $set: {
            purchased: req.body.purchased
        }
    })
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);
    });
}
