class LoginController{
    
    show(req, res , next){
        res.render('./login/login')
    }

}
module.exports = new LoginController

