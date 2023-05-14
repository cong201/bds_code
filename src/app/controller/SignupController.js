class SignupController{
    show(req, res, next){ 
        res.render('./signup/signup')
    }
}

module.exports = new SignupController