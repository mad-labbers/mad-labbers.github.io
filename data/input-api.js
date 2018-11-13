let userResponses = [];

function saveUserResponses() {
    localStorage.setItem('userResponses', JSON.stringify(userResponses));
}


const inputApi = {
    getAll() {
        const json = localStorage.getItem('userResponses');
        if(json) {
            userResponses = JSON. parse(json);
        }
        return userResponses;
    },
    
    add(userResponse) {
        // 1. add to our array
        userResponses.push(userResponse);
        // 2. save array to localStorage
        saveUserResponses();
    }
};

export default inputApi;
