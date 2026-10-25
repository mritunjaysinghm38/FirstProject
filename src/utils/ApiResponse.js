class ApiResponse{
  constructor(statusCode, data, message="succuss"){
    this.statusCode=statusCode
    this.data = data
    this.message=message
    this.success=statusCode<400
  }
}