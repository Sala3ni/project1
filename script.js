document.getElementById('Generate').addEventListener('click', generatePassword);

function generatePassword() {
    const length = document.getElementById('Length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('Number').checked;
    const includeSymbols = document.getElementById('Symbol').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let charSet = '';
    if (includeUppercase) charSet += uppercaseChars;
    if (includeLowercase) charSet += lowercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    if (charSet === '') {
        alert('Please select at least one character type');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    document.querySelector('.result').textContent = password;
}

document.getElementById('clipboard').addEventListener('click', function() {
    const password = document.querySelector('.result').textContent;
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard');
        });
    }
});