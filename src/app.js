const path = require('path')
const express = require('express')
const app = express()
const port = 5000
const morgan = require('morgan')
const route = require('./router')
const hbs = require('express-handlebars')
const db = require('./config/db')
const cors = require('cors')
const session = require('express-session')

db.connect()

app.use(cors({
  origin:['http://localhost:5000','http://127.0.0.1:5000'],
  credentials:true
}));

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


app.engine('hbs', hbs.engine({
    extname: 'hbs'
}))
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources','views'))
console.log(path.join(__dirname, 'resources','views'))

app.get('/', (req, res, next) => {
  res.render('home')
})



route(app)


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})