/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/*/
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function (head) {
    let result = 0

    while (head) {
        result = result * 2 + head.val
        head = head.next
    }
    return result
};

//Recursive solution
const getDecimalValueRecursively = function (head, dec = 0) {
    if (!head) {
        return dec
    } else {
        return getDecimalValueRecursively(head.next, dec * 2 + head.val)
    }
}

let head = { val: 1, next: { val: 0, next: { val: 1, next: null } } }

console.log(getDecimalValue(head))
console.log(getDecimalValueRecursively(head))