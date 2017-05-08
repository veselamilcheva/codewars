var longestPalindrome = function(s) {

  var length = s.length;
  var result = "";

  var newPalindrome = function(left, right) {
    while (left >= 0 && right < length && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.slice(left + 1, right);
  };

  for (var i = 0; i <= length - 1; i++) {
    var oddnum = newPalindrome(i, i + 1);

    var evennum = newPalindrome(i, i);

    if (oddnum.length > result.length) {

      result = oddnum;
    }
    if (evennum.length > result.length) {

      result = evennum;
    }
  }
  return result.length;
};

console.log(longestPalindrome('rrrggggghhhhtttrrr'));
