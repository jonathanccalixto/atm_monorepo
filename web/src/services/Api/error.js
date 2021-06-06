class ApiError extends Error {
  constructor({ message, response }) {
    super(message)

    Object.setPrototypeOf(this, ApiError.prototype)
    this.name = 'ApiError'

    this.response = response
  }
}

export { ApiError }
