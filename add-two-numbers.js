/*
Definition for singly-linked list.
function ListNode(val) {
     this.val = val;
    this.next = null;
}

@param {ListNode} l1
@param {ListNode} l2
@return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
    let l3 = null;
    let pointer3 = null;
    let pointer1 = l1;
    let pointer2 = l2;
    let carry = 0;
    while (pointer1 || pointer2 || carry > 0) {
        let sum = (pointer1 === null ? 0 : pointer1.val) + (pointer2 === null ? 0 : pointer2.val) + carry;
        if (sum >= 10) {
            carry = Math.floor(sum / 10);
            sum = sum % 10;
        } else {
            sum = sum;
            carry = 0;
        }
        if (pointer1) {
            pointer1 = pointer1.next
        };
        if (pointer2) {
            pointer2 = pointer2.next
        };
        if (!l3) {
            l3 = new ListNode(sum);
            pointer3 = l3;
        } else {
            pointer3.next = new ListNode(sum);
            pointer3 = pointer3.next;
        }
    }
    return l3;
};