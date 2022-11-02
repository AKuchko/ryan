import client from '@/http/client'

class AuthService {
  register ({ phoneNumber, nickname = 'Username' }) {
    console.log(phoneNumber, nickname)
    return client.post('/api/users', { phoneNumber, nickname })
  }
}

export default new AuthService()
