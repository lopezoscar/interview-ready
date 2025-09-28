// 9. *String Rotation*;

// import { isSubstring } from "./__utils__/strings"

// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.
// [e.g., "waterbottle" is a rotation of 'erbottlewat") 
//.                                       waterbottle
    //const str1 = "Hello";
    //const str2 = "oHell";
export default function stringRotation(s1: string, s2: string): boolean {
    const copy = s1+s1
    return isSubstring(copy, s2)
}

function isSubstring(s1: string, s2: string): boolean {
    return s1.includes(s2)
}