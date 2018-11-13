function saveUserResponses(userResponse) {
    localStorage.setItem('userResponse', JSON.stringify(userResponse));
}


const inputApi = {
    getAll() {
        return JSON.parse(localStorage.getItem('userResponse'));
    },
    
    add(userResponse) {
        // 1. add to our array
        // userResponses.push(userResponse);
        // 2. save array to localStorage
        saveUserResponses(userResponse);
    }
};

export default inputApi;
