/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var outputs = [];
    for(var i = 0; i < numRows; i++) {
        var curArr = [i];
        curArr[0] = 1,curArr[i] = 1;
        for(var j = 1; j < i; j++) {
            curArr[j] = outputs[i - 1][j - 1] + outputs[i - 1][j];
        }
        outputs.push(curArr);
    }
    return outputs;
};