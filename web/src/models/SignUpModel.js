import Api from '../services/Api'

import { handleResponse } from './ApplicationModel'

export const SignUpModel = {
  signUp: async data => {
    const [success, payload, messages] = await handleResponse(() =>
      Api.post('/sign_up', { data }),
    )

    return [success, payload, messages]
  },
}
