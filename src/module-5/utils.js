/*
Name: Luis Morales
Date: Jul 17, 2023
*/

function updateUser(users, payload) {
    const userIndex = users.findIndex((user => user.id === payload.id));
    payload.name ? users[userIndex].name = payload.name : -1;
    payload.email ? users[userIndex].email = payload.email : -1;
    payload.hobbies ? users[userIndex].hobbies = payload.hobbies : -1;
}

function updateUserHobbies(users, payload) {
    const userIndex = users.findIndex((user => user.id === payload.id));

    const hobbies = payload.hobbies.reduce((acc, curr) => {
        let stored = users[userIndex].hobbies.find((hobby) => hobby === curr);
        if (stored) {
            stored = curr;
            acc.push(stored);
        } else {
            acc.push(curr);
        }
        return acc;
    }, []);

    users[userIndex].hobbies = [];
    users[userIndex].hobbies = hobbies;
}

function deleteUserHobby(users, payload) {
    const userIndex = users.findIndex((object => object.id === payload.id));
    const userHobbyIndex = users[userIndex].hobbies.findIndex((hobby => hobby === payload.hobby));
    users[userIndex].hobbies.splice(userHobbyIndex, 1);
}

function deleteUser(users, payload) {
    const userIndex = users.findIndex((object => object.id === payload.id));
    users.splice(userIndex, 1);
}

function findUser(users, payload) {
    return users.filter(user => user.id === payload.id);
}

function findHobbies(users, payload) {
    return findUser(users, payload)[0].hobbies;
}

module.exports = { updateUser, deleteUser, findUser, findHobbies, updateUserHobbies, deleteUserHobby }