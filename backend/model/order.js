const { Schema, model, SchemaTypes } = require('mongoose')

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