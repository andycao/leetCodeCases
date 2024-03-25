/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const list = ["a", "e", "i", "o", "u"];
  let wordsList = sentence.split(" ");

  for (let i = 0; i < wordsList.length; i++) {
    wordsList[i] = processWords(wordsList[i], i);
  }

  return wordsList.join(' ');

  function processWords(words, index) {
    const trail = new Array(index + 1).fill('a').join('');
    if (list.includes(words.charAt(0).toLowerCase())) {
      return words + "ma" + trail;
    } else {
      return words.slice(1) + words[0] + 'ma' + trail;
    }
  }
};
// @lc code=end
