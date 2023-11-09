function groupAnagrams(words) {
    const anagrams = {};

    for (const word of words) {
        const sortedWord = Array.from(word).sort().join('');
        if (anagrams[sortedWord]) {
            anagrams[sortedWord].push(word);
        } else {
            anagrams[sortedWord] = [word];
        }
    }

    return Object.values(anagrams);
}