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


module.exports = router