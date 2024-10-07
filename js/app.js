// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Get the buttons, label, and audio element
var buttons = document.querySelectorAll('.button');
var label = document.getElementById('label');
var audio = document.getElementById('sound');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Add event listeners to each animal button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the label and sound associated with the clicked button
        var animalLabel = this.getAttribute('data-label');
        var soundSrc = this.getAttribute('data-sound');

        // Update the displayed label
        label.textContent = animalLabel;

        // Play the sound (if the sound file exists)
        audio.src = soundSrc;
        audio.play();

        // Use the speakNow function to convert text to speech
        speakNow(animalLabel);
    });
});
