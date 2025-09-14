// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

/**
 * Big O
 * Time-complexity : O(n)
 * Space-complexity: O(n)
 * 
 * Approach 1: Compare two maps
 * Approach 2: 1 map with the counter and a second loop decrementing, then all values should be zero
 * 
 * @param s1 
 * @param s2 
 * @returns 
 */
export default function checkPermutations(s1: string, s2: string): boolean {
    //these checks are like this because empty string is valid
    if (s1 == null || s2 == null) {
        return false
    }
    if (typeof s1 === 'undefined' || typeof s2 === 'undefined') {
        return false
    }
    if (s1.length != s2.length) {
        return false
    }
    const s1Map = buildMap(s1)
    const s2Map = buildMap(s2)
    for (let key in s1Map) {
        if(s2Map[key] != s1Map[key]) {
            return false
        }
    }
    return true
}

function buildMap(str: string): Record<string, number> {
    const map: Record<string, number> = {}
    for(let i = 0; i < str.length; i++) {
        if(map[str[i]]) {
            map[str[i]]++
        } else {
            map[str[i]] = 1
        }
    }
    return map
}