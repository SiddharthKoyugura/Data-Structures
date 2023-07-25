
function reversestring(string){
    let reversedString = '';
    for(let i=string.length-1; i>=0; i--){
        reversedString += string[i];
    }
    return reversedString;
}

const reversestring2 = str => [...str].reverse().join(''); 

console.log(reversestring2("I am siddharth Koyugura"));