const express = require('express')
const router = express.Router()
// Controller
const roomController = require('../controller/room')

router
  .route('/:id')
  .get(roomController.getSingleRoom)
  .post(roomController.reserveRoom)

module.exports = router