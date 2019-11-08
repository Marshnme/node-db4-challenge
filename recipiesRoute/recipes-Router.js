const express = require('express');

const model = require('./recipes-model');
const router = express.Router();


router.get('/',(req,res) => {
    model.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes' });
    });
})

router.get('/:id/list',(req,res) => {
    model.getShoppingList(req.params.id)
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get list' });
    });
})

router.get('/:id/guide',(req,res) => {
    model.getInstructions(req.params.id)
    .then(guide => {
        res.status(200).json(guide)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get guide' });
    });
})