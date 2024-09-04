// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get elements from the DOM
    const startButton = document.getElementById('start-button');
    const submitNameButton = document.getElementById('submit-name-button');
    const startScreen = document.getElementById('start-screen');
    const nameScreen = document.getElementById('name-screen');
    const playerNameInput = document.getElementById('player-name');

    // Function to show the name input screen
    function showNameScreen() {
        startScreen.classList.remove('active');
        nameScreen.classList.add('active');
    }

    // Function to handle name submission
    function handleNameSubmission() {
        const playerName = playerNameInput.value.trim();
        if (playerName) {
            console.log(`Player name is: ${playerName}`);
            // Here you can continue to the next part of the game or save the name for later use
            alert(`Welcome, ${playerName}!`);
        } else {
            alert('Please enter your name!');
        }
    }

    // Add event listeners
    startButton.addEventListener('click', showNameScreen);
    submitNameButton.addEventListener('click', handleNameSubmission);
});
