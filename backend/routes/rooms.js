const express = require('express')
const router = express.Router()
// Controller
const roomController = require('../controller/room')

// 取得所有房型
router
  .route('/')
  .get(roomController.getRoomList)
  .delete(roomController.cancelReserveRooms)

module.exports = router