const router = require('express').Router()
//check what .Router() does for our routes (controller)
const {
    getAllFoods,
    getFoodById,
    createFood,
} = require('../controllers/Food')

//get all Foods
router.get('/all', getAllFoods)

//get foods by Id
router.get('/:id', getFoodById)

//create new Food
router.post('/', createFood)

//Delete Food


//Update Food


//get all reviews

//get reviews by id

//create new review and rating

//update review and rating

//delete review and rating


module.exports = router