function saveUserResponses(userResponse) {
    localStorage.setItem('userResponse', JSON.stringify(userResponse));
}

const inputApi = {
    getAll() {
        return JSON.parse(localStorage.getItem('userResponse'));
    },
    
    add(userResponse) {
        //Save array to localStorage
        saveUserResponses(userResponse);
    }
};

export default inputApi;
