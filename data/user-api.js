function saveUsers(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

const userApi = {

    getAll() {
        return JSON.parse(localStorage.getItem('user'));
    },

    add(user) {
        saveUsers(user);
    }
};

export default userApi;