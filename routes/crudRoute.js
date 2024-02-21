const express = require('express')
const router = express.Router()
const {getCrud,postCrud, deleteCrud, updateCrud} = require('../controller/crudController')


router.post('/', postCrud);

router.get("/", getCrud);

router.delete( "/:id" , deleteCrud ); 

router.patch("/:id", updateCrud ) ; 


module.exports = router