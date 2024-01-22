document.getElementById('myButton').addEventListener('click', function () {
    var numberInput = document.getElementById('numberInput');
    var enCheckbox = document.getElementById('enCheckbox');
    var numCheckbox = document.getElementById('numCheckbox');
    var cnCheckbox = document.getElementById('cnCheckbox');
    var punCheckbox = document.getElementById('punCheckbox');
    var outputArea = document.getElementById('outputArea');

    // Check if the input is a positive integer
    var inputValue = parseInt(numberInput.value, 10);
    if (!isNaN(inputValue) && inputValue > 0) {
        var selectedOptions = [];
        if (enCheckbox.checked) selectedOptions.push('en');
        if (numCheckbox.checked) selectedOptions.push('num');
        if (cnCheckbox.checked) selectedOptions.push('cn');
        if (punCheckbox.checked) selectedOptions.push('pun');

        var randomString = generateRandomString(inputValue, selectedOptions);
        outputArea.textContent = randomString;
        enableCopyButton(randomString);
    } else {
        outputArea.textContent = 'Please enter a positive integer.';
        disableCopyButton();
    }
});

document.getElementById('copyButton').addEventListener('click', function () {
    var outputArea = document.getElementById('outputArea');

    // Create a temporary textarea element and set its value to the content of the output area
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = outputArea.textContent;

    // Append the textarea to the document
    document.body.appendChild(tempTextarea);

    // Select the content of the textarea
    tempTextarea.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(tempTextarea);
});

function enableCopyButton(text) {
    var copyButton = document.getElementById('copyButton');
    copyButton.disabled = false;
}

function disableCopyButton() {
    var copyButton = document.getElementById('copyButton');
    copyButton.disabled = true;
}

function generateRandomString(length, charOptions) {
    var charset = '';
    var punChars = '!@#$%^&*()-=_+,./<>?;:{}[]| '
    var enChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var numChars = '0123456789'
    var cnChars = '一二三四五六七八九十'

    for (var i = 0; i < charOptions.length; i++) {
        switch (charOptions[i]) {
            case 'en':
                charset += enChars
                    ;
                break;
            case 'cn':
                charset += cnChars;
                charset += cnChars;
                charset += cnChars;
                charset += cnChars;
                charset += cnChars;
                break;
            case 'num':
                charset += numChars;
                break;
            case 'pun':
                charset += punChars;
                break;
            // Add more cases for additional options if needed
        }
    }

    var result = '';
    for (var j = 0; j < length; j++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
    }
    console.log(result)
    return result;
}
