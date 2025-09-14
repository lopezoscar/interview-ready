// 4. *Palindrome Permutation*: 

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation (str: string): boolean {
    const cleanStr = str.toLowerCase().replaceAll(' ', '')
    const map: Record<string, number> = {}
    
    for (let i = 0; i < cleanStr.length; i++) {
        const current = map[cleanStr[i]]
        if (current) {
            map[cleanStr[i]]++
        } else {
            map[cleanStr[i]] = 1
        }
    }
    //after build the counter, check if there is only one odd
    return Object.values(map).filter(s => s % 2 != 0).length <= 1
}
//taco cat
// neuquen
function isPalindrome(str: string): boolean {
    for(let i = 0; i < str.length /2; i++) {
        if(str[i] != str[str.length -1 -i]) {
            return false
        }
    }
    return true
}

