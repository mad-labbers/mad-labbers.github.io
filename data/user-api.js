let users = [];

function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

const userApi = {

    getAll() {
        const json = localStorage.getItem('users');
        if(json) {
            users = JSON.parse(json);
        }
        return users;
    },

    add(user) {
        user['name'] = JSON.parse(localStorage.getItem('user'));
        users.push(user);
        saveUsers();
    }
};

export default userApi;