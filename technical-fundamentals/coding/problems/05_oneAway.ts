// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param str1 
 * @param str2 
 * @returns 
 */
export default function isOneAway(str1: string, str2: string): boolean {
  //check the different of the length in both
  //or check if are the same
  
  // zero edits away
  if(str1 == str2) {
    return true
  }
  // one edit away - insert or replace
  const diff = str1.length - str2.length
  if (diff === 1 || diff == -1) {
    return true
  }
  //guardrail
  if (str1.length != str2.length) {
    return false
  }
  //iterate one word, check if exists the letter in the other tolarating one change
  //pale - bale
  let changes = 0
  for(let i = 0; i < str1.length; i++) {
    if (changes > 1) {
        return false
    }
    if (str1[i] != str2[i]) {
        changes++
    }
  }
  return true
}
