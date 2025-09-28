// 5. *Sum Lists*: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored in reverse order,
// such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

/**
 * Approach 1:
 * 7- > 1 -> 6
 * 5 -> 9 -> 2
 * 
 * 7+5 = 2
 * 1+1+9 = 1
 * 1+6+2 = 9
 * 
 * 0 -> 3
 * 1 -> 6 -> 1
 * 
 * 0+1 = 1
 * 3+6 = 9
 * 0+1 = 1 (if there aren't more in one of the node, assume zero)
 * 
 * create a new list
 * iterate the longest list
 * create a new node
 * add the values (including a carry if exists)
 * create a carry and add them if exists.
 * reset carry
 * move to the next
 * 
 */

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumLists(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
 /*
 * create a new list
 * iterate the longest list
 * create a new node
 * add the values (including a carry if exists)
 * create a carry and add them if exists.
 * reset carry
 * move to the next
 */
  const result = new LinkedList<number>()
  let a = list1
  let b = list2
  let carry = 0
  // console.log("adding", list1, list2)
  
  while (a || b) {//9->9->9 + 1
    const aValue = a?.value ?? 0 // default to zero if not exist// 9
    const bValue = b?.value ?? 0 //1
    // console.log("A + B + Carry", aValue, bValue, carry)
    const r = aValue + bValue + carry
    carry = 0
    if (r >= 10) {
      carry = 1
      result.push(r-10)
    } else {
      result.push(r)
    }
    a = a?.next 
    b = b?.next    
  }
  if (carry) {
    result.push(carry)
  }
  // result.print()
  return result.head
}
