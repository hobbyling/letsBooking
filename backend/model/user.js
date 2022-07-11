const { Schema, model } = require('mongoose')
const validator = require('validator')


const userSchema = new Schema({
  name: {
    type: String,
    required: [true, '名字為必填']
  },

  email: {
    type: String,
    required: [true, 'Email為必填'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, '無效Email，請提供 Email 正確格式']
  },

  // 訂單編號
  orderId: {
    type: Schema.Types.ObjectId,
    ref: 'Room'
  },

  // 建立時間，轉為 Timestamp 以方便前端好處理
  createdAt: {
    type: Number,
  },

  // 更新時間，轉為 Timestamp 以方便前端好處理
  updatedAt: {
    type: Number,
  },

}, {
  versionKey: false,
  timestamps: {
    currentTime: () => Date.now(),
  },
})

const User = model('User', userSchema)
module.exports = User