//Check for Palindromes
function palindrome(str) {
  var normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
  var reverseStr = normalizedStr.split('').reverse().join('');
  return reverseStr === normalizedStr;
}

palindrome("eye");
