const api_url = "https://api.api-ninjas.com/v1/quotes";
const api_key = "9RvyzPOsgfF7jIaGRoivfw==wnl8m6ftR5QQ9kED";

const dailyQuote = document.getElementById("quote");
const author = document.getElementById("author");


async function getQuote(url) {
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': api_key,
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            throw new Error(`Error: ${res.statusText}`);
        }

        const data = await res.json();
        dailyQuote.innerHTML = data[0].quote;
        author.innerHTML = data[0].author;
        console.log(data);
    } catch (error) {
        console.error('Error fetching quote:', error.message);
    }
}

getQuote(api_url);
