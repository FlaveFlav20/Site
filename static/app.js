// Change greeting text on button click
/*const greetingElement = document.getElementById('greeting');
const changeGreetingButton = document.getElementById('changeGreeting');

changeGreetingButton.addEventListener('click', () => {
    const greetings = ["Hello!", "Welcome!", "Hi there!", "Greetings!", "Howdy!"];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    greetingElement.innerText = randomGreeting;
});

// Load dynamic content on button click
const loadContentButton = document.getElementById('loadContent');
const dynamicContentDiv = document.getElementById('dynamicContent');

loadContentButton.addEventListener('click', () => {
    dynamicContentDiv.innerHTML = "<p>Loading new content...</p>";
    
    // Simulate fetching data or loading content dynamically
    setTimeout(() => {
        const newContent = `
            <h3>New Dynamic Content</h3>
            <p>This content was dynamically added to the page using JavaScript!</p>
        `;
        dynamicContentDiv.innerHTML = newContent;
    }, 1000);  // Simulate a delay (e.g., fetching from an API)
});
*/