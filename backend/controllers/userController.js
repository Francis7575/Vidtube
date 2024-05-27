const { users } = require('../models/userModel')

const getUserByEmail = (email) => {
    const foundUser = users.find(user => user.email === email)
    if (foundUser) {
        return foundUser
    } else {
        return false
    }
}

const addUser = (username, email, password) => {
    const newUser = {
        id: users.length + 1,
        username,
        email,
        password
    }
    users.push(newUser)
    return newUser
}

module.exports = {addUser, getUserByEmail} 