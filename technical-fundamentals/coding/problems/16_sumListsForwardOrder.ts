// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295
// Output:9 -> 1 -> 2,That is,912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

/**
 * Approach 1:
 * 6 -> 1 -> 7
 * 2 -> 9 -> 5
 * 8 -> 10
 * 9 -> 0 -> 12
 * 9 -> 1 -> 2
 * 
 * the trick should be iterate starting from prev
 *          
 * 9 -> 7 -> 9
 * 2         
 * ------------
 * 1
 * 
 * 9+1 = 11 >=10 entonces creo un nodo
 * 
 */
export default function sumListsForwardOrder(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {

  const result = new LinkedList<number>()
  let a =  new LinkedList<number>(list1).reverse()?.head
  let b = new LinkedList<number>(list2).reverse()?.head

  let carry = 0
  // console.log("sumListsForwardOrder, adding", list1, list2)
  
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
  
  return result.reverse()?.head
  
}
