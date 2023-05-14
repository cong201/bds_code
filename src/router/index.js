const newsRouter = require('./news')
const loginRouter = require('./login')
const signupRouter = require('./signup')

function route(app){

    app.use('/news', newsRouter)

    app.use('/login', loginRouter)

    app.use('/signup', signupRouter)
    
}

module.exports = route;