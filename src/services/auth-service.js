import client from '@/http/client'

class AuthService {
  _user_api = '/api/users'

  register ({ phoneNumber, username = 'Username' }) {
    return client.post(this._user_api, { phoneNumber, username })
  }

  fetchUserInfo () {
    client.get(this._user_api + '/:id')
  }
}

export default new AuthService()
