const client = require('../http/client')
const storageService = require('./common/storage')
// const Mailer = require('./common/mailer')

const ACCESS_TOKEN = 'app:access'
const REFRESH_TOKEN = 'app:refresh'

class AuthService {
  _access = null
  _refresh = null

  get token() {
    return { access: this._access, refresh: this._refresh }
  }

  set token(token) {
    this._access = token.access
    this._refresh = token.refresh

    if (token.access) {
      storageService.saveStorageItem(ACCESS_TOKEN, token.access)
      storageService.saveStorageItem(REFRESH_TOKEN, token.refresh)
    }
    else {
      storageService.deleteStorageItem(ACCESS_TOKEN)
      storageService.deleteStorageItem(REFRESH_TOKEN)
    }
  }

  getAuthHeader() {
    return this.token.access ? `Bearer ${this.token.access}` : undefined
  }

  removeAuthToken() {
    this.token = {
      access: null,
      refresh: null
    }
  } 

  checkMail(mail) {
    client.post('/api/auth/mailer', { mail: mail })
  }

  registration(body) {
    client.post('/api/auth/reg', { body })
  }

  login({ email, password }) {
    return client.post('/api/auth/login', { email, password }).then(token => {
      this.token = token.data
    })
  }

  refreshAuthToken({ refresh }) {
    return client.post('/api/auth/token/refresh', { refresh }).then(token => {
      this.token = token.data
    })
  }
}

module.exports = new AuthService()
