function startVoiceInput() {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Your browser does not support voice recognition.");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-IN";   // switch to "hi-IN" for Hindi
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById("queryBox").value = transcript;
    };

    recognition.onerror = function(event) {
        alert("Error occurred: " + event.error);
    };

    recognition.start();
}