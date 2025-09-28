// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

/**
 * Approach 1: New Matrix, calculate columns and set values in new matrix 
 * Approach 2 In place: Change rows per columns first and then iterate the matrix again and reverse each row.
 */

type Matrix = number[][]

export default function rotateMatrix (matrix: Matrix) {
    /**
     * NxN
     * 
     * 4 bytes per pixel (position)
     * one turn to right.
     * 
     * 123
     * 123
     * 123
     * 
     * 111
     * 222
     * 333
     * 
     * 
     * 123
     * 456.   
     * 789
     * 
     * 741
     * 852
     * 963
     * 
     * 20, 10, 00
     * 21, 11, 01
     * 22, 12, 02
     * 
     * interchange 6 = 12 = 21
     * 
     * starts with 0 - all elements at j = 0 should be at i = 0 - starting from the last one
     * all elements at j = 1, should be at i = 1 - starting from the last one
     * all elements at j = 2, should be at i = 2 - starting from the last one
     * 
     * // 0 case
     * 
     * i = 0
     * j = 0
     * v = 1
     * 
     * i = 0
     * j = length -1
     * 
     * // 7 case
     * 
     * i = 0
     * j = length -1
     * 
     * i = 0
     * j = 0
     * v = 7
     * 
     * // 2 case
     * i = 0
     * j = 1
     * 
     * i = 1
     * j = length -1 (2)
     * 
     * rows are columns (last row is first column)
     * 
     * all elements at j = 0, should be at i = 0 - starting from the last one
     * all elements at j = 1, should be at i = 1 - starting from the last one
     * all elements at j = 2, should be at i = 2 - starting from the last one
     * 
     * 1 2.  3 1
     * 3 4 = 4 2
     * 
     */
    
    //two loops
    /**
     * 
     * 123
     * 456   
     * 789
     * 
     * 3 (no se)
     * 
     * 121
     * 456   
     * 789.  //como hago para intercambiar 02 con 22?
     * 
     * 6 (no se)
     * 01 = 12
     * 121
     * 452   
     * 789.
     * 
     * 
     * final
     * 741
     * 852
     * 963
     * 
     * 
     * 00 (1) => 02
     * 01 (2) => 12
     * 02 (3) => 22
     * 10 (4) => 01
     * 11 (5) => 11
     * 12 (6) => 21
     * 20 (7) => 00
     * 21 (8) => 10
     * 22 (9) => 20
     */
    
    /**
     * 
     * 
     * 
     * 123
     * 456   
     * 789
     * 
     * // lo que está en 00, va en 0 2 y lo que está en 0 2 va en 00
     * 321
     * 456   
     * 789
     * 
     * // lo que está en 01, va en 1 2 y lo que está en 1 2 va en 01
     * 
     * 361
     * 452   
     * 789
     * 
     * // lo que está en 02, va en 2 2 y lo que está en 2 2 va en 02
     * 
     * 361
     * 452   
     * 987
     * 
     * 741
     * 852
     * 963
     * 
     *   0.  1.  2
     * 0 20, 10, 00
     * 1 21, 11, 01
     * 2 22, 12, 02
     *  
     *   Search in the final matrix i and j    temp = matrix[x][y], matrix[x][y] = matrix[i][j] x = ? y = ?
     *   i. j   x y. (x = j, y = N-i)
     *   0. 0 = 0 2. (x = N-2, y = N-i) - 7 to 1
     *   0. 1 = 1 2. (x = N-1, y = N-i)
     *   0. 2 = 2 2. (x = N-0, y = N-i)
     * 
     *   1. 0 = 0 1. (x = N-0, y = i)
     *   1. 1 = 1 1. (x = N-1, y = i)
     *   1. 2 = 2 1. (x = N-2, y = i)
     * 
     *   2. 0 = 0 0. (x = N-0, y = i)
     *   2. 1 = 1 0. (x = N-1, y = i)
     *   2. 2 = 2 0. (x = N-2, y = i)
     */
    // console.log(matrix)
    // console.log('i,j,x,y')
    // let temp
    
    // for (let i = 0; i < matrix.length; i++) {
    //     for (let j = 0; j < matrix.length; j++) {
    //         const x = j
    //         const y =  matrix.length -1 - i
    //         console.log(i, j, x, y)
    //         temp = matrix[x][y]
    //         matrix[x][y] = matrix[i][j]
    //         matrix[i][j] = temp
    //         console.log(`In position ${x} ${y} i'm setting ${matrix[i][j]}`)
    //     }
    // }
    // return matrix

    /**
     * 123
     * 456
     * 789
     */
    console.log(matrix)
    for (let i = 0; i < matrix.length; i++) {
        for(let j = i+1; j < matrix.length; j++) {
            console.log(i,j)
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    console.log('matrix 2nd step', matrix)

    // 1 4 7 - 7 4 1
    // 0 1 2 - 2 1 0
    
    for(let i = 0; i < matrix.length; i++) {
        let row = matrix[i]
        console.log('reversing row', i)
        reverse(row)
    }
    
    /**
     * 
     * 1 2 3 (row)
     * 4 6 7
     * 7 8 9
     * 
     * (c)
     * 1 4 7
     * 2 5 8
     * 3 6 9
     */
}

// reverse in place (start from the middle)
function reverse(row: number[]) {
    // [1,4,7]
    // [1,2,3,5] => [5,3,2,1]

    // 1 => 5 [5,2,3,1]
    // 2 => 3 [5,3,2,1]
    for (let j = Math.ceil(row.length/2); j < row.length; j++) {
        const temp = row[row.length - 1 -j]
        row[row.length - 1 -j] = row[j]
        row[j] = temp
    }
}