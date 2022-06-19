class Helper {
  sendResponse = (res: any, statusCode: any, data: any) => {
    return res.status(statusCode).json({ result: data })
  }
}

export default new Helper()