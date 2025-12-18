let users = [];
let idCounter = 1;

function getAllUsers() {
    return users;
}

function getUserById(id) {
    return users.find(u => u.id === id);
}

function createUser(name) {
    const user = { id: idCounter++, name };
    users.push(user);
    return user;
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
};
