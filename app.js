const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const port = 3000
const router = express.Router()
const checkJwt = require('./auth')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))


router.post('/login',(req,res,next)=>{
    const {email} = req.body
    const token = jwt.sign({
        email: email,
        ad:'Sinan',
        exp: Math.floor(Date.now()/100)+60,
        issuer:'sinansaricayir@gmail.com'
    },'secretkey')
    res.send(token)
})

router.post('/posts',checkJwt,function (req,res,next){
    res.send('<h2> Selam Dünya </h2>')
})

router.get('/',(req,res,next)=>{
    res.send('Çalışıyor...')
})

app.use('/',router)

app.listen(port, ()=>{
    console.log(`localhost : ${port} çalışıyor`)
})