const client = require('../http/client')

class PostService {
    getPosts() {
        client.get('/api/posts')
    }

    getUserPosts({ user_id }) {
        client.get(`/posts/${user_id}`)
    }

    publishPost({ user_id, image, caption }) {
        client.post('/posts', { user_id, image, caption, comments: []})
    }

    editPost(id, { image, caption }) {
        client.put(`/posts/${id}`, { image, caption })
    }
}