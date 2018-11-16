function saveUserResponses(userResponse) {
    localStorage.setItem('userResponse', JSON.stringify(userResponse));
}

const inputApi = {
    getAll() {
        return JSON.parse(localStorage.getItem('userResponse'));
    },
    
    add(userResponse) {
        saveUserResponses(userResponse);
    }
};

export default inputApi;
