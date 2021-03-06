let express = require('express'); 
let router = express.Router(); 

let controller = require('../../controllers/type_insulin_controller'); 

/// TYPE INSULIN ROUTES ///

/** REGISTER the new type of insulin data */
router.post('/', controller.register); 
/** GET type of insulin data */
router.get('/', controller.get_all); 
/** DELETE all type of insulin data registered */
router.delete('/', controller.delete_all); 

/** DELETE the type of insulin data with its name */
router.delete('/:name', controller.delete_type); 

/** GET type of insulin by its type */
router.get('/:type', controller.get_bytype); 
module.exports = router; 