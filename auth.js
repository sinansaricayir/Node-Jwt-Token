const jwt = require('jsonwebtoken')
module.exports = (req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decodedToken = jwt.verify(token,'secretkey')
        next();
    } catch(error){
        return res.status(401).send({
            message: 'Yetkisiz Erişme !',
            status:-1   
        })
    }
}