/*

Given an array nums, you need to find the maximum sum of triplet (nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. If no such triplet exists print 0.

Input format
There are 2t+1 lines of input

First line contains an integer t - No of test cases.

First line of each test case contains an integer n - No of elements in the array.

Second line of each test case contains N space separated integers - The array nums.

Output format
For each test case print the answer in a new line.

Sample Input 1
3

7

3 7 4 2 5 7 5

4

5 2 4 5

3

3 2 1

Sample Output 1
16

11

0

Explanation 1
In the first case valid triplets are: [3,4,5], [3,4,7], [4,5,7], [2,5,7]. Out of these [4,5,7] has the maximum sum, 16.

In the second case, it’s [2, 4, 5] with sum 11.

In the third case there are no valid triplets.

Constraints
1 <= t <= 100

3 <= n <= 300

1 <= nums[i] <= 10^9

It is guaranteed that the sum of n over all test cases is less than 3000.

*/


function maxSumTriplet(n, nums) {
    let maxSum = 0;
    for(let i = 1; i < n-1; i++){
        let maxNumLeft = -1;
        for(let j = 0; j < i; j++){
            if(nums[j] < nums[i] && nums[j] > maxNumLeft){
                maxNumLeft = nums[j];
            }
        }

        let maxNumRight = -1;
        for(let j = i - 1; j < n; j++){
            if(nums[j] > nums[i] && nums[j] > maxNumRight){
                maxNumRight = nums[j];
            }
        }

        if(maxNumLeft != -1 && maxNumRight != -1){
            maxSum = Math.max(maxSum, maxNumLeft + nums[i] + maxNumRight);
        }
    }
    return maxSum;
}

console.log(maxSumTriplet(7, [3, 7, 4, 2, 5, 7, 5]));

console.log(maxSumTriplet(4, [5, 2, 4, 5]));

console.log(maxSumTriplet(3, [3, 2, 1]));