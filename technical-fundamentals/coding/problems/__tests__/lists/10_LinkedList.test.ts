import {LinkedList} from '../../10_LinkedList'

describe("_LinkedList", () => {
  test("push head", () => {
    const list = new LinkedList<number>()
    list.push(1)

    expect(list.head?.value).toEqual(1)

  })
  test("push in the middle", () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(2)
    list.push(3)

    expect(list.head?.value).toEqual(1)
    expect(list.head?.next?.value).toEqual(2)
    expect(list.head?.next?.next?.value).toEqual(3)
  })
  test('print list', () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(2)
    list.push(3)

    list.print() 
  })
  test('filter in place only mantain first', () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(1)
    list.push(2)
    list.push(3)
    list.push(4)
    list.push(5)
    list.push(5)
    list.push(5)
    list.push(5)
    list.push(6)
    
    list.filterInPlace((item => item == 1))

    expect(list.head?.value).toEqual(1)
    expect(list.head?.next?.value).toEqual(1)
    expect(list.head?.next?.next?.value).toBeUndefined()
    expect(list.length).toEqual(2)
  })
  
  test('filter in place in the middle', () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(1)
    list.push(2)
    list.push(3)

    list.filterInPlace((item => item == 2))

    expect(list.head?.value).toEqual(2)
    expect(list.head?.next?.value).toBeUndefined()
  })
  test('filter in place multiple', () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(1)
    list.push(2)
    list.push(3)

    list.filterInPlace((item => item < 3))

    expect(list.head?.value).toEqual(1)
    expect(list.head?.next?.value).toEqual(1)
    expect(list.head?.next?.next?.value).toEqual(2)
    expect(list.head?.next?.next?.next).toBeUndefined()
  })
  test('filter only mantain first', () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(1)
    list.push(2)
    list.push(3)
    list.push(4)
    list.push(5)
    list.push(5)
    list.push(5)
    list.push(5)
    list.push(6)
    
    const filteredList = list.filter((item => item == 1))

    expect(filteredList.head?.value).toEqual(1)
    expect(filteredList.head?.next?.value).toEqual(1)
    expect(filteredList.head?.next?.next?.value).toBeUndefined()
    expect(filteredList.length).toEqual(2)
  })
  
  test('filter in the middle', () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(1)
    list.push(2)
    list.push(3)

    const filteredList = list.filter((item => item == 2))

    expect(filteredList.head?.value).toEqual(2)
    expect(filteredList.head?.next?.value).toBeUndefined()
  })
  test('filter multiple', () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(1)
    list.push(2)
    list.push(3)

    const filteredList = list.filter((item => item < 3))

    expect(filteredList.head?.value).toEqual(1)
    expect(filteredList.head?.next?.value).toEqual(1)
    expect(filteredList.head?.next?.next?.value).toEqual(2)
    expect(filteredList.head?.next?.next?.next).toBeUndefined()
  })

  test('remove head', () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(1)
    list.push(2)
    list.push(3)

    list.remove(list.head)

    expect(list.head?.value).toBe(1)
    expect(list.head?.next?.value).toBe(2)
    expect(list.head?.next?.next?.value).toBe(3)
  })
  
  test('remove in the middle', () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(1)
    list.push(2)
    list.push(3)

    list.remove(list.head?.next?.next)

    expect(list.head?.value).toBe(1)
    expect(list.head?.next?.value).toBe(1)
    expect(list.head?.next?.next?.value).toBe(3)
  })
  test('find an element', () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(1)
    list.push(2)
    list.push(3)

    const node = list.find(2)
    expect(node?.value).toBe(2)
    expect(node?.next?.value).toBe(3)
  })
  
  test('find an element', () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(1)
    list.push(2)
    list.push(3)

    const node = list.find(2)
    expect(node?.value).toBe(2)
    expect(node?.next?.value).toBe(3)
  })
  test('get index', () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(1)
    list.push(2)
    list.push(3)

    const node = list.get(2)
    expect(node?.value).toBe(2)
    expect(node?.next?.value).toBe(3)
  })
  test('vist', () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(1)
    list.push(2)
    list.push(3)

    list.visit((element) => console.log(element*2))
  })

  test('reverse', () => {
    const list = new LinkedList<number>()
    list.push(1)
    list.push(2)
    list.push(3)

    const result = list.reverse()

    expect(result?.head?.value).toBe(3)
    expect(result?.head?.next?.value).toBe(2)
    expect(result?.head?.next?.next?.value).toBe(1)
  })
  test('reverse 1', () => {
    const list = new LinkedList<number>()
    list.push(1)

    const result = list.reverse()
    expect(result?.head?.value).toBe(1)
  })
})