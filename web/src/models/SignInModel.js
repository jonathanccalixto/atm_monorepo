import Api from '../services/Api'
import { ApiError } from '../services/Api/error'

export const SignInModel = {
  signIn: async data => {
    try {
      const response = await Api.post('/sign_in', { data })
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
