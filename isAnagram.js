var test = require("tape");

function isAnagram(a, b) {
  a = a.split("");
  b = b.split("")
  a.sort();
  b.sort();
  if(a.length != b.length){
    return false;
  }
  for(var i = 0; i < a.length; i++){
    if(a[i] != b[i]){
      return false;
    }
  }
  return true;
}

test("isAnagram", function(t) {
  t.test("when passed a word return anagram", function(t) {
    t.true(isAnagram("abc","cba"), true, "should return true");
    t.end();
  });

  t.test("when passed a word it should return an anagram", function(t){
    t.true(isAnagram("abc", "abc"), true, "should return false");
    t.end();
  });

  t.test("when passed a word it shoudlreturn an anagram", function(t){
    t.false(isAnagram("abc","aac"), false, "should return false");
    t.end();
  });

  t.test("whe passed a word it should return an anagram", function(t) {
    t.false(isAnagram("abc", "abcd"), false, "should return false");
    t.end();
  });

  t.test("when passed a word it should return an anagram", function(t){
    t.false(isAnagram("abc","abca"), false, "should return false");
    t.end();
  });
})
