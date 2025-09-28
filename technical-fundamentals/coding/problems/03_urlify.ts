// 3.  URLify:

// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string.

/**
 * Approach 1: rely on language:  s1.split(' ').join('%20')
 * Approach 2: build a new url and concat %20 if we have a space - T: O(n): S: O(n)
 * Approach 3: starts from the end, move the caracter to the right if it's not empty, add %20 if its space, continue 
 * @param s1 
 * @returns 
 */
export default function URLify (s1 : string): string {
    let url = ''
    for(let i = 0; i < s1.length; i++) {
        if(s1[i] === ' ') {
            url += '%20'
        } else {
            url += s1[i]
        }
    }
    return url
}
