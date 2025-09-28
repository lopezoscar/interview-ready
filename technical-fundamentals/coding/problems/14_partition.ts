// 4. *Partition*:

// Write code to partition a linked list around a value x,
// such that all nodes less than x come before all nodes greater than or equal to x.

// If x is contained within the list, the values of x only need to be after the elements less than x (see below). 
// 
// The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions.

// ```
// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1[partition=5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

/**
 * 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 (tail.next = 5)
 * 3 -> 8 -> 5 -> 10 -> 2 -> 1 -> 5 (tail.next = 8)
 * 3 -> 5 -> 10 -> 2 -> 1 -> 5 -> 8 (tail.next = 5)
 * 3 -> 10 -> 2 -> 1 -> 5 -> 8 -> 5 (tail.next = 10)
 * 3 -> 2 -> 1 -> 5 -> 8 -> 5 -> 10
 */

/**
 * Approach 1:
 *  
 * find first index of value
 * iterate the list again
 * if the current is greater than value, move to right.
 * 
 */

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

/**
 * IR Approach:
 * Create two lists
 * filter both
 * merge them
 */
export default function partition<T>(
  head: Node<T> | undefined,
  x: T,
): Node<T> | undefined {
  const list: LinkedList<T> = new LinkedList(head)
  const left = list.filter(value => value < x)
  const right = list.filter(value => value >= x)

  const merged = left.merge(right) 
  return merged.head
}
