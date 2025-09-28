// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

/**
 * Approach 1: Manually checking comparing the current with next, if they are the same, current.next = next.next
 * Approach 2: Filter fn
 * Approach 3: Have a current and prev and compare prev with current and then prev.next = current.next (similar to 1)
 */
export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  const list: LinkedList<T> = new LinkedList<T>(head)

  const duplicates = new Set<T>()
  
  const filteredList = list.filter(value => {
    if(duplicates.has(value)) {
      return false
    }
    duplicates.add(value)
    return true
  })

  return filteredList.head
}
