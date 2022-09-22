/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = []
    if(!matrix.length) {
        return result
    }
    let rowMin = 0
    let rowMax = matrix.length -1
    let columnMin = 0
    let columnMax = matrix[0].length - 1
    
    let i = 0
    let j = 0
    let direction = "right"
    while(result.length < matrix.length * matrix[0].length) {

        result.push(matrix[i][j])
        if(direction === "right") {
           
            if(j === columnMax) {
                rowMin += 1
                i = rowMin
                direction = "down"
            } else {
                j++
            }
        } else if(direction === "down") {
            if(i === rowMax) {
                direction = "left"
                columnMax -= 1
                j = columnMax
            } else {
                i++
            }
        } else if(direction === "left") {

            if(j === columnMin) {
                direction = "up"
                rowMax -= 1
                 i = rowMax
            } else {
                j--
            }
        } else {
            if(i === rowMin) {
                direction = "right"
                columnMin += 1
                 j = columnMin
            } else {
                i--
            }
        }
    }
    return result 
};