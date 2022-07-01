// Model
const Post = require('../model/post')
// Utils
const ApiState = require('../utils/apiState')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError');
const { successHandle } = require('../utils/resHandle.js')

const getPostList = catchAsync(async (req, res, next) => {

  const post = await Post.find()
  // 回傳錯誤
  if (!post) return next(new AppError(ApiState.FIELD_MISSING))

  // 成功
  successHandle({ res, data: post })
})

module.exports = {
  getPostList,
}