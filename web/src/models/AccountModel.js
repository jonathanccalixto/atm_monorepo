import Api from '../services/Api'
import { ApiError } from '../services/Api/error'

export const AccountModel = {
  balance: async () => {
    try {
      const response = await Api.get('/balance')
      const { payload, messages } = response.data

      return [true, payload, messages]
    } catch (error) {
      if (error instanceof ApiError) {
        const { payload, messages } = error.response.data

        return [false, payload, messages]
      }

      return [false, {}, ['Unexpected error, try again later']]
    }
  },
}
