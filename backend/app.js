const express = require('express')
const morgan = require('morgan')
const app = express()
const ApiState = require('./utils/apiState')
const cors = require('cors')
const corsOptions = require('./utils/cors')

// Router
const roomsRouter = require('./routes/rooms')
const roomRouter = require('./routes/room')
// Controller
const globalErrorHandler = require('./utils/globalError')
const AppError = require('./utils/appError')

app.use(morgan('dev'))
app.use(cors(corsOptions))
app.use(express.json())

// Router
app.use('/api/rooms', roomsRouter)
app.use('/api/room', roomRouter)

// 無此路由
app.use('*', (req, res, next) => {
  next(new AppError(ApiState.ROUTER_NOT_FOUND))
})

// 處理錯誤
app.use(globalErrorHandler)

module.exports = app