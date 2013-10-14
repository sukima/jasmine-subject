describe "Jasmine-Subject", ->
  require "../lib/jasmine-subject"

  beforeEach ->
    @testObject =
      foo: "foo"
      bar: "bar"
      baz: "baz"

  describe "#subject", ->

    it "should take a function", ->
      expect( -> subject(->@testObject) ).not.toThrow()

    it "should take an object", ->
      expect( -> subject(@testObject) ).not.toThrow()

  describe "#its", ->

    it "should return as if expect() was called", ->
      subject -> @testObject

      its("foo").toBe "foo"
      its("bar").toBe "bar"
      its("baz").toBe "baz"

    it "should add 'should' aliases for toBe, toEqual, and toContain", ->
      subject -> @testObject

      its("foo").shouldBe "foo"
      its("bar").shouldEqual "bar"
      its("baz").shouldContain "baz"
