// Imports 
import express from 'express';

// Instantiate sever
var server = express();

//Configure routes
server.get('/', function(req, res){
        res.setHeader('Content-Type','text/html');
        res.status(200).send('<h1>Bonjour je vais bient et toi</h1>')
});
//launch server
server.listen(8080, function(){
    console.log('Server en ecoute :)');
});