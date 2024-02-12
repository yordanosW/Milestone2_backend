const Food = require('../models/Food')

async function getAllFoods(req,res){
    try {
        const Foods = await Food.find()
        res.json(Foods)
    } catch (error) {
        console.log('error fetching all foods', error)
        res.status(500).json({message: 'error fetching all foods'})
    }
}

async function getFoodById(req,res){
    try {
        const { id } = req.params
        const food = await Food.findById(id)
        res.json(food)
    } catch (error) {
        console.log('error fetching  food', error)
        res.status(500).json({message: 'error fetching food'})
    }
}

async function createFood(req, res) {

    try {
         if(!req.body.profilePicture) req.body.profilePicture = undefined
         const food = await new Food(req.body).save()
         res.status(201).json(food)
    } catch (error) {
        console.log('error creating foods', error)
        res.status(500).json({message: 'error creating food'})
    }

}

module.exports = {
    getAllFoods,
    getFoodById,
    createFood,
}