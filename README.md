# str-scan

> Performs lexical scanning operations on a string.  
> Inspired by [Ruby's `StringScanner` class](http://ruby-doc.org/stdlib-2.2.0/libdoc/strscan/rdoc/StringScanner.html).

## Install

```sh
npm install --save str-scan
```

## Usage

```js
var Scanner = require('str-scan')
var scanner = new StringScanner('Hello world!')
```

## API

### Scanner(string)

Creates a new `Scanner` object to scan over the given `string`.

### scanner.index

Returns the position of the scan pointer.

### scanner.match

Returns the last match.

### scanner.string

Returns the string being scanned.

### scanner.check(pattern)

Returns the value that `scan` would return, without advancing the scan pointer.

### scanner.peek(length)

Extracts a string corresponding to `string[index,length]`, without advancing the scan pointer.

### scanner.scan(pattern)

Tries to match with `pattern` at the current position. If there’s a match, the scanner advances the scan pointer and returns the matched string. Otherwise, the scanner returns `null`.

### scanner.search(pattern)

Tests whether the given `pattern` is matched from the current scan pointer. Returns the length of the match, or `0`. The scan pointer is not advanced.

### scanner.skip(pattern)

Attempts to skip over the given `pattern` beginning with the scan pointer. If it matches, the scan pointer is advanced to the end of the match, and the length of the match is returned. Otherwise, `0` is returned.

### scanner.reset()

Reset the scan pointer and clear matching data.

## License

MIT © Florent Cailhol
