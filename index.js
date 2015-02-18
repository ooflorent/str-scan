module.exports = Scanner

function Scanner(string) {
  this.string = String(string)
  this.index = 0
  this.match = null
}

Scanner.prototype.check = function(pattern) {
  var match = pattern.exec(this.string.substr(this.index))
  if (match && match.index === 0) {
    this.match.set(match[0])
  } else {
    this.match.reset()
  }

  return this.match.string
}

Scanner.prototype.peek = function(length) {
  return this.string.substr(this.index, length)
}

Scanner.prototype.reset = function() {
  this.match.reset()
  this.index = 0
}

Scanner.prototype.scan = function(pattern) {
  var string = this.check(pattern)
  if (string !== null) {
    this.index += this.match.length
  }

  return string
}

Scanner.prototype.search = function(pattern) {
  this.check(pattern)
  return this.match.length
}

Scanner.prototype.skip = function(pattern) {
  this.scan(pattern)
  return this.match.length
}

function Match(string) {
  this.set(string)
}

Match.prototype.set = function(string) {
  if (string != null && string.length !== 0) {
    this.string = string
    this.length = string.length
  } else {
    this.string = null
    this.length = 0
  }
}

Match.prototype.reset = function() {
  this.set(null)
}
