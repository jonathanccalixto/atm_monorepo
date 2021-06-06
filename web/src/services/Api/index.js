import axios from 'axios'
import { ApiError } from './error'

const host = process.env.REACT_APP_API_HOST ?? 'http://localhost'
const port = process.env.REACT_APP_API_PORT ?? 3003

const api = axios.create({ baseURL: `${host}:${port}` })

api.defaults.headers['App-Origin'] = 'web'

const convertResponseToHpptResponse = ({
  data,
  headers,
  status: statusCode,
}) => {
  return { data, headers, statusCode }
}

const request = async (method, endpoint, options) => {
  const params = options.params ?? {}
  const data = options.data ?? {}
  const headers = options.headers ?? {}

  try {
    const response =
      method === 'get' || method === 'delete'
        ? await api.request({ url: endpoint, method, params, headers })
        : await api.request({ url: endpoint, method, params, headers, data })

    return convertResponseToHpptResponse(response)
  } catch (error) {
    if (!error.response) throw error

    const response = convertResponseToHpptResponse(error.response)
    throw new ApiError({
      message: error.message,
      response,
    })
  }
}

export default {
  setAuthorization: token => {
    api.defaults.headers.Authorization = token ? `Bearer ${token}` : null
  },

  get: (endpoint, options = {}) =>
    request('get', endpoint, { ...options, data: {} }),

  post: (endpoint, options = {}) => request('post', endpoint, options),

  put: (endpoint, options = {}) => request('put', endpoint, options),

  patch: (endpoint, options = {}) => request('patch', endpoint, options),

  delete: (endpoint, options = {}) =>
    request('delete', endpoint, { ...options, data: {} }),
}
