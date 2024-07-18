function getLetter(s) {
    let letter;
    var sChar = s.charAt(0);
    if(sChar.match('[aeiou]')){
        letter = 'A'
    } else if(sChar.match('[bcdfg]')){
            letter = 'B'
    } else if(sChar.match('[hjklm]')){
            letter = 'C'
    } else { 
            letter = 'D'
    }
    return letter;
}

//2.
function getLetter(s) {
    let letter = s.charAt(0);
    switch(letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter ='A';
            break
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
             letter ='B';
            break
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter ='C';
            break
        case 'n':
        case 'p':
        case 'r':
        case 's':
        case 't': 
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':   
            letter ='D';
            break
        default:
            console.log("try again")        
    } 
    
    return letter; 
}



// hackerrank 10 days of javascript tutorial'ının conditional statements challenge için
