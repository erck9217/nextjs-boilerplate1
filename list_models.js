async function listModels() {
    try {
        const key = "AIzaSyBChJKjIeuHxQxD6aMLdFwvkmu6ce5dl0E";
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error:", error);
    }
}

listModels();
