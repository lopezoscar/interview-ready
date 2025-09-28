// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;
  length: number = 0

  constructor(head?: Node<T>) {
    this.head = head
    this.tail = head

    if(this.head) {
      let current: Node<T> | undefined = this.head
      while(current) {
        this.length++
        this.tail = current
        current = current.next
      }
    }
  }

  push(value: T) {
    if (!this.head) {
      this.head = { value }
      this.tail = this.head
      this.length++
      return
    }
    let current: Node<T> | undefined = this.head
    while(current.next) { 
      current = current.next
    }
    current.next = { value }
    this.tail = current.next
    this.length++
  }

  filter(conditionFn: (value: T) => boolean) {
    let list = new LinkedList<T>()
    let current: Node<T> | undefined = this.head
    while(current) {
      if(conditionFn(current.value)) {
        list.push(current.value)
      }
      current = current.next
    }
    return list
  }

  /**
   * Filter in place
   * @param value 
   */
  filterInPlace(conditionFn: (value: T) => boolean) {
    if (!this.head) {
      return
    }
    while(this.head && !conditionFn(this.head.value)) {
      this.head = this.head.next
      this.length--
    }
    if(!this.head) {
      return
    }
    let prev: Node<T> | undefined = this.head
    let current: Node<T> | undefined = this.head.next
    while (current) {
      const passed = conditionFn(current.value)
      if (passed) {
        prev = current
        current = current.next
      } else {
        //remove
        prev.next = current.next
        current = current.next
        this.length--
        this.tail = current
      }
    }
  }
  visit(fn: (element: T, index?: number) => void) {
    let current = this.head
    let index = 0
    while(current) {
      fn(current.value, index)
      index++
      current = current.next
    }
  }
  visitNode(fn: (node: Node<T> | undefined) => void) {
    let current = this.head
    while(current) {
      fn(current)
      current = current.next
    }
  }

  remove(node: Node<T> | undefined) {
    if (!node) {
      return
    }
    if (this.head === node) {
      this.head = this.head.next
      return
    }
    let current: Node<T> | undefined = this.head
    while(current) {
      let next = current.next
      if (next == node) {
        current.next = next.next
      }
      current = current.next
    }
  }

  removeValue(value: T) {
    while(this.head && this.head.value === value) {
      this.head = this.head.next
      this.length--
    }
    if (!this.head) {
      return
    }

    let prev = this.head
    let current = this.head?.next
    while(current) {
      if (current.value == value) {
        prev.next = current.next
        this.length--
      }
      prev = current
      current = prev.next
    }
    if (prev) {
      this.tail = prev
    }
  }
  merge(list: LinkedList<T>): LinkedList<T> {
    if (!list.head) {
      return this
    }
    if(!this.head) {
      this.head = list.head;
      this.tail = list.tail;
      this.length = list.length;
      return this;
    }
    console.log('tail', this.tail)
    /**
     * the tail of this list points to the head of the list in params
     */
    this.tail!.next = list.head
    this.tail = list.tail
    this.length += list.length;
    return this
  }
  print() {
    let current = this.head
    while(current) {
      console.log(current.value)
      current = current.next
    }
  }

  // extra

  find(value: T): Node<T> | undefined {
    let current = this.head
    while(current && current.value != value) {
      current = current.next
    }
    if(current?.value == value) {
      return current
    }
    return undefined
  }
  get(index: number): Node<T> | undefined {
    let i = 0
    let current = this.head
    while(current && i != index && i < this.length) {
      i++
      current = current.next
    }
    if(i == index) {
      return current
    }
    return undefined
  }
  reverse(): LinkedList<T> | undefined {
    // reverse a linked list. 123.= 321
    // create a new node and replace the head.
    let reversed = new LinkedList<T>()
    let curr = this.head
    
    while (curr) {
      const newHead = { value: curr.value, next: reversed.head }
      reversed.head = newHead

      curr = curr.next
    }
    return reversed

    // 1 -> 2 -> 3
    // swap(1 -> 2)  // 213
    // swap(1 -> 3) // 231
    // swap(3-> 2) // 321

    // 12345 = 54321
    // swap(1, 2) = 21345
    // swap(1, 3) = 23145
    // swap(1,4) =  23415
    // swap(1,5) =  23451
    // swap(2,3) =  32451
    // swap(2,4) =  34251
    // swap(2,5) =  34521
    //           =  34521 
  }
  //iterator(): LinkedListIterator {}
}

const list = new LinkedList();
