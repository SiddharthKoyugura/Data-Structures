//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input){
    if(!input.length || input.length == 1){
        return undefined;
    }
    const set = new Set();
    for(let i=0;i<input.length;i++){
        if(set.has(input[i])){
            return input[i];
        }
        set.add(input[i]);
    }
    return undefined;
}

function firstRecurringCharacter2(input){
    for(let i=0;i<input.length;i++){
        for(let j=i-1;j>=0;j--){
            if(input[i]===input[j]){
                return input[i];
            }
        }
    }
    return undefined;
}

console.log(firstRecurringCharacter2([2,5,5,2,3,5,1,2,4]))

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2