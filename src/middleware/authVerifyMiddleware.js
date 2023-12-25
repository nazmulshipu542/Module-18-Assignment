//Create Token
const jwt = require('jsonwebtoken');
module.exports=(req, res)=>{
    let payload = {
        exp:Math.floor(Date.now()/1000) + (60*60),
        data:{name: "Rabbil Hasan", city: 'Dhaka', admin: true}
    }
    let token = jwt.sign(payload, "SecretKey123");
    res.send(Token);
}

//Decode Token
exports.decodeToken=(req, res)=>{
    let token = req.headers['token-key'];
    jwt.verify(token, "SecretKey123", function(err, decoded){
        if(err){
            res.status(401).json({status: "Invalid token", data: err})
        }
        else{
            res.status(200).json({status: "Valid token", data: decoded})
        }
    })
}