//imports
var models = require('..models');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');


//Routes
module.exports = {
    register: function(req, res){
        //TODO: to implement

        //Parms
        var email = req.body.email;
        var username = req.body.username;
        var password  = req.body.password;

        if(email == null || username == null || password == null) {
            return res.status(400).json({'error': 'missing parameters' })
        }
    },

    models.User.findOne({
        attributes: ['email'],
        where: { email: email }
    })
    .then(function(userFound){
        if(!userFound) {
                bcrypt.hash(password, 5, function(err, bcryptepassword){
                    var newUser = models.User.create({
                        email: email,
                        username: username,
                        password: bcryptepassword,
                        bio: bio,
                        isAdmin: 0
                    })
                    .then(function(newUser){
                        return res.status(201).json({ 'userId': newUser.id})
                    })
                    .catch(function(err){
                        return res.status(500).json({ 'error': 'cannot add user' });
                    })
                });
        }else{
            return res.status(900).json({ 'error': 'user already exist'});
        }
    })
    .catch(function(err) {
        return res.status(500).json({  'error': 'unable to verify user '});
    }), 

    login: function(){
        //TODO: to implement
    }
}