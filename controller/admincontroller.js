const Collection = require("../models/usermongodb")

const admin = ('/',(req,res)=>{
  if(req.session.adminDetails){
    res.render('adminDashboard')
  }else{
    res.render('admin')
  }
})

const credentials = {
  email:"Neethu@gmail.com",
  password:"12345"
}

const adminLogin = ('/',async(req,res)=>{
  const { email, password } = req.body;
  if (email === credentials.email && password === credentials.password) {
    req.session.adminDetails = email;
    res.redirect('/admin');
  } else {
    req.session.message = {
      type: 'danger',
      message: 'Invalid admin credentials!'
    };
    res.redirect('/');
  }
})

const dashboard = ('/dashboard',(req,res)=>{
 if(req.session.adminDetails){
  res.render('dashboard')
 }else{
  res.redirect('/admin')
 }
})

module.exports = {
  admin, adminLogin ,dashboard
}