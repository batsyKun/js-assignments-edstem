let string = "hey bro";
let vowels = "aeiou";
let isVowel = false;
for(let i = 0; i < string.length; i++){
    for(let j = 0; j < vowels.length; j++){
        if(string[i].toLowerCase() == vowels[j].toLowerCase()){
        isVowel = true;
        break;
        }
    }
    if(isVowel == false)console.log(string[i])
    isVowel = false;
}
    