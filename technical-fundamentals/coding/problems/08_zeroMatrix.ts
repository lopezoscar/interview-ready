// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][]

export default function zeroMatrix (matrix: Matrix) {
    // Approach 1
    // if an element is 0, the row and colum should be override to 0.
    // how can I discard already marked as zero?
    // should I replace in place?

    // iterate the matrix
    // store rows and colums with 0
    
    // iterate the list
    // mark all as zero
    const zeroCoordinates = []
    for (let i = 0; i < matrix.length;i++) {
        const row = matrix[i]
        for (let j = 0; j < row.length;j++) {
            const element = row[j]
            if (element == 0) {
                zeroCoordinates.push([i,j])
            }
        }
    }

    for (let i = 0; i < zeroCoordinates.length;i++) {
        const [row,col] = zeroCoordinates[i]
        setToZero(matrix, row, col)
    }

    /**
     *  A
     *  [1,1,0]
     *  [1,0,1]
     *  [1,1,1]
     *  Result
     *  [0,0,0]
     *  [0,0,0]
     *  [1,0,0]
     * 
     *  A
     *  [1,2,3],
     *  [4,5,6],
     *  [7,0,9],
     *  Result
     *  [1,0,3],
     *  [4,0,6],
     *  [0,0,0]
     */


    // Approach 2
    // In place
    // detect zero and iterate everything again to mark as zero
}

//setToZero (2,1)
function setToZero(matrix: Matrix, row: number,col:number) {
    for (let i = 0; i < matrix[row].length; i++) {
        matrix[row][i] = 0
    }
    for(let j = 0; j < matrix.length; j++) {
        matrix[j][col] = 0
    }
}