// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node. Note that the intersection is defined
// based on reference, not value.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

/**
 * Approach 1 (IR):
 * Store list1 items in a Set
 * Iterate over list2 and return at the first match
 */
export default function intersection<T>(
  list1: Node<T> | undefined,
  list2: Node<T> | undefined,
): Node<T> | undefined {
  const items = new Set<Node<T> | undefined>()
  let result: Node<T> | undefined
  
  const l1 = new LinkedList<T>(list1)
  const l2 = new LinkedList<T>(list2)

  l1.visitNode((node) => items.add(node))

  //Optimization: iterate only until find the first match.
  l2.visitNode((node) => {
    if (items.has(node) && !result) {
      result = node  
    }
  })

  return result
}
