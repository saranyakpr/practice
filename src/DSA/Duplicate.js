function firstDublicate(arr){
    const seen = new Set();
    for(let num of arr){
        if(seen.has(num)){
            return num
        }
        seen.add(num)
    }
    return -1
} 
const ans = firstDublicate([1, 2, 3, 4, 3, 4, 5])
console.log(ans)