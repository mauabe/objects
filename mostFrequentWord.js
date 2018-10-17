function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}
  
function mostFrequentWord(text) {
  var words = getTokens(text);                  // invokes clean-up function defined above
  var wordFrequencies = {};                     // storage for word counting
  for (var i = 0; i <= words.length; i++) {     // loop though collection of words
    if (words[i] in wordFrequencies) {          // evaluates if word has appeared before, 
      wordFrequencies[words[i]]++;              // adds word to the storage object, and increments its value
    }
    else {
      wordFrequencies[words[i]]=1;              // if word is not in storage, create new entry and it's value is 1
    }
  }
  var currentMaxKey = Object.keys(wordFrequencies)[0];    //initalizes the frequency as value of first word in collection of keys
  var currentMaxCount = wordFrequencies[currentMaxKey];   //initalizes the larges count as the value of variable defined in previous line
  
  for (var word in wordFrequencies) {                     //loop over the array of keys (words)
    if (wordFrequencies[word] > currentMaxCount) {        // evaluates if current word in loop appear more frequently than current word
      currentMaxKey = word;                               // assigns the current word as the most frequent
      currentMaxCount = wordFrequencies[word];            // assigns the largest occurrency to the value of this current word
    }
  }
  return currentMaxKey;                                   // returns the word with largst frequency in text.
}