// 9. *Loop Detection*:

// Given a circular linked list, implement an algorithm that returns the node
// at the beginning of the loop.

// ```
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer
// points to an earlier node, so as to make a loop in the linked list.
// ```

// ```
// EXAMPLE
// Input: A->8->C->D->E-> C[thesameCasearlier] Output: C
// Hints: #50, #69, #83, #90
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

/**
 * linked list in which a node's next pointer points to an earlier node
 * 
 * We can store the nodes in a set to check if a node is already pointed.
 * @param head 
 */
export default function detectLoop<T>(
  head: Node<T> | undefined,
): Node<T> | null {
  const uniqueNodes = new Set<Node<T>>()
  let curr = head
  // curr.next is in the set?
  // in every item before check, check if the next item is already pointed
  while(curr) {
    if (curr.next && uniqueNodes.has(curr.next)) {
      return curr.next
    }
    uniqueNodes.add(curr)
    curr = curr.next 
  }
  return null

}
