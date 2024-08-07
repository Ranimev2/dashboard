document.getElementById('submitButton').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const responseContainer = document.getElementById('responseContainer');

    const apiKey = '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'; // Ganti dengan API key Anda
    const endpoint = 'https://api.openai.com/v1/completions'; // Endpoint GPT-3

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'text-davinci-003', // Atau model yang sesuai
            prompt: inputText,
            max_tokens: 100
        })
    });

    const data = await response.json();
    responseContainer.textContent = data.choices[0].text;
});
