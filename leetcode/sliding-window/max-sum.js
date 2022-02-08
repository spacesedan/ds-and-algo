// this is a practice example link(https://medium.com/leetcode-patterns/leetcode-pattern-2-sliding-windows-for-strings-e19af105316b)

// Given an array of integers of size ‘n’.
// Our aim is to calculate the maximum sum possible for ‘k’ consecutive elements in the array.

// Input  : arr =[100, 200, 300, 400]
//          k = 2
// Output : 700

// Brute force: solution that iterate through all windows of size k
function maxSum(arr, k) {
	let maxSum = 0;
	let currentSum = 0;

	for (let i = 0; i < arr.length - k; i++) {
		for (let j = 0; j < k; j++) {
			console.log(currentSum);
			currentSum += arr[j];
		}
		maxSum = Math.max(maxSum, currentSum);
	}
	return maxSum;
}

// maxSum([100, 200, 300, 400], 2);

console.log(maxSum([100, 200, 300, 400, 500], 2));
