const express = require('express')
const app = express()
const PORT=3000
const morgan=require('morgan') // logger - middleware
const budgetRoute=require('./controllers/budget') // import router
const budget=require('./models/budget')

app.set('view engine', 'ejs')
app.use(morgan('tiny'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true})) // parse html form data -> req.body
app.use('/budget', budgetRoute)

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.listen(PORT, ()=>{
    console.log(`listening to ${PORT}`)
})