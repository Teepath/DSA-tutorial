/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast=head
    let slow=head

    while(fast.next !== null && slow.next !==null ){
        fast=fast.next.next
        slow=slow.next
        if(fast === slow) return true
    }

    return false
};