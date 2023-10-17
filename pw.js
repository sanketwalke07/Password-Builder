function generateRandomString(length) {
    // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*#?&';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '@$!%*#?&';
    
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        result += allCharacters.charAt(randomIndex);
    }
    document.querySelector('[name="sumresult"]').textContent = result;
    return result;
}

const randomString = generateRandomString(15); // Generates a random string of length 15
console.log(randomString);
