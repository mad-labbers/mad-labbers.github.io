let words = [];

function saveWords() {
    localStorage.setItem('words', JSON.stringify(words));
}


const inputApi = {
    getAll() {
        const json = localStorage.getItem('words');
        if(json) {
            words = JSON. parse(json);
        }
        return words;
    },
    
    add(word) {
        // 1. add to our array
        words.push(word);
        // 2. save array to localStorage
        saveWords();
    }
};

export default inputApi;