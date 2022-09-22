//Import
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'fjsndkw830mcmw232nedkalcw9284bnchashakj2ndjdkjw7rf6wcolqw94bwn43bnaj2ndcjm4m5nsj3ndj1havd62vdj48db2';

//Export fonction
module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {
            expiresIn:'1h'
        })
     }
}