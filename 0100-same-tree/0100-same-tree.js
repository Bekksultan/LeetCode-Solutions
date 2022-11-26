/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var ts=function(nodeP,nodeQ){
        if(nodeP==null&&nodeQ==null){
            return true;
        }
        if(nodeP==null||nodeQ==null){
            return false;
        }
        if(nodeP.val!=nodeQ.val){
            return false;
        }
        return ts(nodeP.left,nodeQ.left)&&ts(nodeP.right,nodeQ.right);
    }
    return ts(p,q);
};