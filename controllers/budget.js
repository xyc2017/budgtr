const express=require('express')
const budgets=require('../models/budget')

//create a router object
const router = express.Router()

//register routes with the router
// index get /budget -> a list of income/expenses
router.get('/', (req, res)=>{
res.render('index.ejs',{budgets})
})


// new route get /budget/new -> page with a create form
router.get('/new', (req, res)=>{
    res.render('new.ejs')
})

// create route POST /budget/ -> create a new item, redirect to index
router.post('/', (req, res)=>{
    budgets.unshift(req.body)
    res.redirect('/budget')
})

// show route /budget/:id -> page on an individual item
router.get('/:id', (req, res)=>{
    res.render('show.ejs', {budget: budgets[req.params.id]
    })
})
module.exports=router