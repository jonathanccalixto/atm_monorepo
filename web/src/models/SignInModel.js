import Api from '../services/Api'

import { handleResponse } from './ApplicationModel'

export const SignInModel = {
  signIn: async data => {
    const [success, payload, messages] = await handleResponse(() =>
      Api.post('/sign_in', { data }),
    )

    return [success, payload, messages]
  },
}
