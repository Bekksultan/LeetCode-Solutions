/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    // at first will need to addOne 
  var addOneNow = true;  

    // start from the last element
  for (var i = digits.length - 1; i >= 0;i--){

    // if the currentDigit is less 0~8 
    if ( digits[i] < 9){

      // increment the number by 1
      digits[i]++;

       // the end
      return digits;
    }else{ // if the currentDigit is 9
     
    // make it 0, and move to the former element
     digits[i] = 0; 
    }
   }
  
   // if there is still 1 to add
   if(addOneNow){ 
   
   // make [9,9,9], [1,0,0,0] not [0,0,0]
     digits.unshift(1); 
   }
 
   return digits;
};