const client = require('../http/client')

class UserService {
    getAllUsers() {
        client.get('/api/users', )
    }

    getUser({ id }) {
        client.get(`/api/users/${id}`)
    }

    updateUserInfo(id, { username, password, email, photo, posts, role }) {
        client.put(`/api/users/${id}`, {username, email, password, photo, posts, role})
    }

    updateSubscriptions(id, { subscriptions }) {
        client.put(`/api/users/${id}`, { subscriptions })
    }

    deleteUser({ id }) {
        client.delete(`/api/users/${id}`)
    }
}

module.exports = new UserService