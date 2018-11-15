let stories = [];

function saveStories() {
    localStorage.setItem('stories', JSON.stringify(stories));
}

const storiesApi = {
    getAll() {
        const json = localStorage.getItem('stories');
        if(json) {
            stories = JSON.parse(json);
        }
        return stories;
    },
    add(story) {
        stories.push(story);
        saveStories();
    }
};

export default storiesApi;