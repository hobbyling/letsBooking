/*
  Example

  new AppError(ApiState.FIELD_MISSING)
*/
const ApiState = require('./apiState')

class AppError extends Error {
  constructor({
    message,
    status = 0,
    statusCode = 500
  }) {
    super(message)

    this.stack = ''
    this.statusCode = statusCode // Http 狀態碼
    this.status = status // 客製化狀態碼
    this.message = message // 錯誤訊息
    this.isOperational = true
    /*
    `Error.captureStackTrace` 函數
      [Systax] Error.captureStackTrace(targetObject[, constructorOpt])
      [Caption]
      Creates a .stack property on targetObject,
      which when accessed returns a string
      representing the location in the code at which
      Error.captureStackTrace() was called.

      第一個參數要放 Object 物件，第二個參數則放選填的 function
      它的作用是捕捉當前堆疊的路徑，並在傳入的物件裡（第一個參數）建立一個 stack 屬性來儲存
      如果有傳入第二個參數，則會當成這次堆疊調用的最終站，程式只會跑到這個函數，也就是 this.constructor 被調用之前
    */
    // A non-standard V8 function that creates the stack property on an Error instance.
    Error.captureStackTrace(this, this.constructor)
    console.error('stack', this.stack)
  }
}


module.exports = AppError