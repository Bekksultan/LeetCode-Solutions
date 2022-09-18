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
 * @return {number[]}
 */
const preorderTraversal = function (root) {
  const stack = [root]
  const result = []
  while (stack.length > 0) {
    const node = stack.pop()
    if (node) {
      result.push(node.val)
      stack.push(node.right, node.left)
    }
  }
  return result
}