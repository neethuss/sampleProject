
const express = require('express')
const path = require('path')
const dbConnect = require('./models/usermongodb')
const app = express()
const crypto = require('crypto')
const session = require('express-session')
const userrouter = require('./routes/userroutes')
const adminrouter = require('./routes/adminroutes')
const nocache = require('nocache')

app.set('view engine','ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(nocache())

app.use(session({
  secret:crypto.randomUUID(),
  saveUninitialized:true,
  resave:false
}))

app.use((req,res,next)=>{
  res.locals.message = req.session.message
  delete req.session.message
  next()
})

app.use('/',userrouter)
app.use('/admin',adminrouter)

app.listen(7000,()=>{
console.log('port connected')
})

