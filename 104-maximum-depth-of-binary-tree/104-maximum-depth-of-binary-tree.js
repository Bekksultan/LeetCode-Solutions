/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var bl=function(node){
        var max=0;
        if(node!=null){
            max++;
            //The depth of the left subtree
            var ml=bl(node.left);
            //The depth of the right subtree
            var mr=bl(node.right);
            max+=ml>mr?ml:mr;        
        }
        return max;
    }
    var dd=bl(root);
    return dd;
};