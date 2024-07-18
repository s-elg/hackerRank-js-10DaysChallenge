function vowelsAndConsonants(s) {
    //sesli ve sessiz harfleri tuttuğum iki array açıyorum
    let vowels = []; 
    let consonants = [];


    //for döngüsüyle array üzerinde dönerek sesli ve sessiz harfleri ayırıyorum
    for (let j = 0; j < s.length; j++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(s[j])) {
            vowels.push(s[j]);
        } else {
            consonants.push(s[j]);
        }
    }

    //concat fonksiyonuyla iki arrayi birleştiriyorum
    let allLetters = vowels.concat(consonants);


    //aşağıya doğru sıralı istediği için for döngüsüyle tüm harfleri tek tek yazdırıyorum
    for (let i = 0; i < allLetters.length; i++) {
        console.log(allLetters[i]);
    }
    
}


// hackerrank 10 days of javascript tutorial'ının loops challenge'nın kodu
