/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
	return x ** n; 
};


var myPow = function(x, n) {
    if(!n) return 1;
    if(n < 0) return 1 / myPow(x, -n);
    if(n % 2){
        return x * myPow(x, n-1);
    }
    return myPow(x*x, n/2);
};
//Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Pow(x, n).

var myPow = function(x, n) {
    if (n < 0) {
        n = -n;
        x = 1 / x;
    }
    let res = 1;
    while (n > 0) {
        if (n % 2 === 1) {
            res *= x;
            --n;
        }
        x *= x;
        n /= 2;
    }
    return res;
};