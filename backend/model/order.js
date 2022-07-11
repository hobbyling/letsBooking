const { Schema, model, SchemaTypes } = require('mongoose')
const validator = require('validator')

const orderSchema = new SchemaTypes({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  tel: {
    type: String,
    required: true,
    validate: [validator.isMobilePhone({ options: 'zh-TW' })]
    // validate: {
    //   validator: (value) => {
    //     return validator.isMobilePhone(value, 'zh-TW')
    //   }
    // }
  },

  date: {
    type: [{
      type: String
    }],
  },

  roomId: {
    type: Schema.Types.ObjectId,
    ref: 'Room'
  }
})

const Order = model('Order', orderSchema)
module.exports = Order