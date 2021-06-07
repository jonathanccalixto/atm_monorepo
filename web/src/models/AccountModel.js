import Api from '../services/Api'

import { handleResponse } from './ApplicationModel'

export const AccountModel = {
  balance: async () => {
    const [success, payload, messages] = await handleResponse(() =>
      Api.get('/balance'),
    )

    return [success, payload, messages]
  },

  deposit: async data => {
    const [success, payload, messages] = await handleResponse(() =>
      Api.post('/deposit', { data }),
    )

    return [success, payload, messages]
  },

  withdraw: async data => {
    const [success, payload, messages] = await handleResponse(() =>
      Api.post('/withdraw', { data }),
    )

    return [success, payload, messages]
  },
}
