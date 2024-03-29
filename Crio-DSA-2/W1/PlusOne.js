/*

Given a number represented as an array of digits, increment the number by 1, and return the resulting sum as an array.

Input format
There are two lines of input.

First line will contain a single integer N .

Next line will contain N space separated integers for Array A.

Output format
Single integer which will be the incremented number.

Sample Input 1
3

1 1 1

Sample Output 1
112

Explanation
111 + 1 = 112

Constraints
0<=Ai<10

Most significant value will be non-zero in the array.

1<=N<=5000

*/

/*

Input: digits = [8, 9, 9, 9]

Step 1: size = digits.size()
= 4

carry = 1

Step 2: i = size - 1
= 4 - 1
= 3

i >= 0 && carry != 0
3 >= 0 && 1 != 0
true

carry += digits[i]
 += digits[3]
 += 9

carry = 10

digits[3] = 10 % 10;
     = 0

carry = 10 / 10
 = 1

i--
i = 2

Step 3: i >= 0 && carry != 0
2 >= 0 && 1 != 0
true

carry += digits[i]
 += digits[2]
 += 9

carry = 10

digits[2] = 10 % 10;
     = 0

carry = 10 / 10
 = 1

i--
i = 1

Step 4: i >= 0 && carry != 0
1 >= 0 && 1 != 0
true

carry += digits[i]
 += digits[1]
 += 9

carry = 10

digits[1] = 10 % 10;
     = 0

carry = 10 / 10
 = 1

i--
i = 0

Step 4: i >= 0 && carry != 0
0 >= 0 && 1 != 0
true

carry += digits[i]
 += digits[0]
 += 8

carry = 9

digits[1] = 9 % 10;
     = 9

carry = 9 / 10
 = 0

i--
i = -1

Step 5: carry != 0
0 != 0
false

Step 6: return digits

So the answer is [9, 0, 0, 0].

*/

var plusOne = function(n, digits) {
    for(let i = n - 1; i >= 0; i--) {
        digits[i]++;

        if( digits[i] > 9 ){
            digits[i] = 0;
        } else{
            return digits;
        }
    }

    digits.unshift(1);
    return digits;
};

console.log(plusOne(2, [9,9]));

console.log(plusOne(3, [1,5,2]));