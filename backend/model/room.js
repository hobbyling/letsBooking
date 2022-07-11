const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  // 房名
  name: {
    type: String,
    required: [true, '名字為必填']
  },

  imageUrl: {
    type: Array,
    required: [true, '房型圖片為必填']
  },
  // 平日(一~四)價格
  normalDayPrice: {
    type: Number,
    required: [true, '平日價格為必填']
  },
  // 假日(五~日)價格
  holidayPrice: {
    type: Number,
    required: [true, '假日價格為必填']
  },

  // 房型詳細資訊
  descriptionShort: {
    type: {
      'GuestMin': { type: Number, required: [true, ['房客人數最小限制為必填']] },
      'GuestMax': { type: Number, required: [true, ['房客人數最小限制為必填']] },
      // 床型
      'Bed': {
        type: [
          { type: String }
        ],
        required: [true, '床型為必填'],
        enum: ["Single", "Double"]
      },
      // 衛浴數量
      'Private-Bath': {
        type: Number,
        required: [true, '衛浴數量為必填'],
      },
      // 房間大小
      'Footage': {
        type: Number,
        required: [true, '房間大小為必填'],
      },
    }
  },

  // 描述
  description: {
    type: String,
    required: [true, '描述為必填']
  },

  // checkout 相關時間
  checkInAndOut: {
    // 最早 checkIn 時間，格式：15:00
    checkInEarly: {
      type: String,
      required: [true, '最早 checkIn 時間為必填']
    },
    // 最晚 checkIn 時間，格式：15:00
    checkInLate: {
      type: String,
      required: [true, '最晚 checkIn 時間為必填']
    },
    // checkout 時間，格式：15:00
    checkOut: {
      type: String,
      required: [true, 'checkout為必填']
    },
  },

  // 設施
  amenities: {
    'Wi-Fi': {
      type: Boolean,
      required: [true, 'Wifi 為必填']
    },
    // 早餐
    'Breakfast': {
      type: Boolean,
      required: [true, '早餐 為必填']
    },
    // Mini Bar
    'Mini-Bar': {
      type: Boolean,
      required: [true, 'Mini Bar 為必填']
    },
    // Room Service
    'Room-Service': {
      type: Boolean,
      required: [true, 'Room Service 為必填']
    },
    // 電視
    'Television': {
      type: Boolean,
      required: [true, '電視 為必填']
    },
    // 空調
    'Air-Conditioner': {
      type: Boolean,
      required: [true, '空調 為必填']
    },
    // 冰箱
    'Refrigerator': {
      type: Boolean,
      required: [true, '冰箱 為必填']
    },
    // 沙發
    'Sofa': {
      type: Boolean,
      required: [true, '沙發 為必填']
    },
    // 漂亮的視野
    'Great-View': {
      type: Boolean,
      required: [true, '漂亮的視野 為必填']
    },
    // 禁止吸菸
    'Smoke-Free': {
      type: Boolean,
      required: [true, '禁止吸菸 為必填']
    },
    // 適合兒童
    'Child-Friendly': {
      type: Boolean,
      required: [true, '適合兒童 為必填']
    },
    // 寵物攜帶
    'Pet-Friendly': {
      type: Boolean,
      required: [true, '寵物攜帶 為必填']
    },
  },


  // 建立時間，轉為 Timestamp 以方便前端好處理
  createdAt: {
    type: Number,
  },

  // 更新時間，轉為 Timestamp 以方便前端好處理
  updatedAt: {
    type: Number,
  },
},
  {
    versionKey: false,
    timestamps: true
  })

const Post = model('Post', postSchema)

module.exports = Post