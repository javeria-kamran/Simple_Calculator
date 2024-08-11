// Function to append values to the display
function appendToDisplay(value) {
    playClickSound();
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    playClickSound();
    document.getElementById('display').value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    playClickSound();
    var display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

// Function to evaluate the expression in the display
function calculate() {
    playClickSound();
    var expression = document.getElementById('display').value;

    try {
        // Replace trigonometric functions with corresponding Math function calls
        expression = expression.replace(/sin\(/g, 'Math.sin(');
        expression = expression.replace(/cos\(/g, 'Math.cos(');
        expression = expression.replace(/tan\(/g, 'Math.tan(');
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');

        // Evaluate the expression
        var result = eval(expression);

        // Display the result
        document.getElementById('display').value = result;
    } catch (e) {
        alert('Invalid Expression');
    }
}

// Function to play a click sound when a button is pressed
function playClickSound() {
    var audio = new Audio('click.mp3');
    audio.play();
}
