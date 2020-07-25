function palindrome(str) {
  const temp = str.replace(/[\W]_/g, "").toLowerCase();
  return temp === temp.split("").reverse().join("");
}

palindrome("_eye");
palindrome("nasabayaBasan");
palindrome("0:/:0");
