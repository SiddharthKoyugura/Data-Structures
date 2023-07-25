
function mergeSortedArrays(arr1, arr2){
    const mergedArray = []; 
    var array1Item = arr1[0];
    var array2Item = arr2[0];

    // Check input
    if(arr1.length === 0){
        return arr2;
    }
    else if(arr2.length===0){
        return arr1;
    }
    else{
        while(array1Item || array2Item){
            console.log(array1Item, array2Item);
            if(!array2Item || array1Item < array2Item){
                mergedArray.push(array1Item);
                array1Item = arr1[arr1.indexOf(array1Item)+1];
            }
            else{
                mergedArray.push(array2Item);
                array2Item = arr2[arr2.indexOf(array2Item)+1];
            }
        }
    }
    return mergedArray;
}

console.log(mergeSortedArrays([0,3,4], [4,6,30]));
