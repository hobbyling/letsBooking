const apiState = {
  FAIL: {
    status: 0,
    message: '失敗',
    statusCode: 400
  },
  SUCCESS: {
    status: 1,
    message: '成功',
    statusCode: 200
  },
  FIELD_MISSING: {
    status: 2,
    message: '資料欄位有誤或缺少欄位',
    statusCode: 400
  },
  DATA_EXIST: {
    status: 3,
    message: '資料已存在',
    statusCode: 400
  },
  DATA_NOT_EXIST: {
    status: 4,
    message: '資料不存在',
    statusCode: 400
  },
  UPDATE_FAILED: {
    status: 5,
    message: '更新失敗',
    statusCode: 400
  },
  DUPLIDATE_FIELD: {
    status: 6,
    message: '欄位重複',
    statusCode: 400
  },
  NOT_LOGIN: {
    status: 7,
    message: '尚未登入，請先登入',
    statusCode: 401
  },
  LOGIN_FAIL: {
    status: 8,
    message: 'Email或密碼錯誤',
    statusCode: 401
  },
  MISS_FILE_FILE: {
    status: 9,
    message: '尚未上傳檔案',
    statusCode: 400
  },
  FILE_FAIL: {
    status: 9,
    message: '上傳檔案發生錯誤',
    statusCode: 400
  },
  ROUTER_NOT_FOUND: {
    status: 9000,
    message: '找不到路由',
    statusCode: 400
  },
  HTTP_METHOD_NOT_ALLOWED: {
    status: 9001,
    message: '請求方法不允許',
    statusCode: 400
  },
  MAINTAIN: {
    status: 9002,
    message: '維護中，請稍後再試',
    statusCode: 503
  },
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: '發生伺服器錯誤，請稍後再試',
    statusCode: 500
  },
  SYNTAX_ERROR: {
    status: 5001,
    message: 'Syntax Error，語法結構錯誤或非 JSON 格式',
    statusCode: 400
  },
  REFERENCE_ERROR: {
    status: 5002,
    message: 'Reference Error，參考找不到',
    statusCode: 400
  },
  TYPE_ERROR: {
    status: 5003,
    message: 'Type Error，型態錯誤',
    statusCode: 400
  },

}

module.exports = apiState