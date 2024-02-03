function convertTemperature() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');

    var celsiusValue = parseFloat(celsiusInput.value);
    var fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsiusValue)) {
        fahrenheitInput.value = (celsiusValue * 9 / 5) + 32;
    } else if (!isNaN(fahrenheitValue)) {
        celsiusInput.value = (fahrenheitValue - 32) * 5 / 9;
    } else {
        alert("Please enter a valid temperature.");
    }
}
