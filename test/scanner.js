var expect = require('chai').expect
var Scanner = require('../')
var scanner

describe('Scanner', function() {
  beforeEach(function() {
    scanner = new Scanner('abc123 def456')
  })

  it('index', function() {
    expect(scanner.index).to.equal(0)
    scanner.index = 7
    expect(scanner.peek(3)).to.equal('def')
  })

  it('match', function() {
    scanner.scan(/[a-z]+/)

    expect(scanner.match.string).to.equal('abc')
    expect(scanner.match.length).to.equal(3)

    scanner.check(/[a-z]+/)

    expect(scanner.match.string).to.equal(null)
    expect(scanner.match.length).to.equal(0)

    scanner.scan(/[0-9]+/)

    expect(scanner.match.string).to.equal('123')
    expect(scanner.match.length).to.equal(3)
  })

  it('string', function() {
    expect(scanner.string).to.equal('abc123 def456')
    scanner.string = 'foo'
    expect(scanner.peek(3)).to.equal('foo')
  })

  it('check(pattern)', function() {
    expect(scanner.check(/[a-z]+/)).to.equal('abc')
    expect(scanner.check(/[a-z]+/)).to.equal('abc')
    expect(scanner.check(/[0-9]+/)).to.be.null

    scanner.skip(/[a-z]+/)

    expect(scanner.check(/[a-z]+/)).to.be.null
    expect(scanner.check(/[0-9]+/)).to.equal('123')
  })

  it('peek(length)', function() {
    expect(scanner.peek(1)).to.equal('a')
    expect(scanner.peek(2)).to.equal('ab')
    expect(scanner.peek(3)).to.equal('abc')
  })

  it('scan(pattern)', function() {
    expect(scanner.scan(/[a-z]+/)).to.equal('abc')
    expect(scanner.scan(/[0-9]+/)).to.equal('123')
    expect(scanner.scan(/./)).to.equal(' ')
    expect(scanner.scan(/[a-z]+/)).to.equal('def')
    expect(scanner.scan(/[0-9]+/)).to.equal('456')
    expect(scanner.scan(/./)).to.be.null
  })

  it('search(pattern)', function() {
    expect(scanner.search(/[a-z]+/)).to.equal(3)
    expect(scanner.search(/[0-9]+/)).to.equal(0)

    scanner.skip(/[a-z]+/)

    expect(scanner.search(/[a-z]+/)).to.equal(0)
    expect(scanner.search(/[0-9]+/)).to.equal(3)
  })

  it('skip(pattern)', function() {
    expect(scanner.skip(/[a-z]+/)).to.equal(3)
    expect(scanner.skip(/[a-z]+/)).to.equal(0)
    expect(scanner.skip(/[0-9]+/)).to.equal(3)
  })

  it('reset()', function() {
    scanner.scan(/[a-z]+/)
    scanner.reset()

    expect(scanner.index).to.equal(0)
  })
})
