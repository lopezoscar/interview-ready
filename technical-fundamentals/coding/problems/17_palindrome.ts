// 7. *Palindrome*:

// Implement a function to check if a linked list is a palindrome.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

/**
 * Approach 1: 
 * 
 * 1. iterate and convert to string, (1 it)
 * 2. reverse, iterate and convert to string (2 it) - this could be done at the same time (iterating one time we can reverse and convert to string)
 * 3. compare strings
 * 
 * Approach 2 (IR):
 * Convert list to string
 * do common algorithm for strings(iterate half of the string)
 * 
 * */
export default function isPalindrome<T>(head: Node<T> | undefined): boolean {
  const list = new LinkedList<T>(head)
  const reversed = new LinkedList<T>(head).reverse()

  let str = ''
  let rStr = ''
  
  list.visit(element => str+=element)
  reversed?.visit(element => rStr+=element)

  return str === rStr
}
