let URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let wordInput = document.querySelector(".word");
let responseDiv = document.querySelector(".response");

async function respond() {
    const input = wordInput.value.trim();

    if (!input) {
        responseDiv.textContent = "Please enter a word.";
        return;
    }

    try {
        let newURL = `${URL}${input}`;
        let resp = await fetch(newURL);

        if (!resp.ok) {
            throw new Error("Word not found");
        }

        let data = await resp.json();

        let definition = data[0]?.meanings[0]?.definitions[0]?.definition;
        let partOfSpeech = data[0]?.meanings[0]?.partOfSpeech;
        let phonetic = data[0]?.phonetic || "";

        responseDiv.innerHTML = `
            <strong>${input}</strong> <em>(${partOfSpeech})</em><br>
            <span>${definition}</span><br>
            <small>${phonetic}</small>
        `;

    } catch (error) {
        responseDiv.textContent = "Word not found. Try another one.";
        console.error("Error fetching definition:", error);
    }
}
