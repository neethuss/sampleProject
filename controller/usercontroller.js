const Collection = require("../models/usermongodb")

const login = (req,res)=>{
  if(req.session.user){
    res.render('home')
  }else{
    res.render('login')
  }
}

const signup =('/signup',(req,res)=>{
  if(req.session.user){
    res.redirect('/home')
  }else{
    res.render('signup')
  }
})

const home = ('/home',(req,res)=>{
  if(req.session.user){
    res.render('home')
  }else{
    res.redirect('/')
  }
})

const userLogin = ('/',async(req,res)=>{
  try{
    const check = await Collection.findOne({name:req.body.name})
    if(check.password==req.body.password){
      req.session.user=true
      res.redirect('/home')
    }else{
      res.redirect('/')
    }
  }catch{
    res.redirect('/')
  }
})

const userSignup = async (req, res) => {
  const { name, email, password } = req.body;

  // Simple custom validation for required fields
  if (!name || !email || !password) {
    return res.status(400).send('Please provide all required fields');
  }

  const data = {
    name,
    email,
    password,
  };

  try {
    const existingUser = await Collection.findOne({ name });
    if (existingUser) {
      return res.status(400).send('User with this name already exists');
    }

    await Collection.create(data);
    req.session.user = true;
    console.log(data);
    res.redirect('/home');
  } catch (error) {
    console.error(error);
    res.redirect('/');
  }
};

  const logout =('/logout',(req,res)=>{
    if(req.session.user){
      req.session.destroy((err)=>{
        if(err){
          console.log('Error',err)
        }
        res.redirect('/')
      })
    }else{
      res.redirect('/')
    }
  })


module.exports = {
  login,userLogin,signup,userSignup,home,logout
}