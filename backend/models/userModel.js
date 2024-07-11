class User {
    constructor(id, username, email, password) {
        this.id = id
        this.username = username
        this.email = email
        this.password = password
    }
}

const users = [
    {
        id: 1,
        username: 'TestUser',
        email: 'admin231@gmail.com',
        password: '$2a$12$Zt138LWkPT9qkAXvSDgEL.YEjuaf/Sda.xdmzBejtRvjEBRDpWzPG' //helloworld
    }
]

module.exports = { User, users }