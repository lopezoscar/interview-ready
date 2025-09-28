// 2.  *Return Kth to Last*:

// Implement an algorithm to find the kth to last element of a singly linked list.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

//Approach 1: Use list.length and list.get - is O(n) but i'm iterating twice the list (once to know the length and other)
//Approach 2: Use visit or iterate through the list
export default function kthToLast<T>(
  head: Node<T>,
  k: number,
): Node<T> | undefined {
  const list = new LinkedList(head)
  const node = list.get(list.length - k)
  return node
}
