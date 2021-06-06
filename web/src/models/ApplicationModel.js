import { ApiError } from '../services/Api/error'

export const handleResponse = async request => {
  try {
    const response = await request()
    const { payload, messages } = response.data

    return [true, payload, messages]
  } catch (error) {
    if (error instanceof ApiError) {
      const { payload, messages } = error.response.data

      return [false, payload, messages]
    }

    return [false, {}, ['Unexpected error, try again later']]
  }
}
