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
    // create an empty 3rd list
    let l3 = null;
    let pointer3 = null;
    let pointer1 = l1;
    let pointer2 = l2;
    let carry = 0;
    // go through the list until the end and if hit the end also check if there is still carry remainded from the last iteration
    while (pointer1 || pointer2 || carry > 0) {
        let sum = (pointer1 === null ? 0 : pointer1.val) + (pointer2 === null ? 0 : pointer2.val) + carry;
        // total is larger then 2 digit then carry the 10th and set the ones to sum
        if (sum >= 10) {
            carry = Math.floor(sum / 10);
            sum = sum % 10;
        // if less then 10th digit then set the result to sum and no carry
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
        // create l3 if it doesn't exist
        if (!l3) {
            l3 = new ListNode(sum);
            pointer3 = l3;
        // if exist then add to the next
        } else {
            pointer3.next = new ListNode(sum);
            pointer3 = pointer3.next;
        }
    }
    return l3;
};

// this is solution is O(n) time by iterating through both list once and adding both numbers from the list.
