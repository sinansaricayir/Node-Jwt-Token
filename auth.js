const jwt = require('jsonwebtoken')
module.exports = (req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decodedToken = jwt.verify(token,'secretkey')
        next();
    } catch(error){
        if(error.name === "TokenExpiredError"){
            return res.status(401).send({
                message: 'Token Süresi Dolmuştur !',
            })
        }else if(error.name==="JsonWebTokenError"){
            return res.status(401).send({
                message: 'Geçersiz Bir Token Veya İmza İle Erişmeye Çalışma !',
            })
        }else{
            return res.status(401).send({
                message: 'Yetkisiz Erişim !',
            })
        }
    }
}