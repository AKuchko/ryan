import client from '@/http/client'

class UserService {
    _user_api = '/api/users'

    deleteUser () {
        client.delete(this._user_api + '/:id')
    }

    updateUsername ({ username }) {
        client.put(this._user_api + '/:id', { username })
    }
}