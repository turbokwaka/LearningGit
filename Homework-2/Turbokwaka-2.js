function findEvenIndex(arr)
{
    let m = 0;
    let go = true;
    do {
        let leftSum = 0;
        let rightSum = 0;
        for (let i = 0; i < m; i++){
            leftSum += arr[i];
        }
        for (let i = m + 1; i < arr.length; i++){
            rightSum += arr[i];
        }
        if (leftSum == rightSum) {
            go = false;
            return m
        }
        m++;
        if (m > arr.length) {
            go = false;
            return -1;
        }
    } while (go)
}
console.log(findEvenIndex([1,2,3,4,3,2,1])) // 3
