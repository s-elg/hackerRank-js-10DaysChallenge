function vowelsAndConsonants(s) {
    let vowels = [];
    let consonants = [];

    for (let j = 0; j < s.length; j++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(s[j])) {
            vowels.push(s[j]);
        } else {
            consonants.push(s[j]);
        }
    }
    
    let allLetters = vowels.concat(consonants);

    for (let i = 0; i < allLetters.length; i++) {
        console.log(allLetters[i]);
    }
    
}


// hackerrank 10 days of javascript tutorial'ının loops challenge'nın kodu
