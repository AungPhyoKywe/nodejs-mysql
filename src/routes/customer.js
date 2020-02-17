const  express  = require('express');
const  router = express.Router();

const customController =require('../controllers/customerController');
router.get('/',customController.list);
router.post('/add',customController.save);
router.get('/delete/:id',customController.delete);
router.get('/edit/:id',customController.edit);
router.get('/create',customController.create);
router.post('/update/:id',customController.update);
module.exports = router;
