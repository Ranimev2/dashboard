// script.js
const apiKey = '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'; // Replace with your OpenAI API key
const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatLog = document.getElementById('chat-log');

sendBtn.addEventListener('click', async () => {
    const userInputValue = userInput.value.trim();
    if (userInputValue !== '') {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    prompt: userInputValue,
                    max_tokens: 100,
                    temperature: 0.5,
                }),
            });
            const data = await response.json();
            const responseText = data.choices[0].text;
            chatLog.innerHTML += `<p>You: ${userInputValue}</p><p>ChatGPT: ${responseText}</p>`;
            userInput.value = '';
        } catch (error) {
            console.error(error);
        }
    }
});
