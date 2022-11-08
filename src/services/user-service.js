const client = require('../http/client')

class UserService {
    getAllUsers() {
        client.get('/api/users', )
    }

    getUser({ id }) {
        client.get(`/api/users/${id}`)
    }

    updateUserInfo({ id, username, password, email, photo, posts, subscriptions, role }) {
        client.put(`/api/users/${id}`, {username, email, password, photo, posts, subscriptions, role})
    }

    deleteUser({ id }) {
        client.delete(`/api/users/${id}`)
    }
}

module.exports = new UserService