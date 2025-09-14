// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

/**
 * Approach: 
 * iterate the word
 * have a current and last pointers
 * starts comparing last and current(starting with both at index 0) 
 * @param str
 * @returns 
 */
export default function stringCompression (str: string) : string {
    let compressed = ''
    let current
    let last = str[0]
    let c = 0
    //aabcccccaaa
    for (let i = 0; i <= str.length; i++) {
       current = str[i]
       if (current != last) {
         compressed += `${last}${c}`
         c = 1 // important not reset to zero to fix the b1 - //aabcccccaaa = a2b1c5a3
       } else {
         c++
       }
       last = current
    }
    return compressed.length < str.length ? compressed : str
}