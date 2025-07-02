from typing import List, Dict
import collections

def group_anagrams(words: List[str]) -> Dict[str, object]:
    anagram_map = collections.defaultdict(list)

    for word in words:
        word_lower = word.lower()
        count = [0] * 26
        for c in word_lower:
            count[ord(c) - ord('a')] += 1
        anagram_map[tuple(count)].append(word)

    groups = list(anagram_map.values())
    largest_group = max(groups, key=len)

    return {
        "largest_group": largest_group,
        "total_groups": len(groups),
        "all_groups":groups
    }
