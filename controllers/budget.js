const express=require('express')
const budget=require('../models/budget')

//create a router object
const router = express.Router()

//register routes with the router
// index get /budget -> a list of income/expenses
router.get('/budget', (req, res)=>{
res.render('index.ejs',{budget:budget})
})


// new route get /budget/new -> page with a create form
router.get('/budget/new', (req, res)=>{
    res.render('budget/new.ejs')
})

// create route POST /budget/ -> create a new item, redirect to index
router.post('budget/', (req, res)=>{
    budget.create(req.body)
    res.redirect('/budget')
})

// show route /budget/:id -> page on an individual item
router.get('/budget/:id', (req, res)=>{
    res.render('budget/show.ejs', {budget: budget(req.params.id)
    })
})
module.exports=router