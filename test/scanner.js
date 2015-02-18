var expect = require('chai').expect
var StringScanner = require('../')

describe('StringScanner', function() {
  var scanner = new StringScanner('abc123 def456')

  beforeEach(function() {
    scanner.reset()
  })

  it('#check', function() {
    expect(scanner.check(/[a-z]+/)).to.equal('abc')
    expect(scanner.check(/[a-z]+/)).to.equal('abc')
    expect(scanner.check(/[0-9]+/)).to.be.null

    scanner.scan(/[a-z]+/)

    expect(scanner.check(/[a-z]+/)).to.be.null
    expect(scanner.check(/[0-9]+/)).to.equal('123')
  })

  it('#peek', function() {
    expect(scanner.peek(1)).to.equal('a')
    expect(scanner.peek(2)).to.equal('ab')
    expect(scanner.peek(3)).to.equal('abc')
  })

  it('#scan', function() {
    expect(scanner.scan(/[a-z]+/)).to.equal('abc')
    expect(scanner.scan(/[0-9]+/)).to.equal('123')
    expect(scanner.scan(/./)).to.equal(' ')
    expect(scanner.scan(/[a-z]+/)).to.equal('def')
    expect(scanner.scan(/[0-9]+/)).to.equal('456')
    expect(scanner.scan(/./)).to.be.null
  })

  it('#search', function() {
    expect(scanner.search(/[a-z]+/)).to.equal(3)
    expect(scanner.search(/[0-9]+/)).to.equal(0)

    scanner.scan(/[a-z]+/)

    expect(scanner.search(/[a-z]+/)).to.equal(0)
    expect(scanner.search(/[0-9]+/)).to.equal(3)
  })

  it('#skip', function() {
    expect(scanner.skip(/[a-z]+/)).to.equal(3)
    expect(scanner.skip(/[a-z]+/)).to.equal(0)
    expect(scanner.skip(/[0-9]+/)).to.equal(3)
  })

  it('#reset', function() {
    scanner.scan(/[a-z]+/)
    scanner.reset()

    expect(scanner.index).to.equal(0)
  })
})
