// Model
const Room = require('../model/room')
// Utils
const ApiState = require('../utils/apiState')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError');
const { successHandle } = require('../utils/resHandle.js')

// [GET] 取得所有房型 api/rooms
const getRoomList = catchAsync(async (req, res, next) => {

  const rooms = await Room.find()
  // 回傳錯誤
  if (!rooms) return next(new AppError(ApiState.FIELD_MISSING))

  // 成功
  successHandle({ res, data: rooms })
})

// [GET] 取得單一房型細節 api/room/{id}
const getSingleRoom = catchAsync(async (req, res, next) => {

  const rooms = await Room.find()
  // 回傳錯誤
  if (!rooms) return next(new AppError(ApiState.FIELD_MISSING))

  // 成功
  successHandle({ res, data: rooms })
})

// [POST] 預約房型 api/room/{id}
const reserveRoom = catchAsync(async (req, res, next) => {

  const rooms = await Room.find()
  // 回傳錯誤
  if (!rooms) return next(new AppError(ApiState.FIELD_MISSING))

  // 成功
  successHandle({ res, data: rooms })
})

// [DELETE] 清除所有預約 api/rooms
const cancelReserveRooms = catchAsync(async (req, res, next) => {

  const rooms = await Room.find()
  // 回傳錯誤
  if (!rooms) return next(new AppError(ApiState.FIELD_MISSING))

  // 成功
  successHandle({ res, data: rooms })
})

module.exports = {
  getRoomList,
  getSingleRoom,
  reserveRoom,
  cancelReserveRooms
}