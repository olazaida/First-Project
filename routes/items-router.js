const express = require('express')

const ItemsCtrl = require('../controllers/items-ctrl')

const router = express.Router()

router.post('/item', ItemsCtrl.createItems)
router.put('/item/:id', ItemsCtrl.updateItems)
router.delete('/item/:id', ItemsCtrl.deleteItem)
router.get('/item/:id', ItemsCtrl.getItemsById)
router.get('/item', ItemsCtrl.getItems)

module.exports = router

