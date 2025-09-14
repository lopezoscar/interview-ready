// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
    const chars: Record<string, number> = {}
    for(let i = 0; i < str.length; i++) {
        if (chars[str[i]]){
            return false
        } else {
            chars[str[i]] = 1
        }
    }
    return true
}
