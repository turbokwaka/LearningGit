/*[1, 2, 3, 4], 2 -> 6 because max(1+3, 2+4) == 6

[1, 5, 6, 3, 4, 2], 3 -> 11 because max(1+6+4, 5+3+2) == 11

[1, 1, 0], 1 -> 1 because max(1, 1, 0) == 1*/
function largestRadialSum(arr, d) {
    let sumArr = [];
    let n = arr.length / d;
    for (let i = 0; i < n; i++){
        sumArr[i] = 0;
        for (let m = i; m < arr.length; m += n){
            sumArr[i] += arr[m];
        }
    }
    sumArr.sort((a, b) => b-a);
    return sumArr[0];
}
largestRadialSum([-2,-1,-2,-2], 2);
