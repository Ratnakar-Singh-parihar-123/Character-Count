let textArea = document.getElementById('inputText');
let counts = document.getElementById('Count');

textArea.addEventListener('input', function() {
    counts.textContent = textArea.value.length;
});