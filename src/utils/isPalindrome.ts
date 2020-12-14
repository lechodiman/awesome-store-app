const isPalindrome = (str: string) => {
  if (!str) {
    return false;
  }

  const re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');

  const len = str.length;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

export default isPalindrome;
