/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head) return false;
        let p1 = head, p2 = head.next;
        while (p1.next && p2.next) {
            if (p1.next === p2.next) {
                return true;
            }
            if (p1.next && p2.next.next) {

                p1 = p1.next;
                p2 = p2.next.next;
            } else {
                return false;
            }
        }

        return false;
    }
}
