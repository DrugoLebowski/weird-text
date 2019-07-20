# WeirdText
Encoding and decoding tool.

WeirdText is a text encoder/decoder.
Actually, its output is not a real "encryption" because humans could quite easily read it. Machines, instead, may find its output difficult to read without the list of original words.

The purpose of WeirdText is not just having fun. There are real-world applications for it.
E.g.: encryption is forbidden by law in your country, but you still don't want your email content to get automatically processed somehow.

## Encoding
For each word belonging to the original text, leave its first and last characters in their original position, but shuffle (permute) all the characters in the middle of the word.
If possible, the resulting encoded word should not be the same as the original word. Whatever is not a word (whitespace, punctuation, etc.), should be left untouched.
In order to make decoding possible to a machine, your encoder should also output a list of original words. Heads up: the list should only include words that got actually shuffled.
For more details see the example below.

## Decoding
Before decoding text, first do a simple check if the text looks like encoded.
If not, please raise some reasonable error to the user.

Then, use the encoded text and the words list to decode the text.

Your decoded output should, as much as possible, be identical to the original text.
In case of ambiguities (some encoded words could be decoded to two or more original words), decoding errors are acceptable.

## Example
### Original text
```
This is a long looong test sentence,
with some big (biiiiig) words!
```

### Encoded text
```
Tihs is a lnog loonog tset sntceene,
wtih smoe big (biiiiig) wdros!
```

### Encoded words list
```
long looong sentence some test This with words
```

### Decoded text
```
This is a long looong test sentence,
with some big (biiiiig) words!
```

## Definition of done
- The encoder implementation is necessary to us in order to consider the task done
- The decoder implementation is a plus
- Unit tests are a plus
- Styling the tool (with CSS or styled-components) is a plus

## Implementation hints
- We suggest you to go with TDD
- We suggest you to implement the encoder first. It's easier than the decoder.
- You can split the tool into components/utils at your will. We actually suggest you to split it.
- Using additional external dependencies would lower the evaluation score

## Score
The score will depend on the following evaluation criteria (alphabetically sorted):
- Code notes/comments
- Code quality
- Coding style
- Decoding algorithm
- Encoding algorithm
- Knowledge of ES6 JS
- Knowledge of React
- Tests
- Tool architecture