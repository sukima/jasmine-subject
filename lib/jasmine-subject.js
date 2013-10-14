var isCommonJS = typeof window == "undefined" && typeof exports == "object";
var context = (typeof window == "undefined") ? global : window;

jasmine.Env.prototype.subject = function(setter) {
	if (typeof setter === 'function') {
		this.currentSpec.subjectObject = setter.call(this.currentSpec);
	}
	else {
		this.currentSpec.subjectObject = setter;
	}
	return this;
};

jasmine.Env.prototype.its = function(property) {
	var spec = this.currentSpec;
	var expected = spec.expect( spec.subjectObject[property] );
	expected.shouldBe = expected.toBe;
	expected.shouldEqual = expected.toEqual;
	expected.shouldContain = expected.toContain;
	return expected;
};

var subject = function(setter) {
	return jasmine.getEnv().subject(setter);
};
jasmine.subject = context.subject = subject;
if (isCommonJS) exports.subject = subject;

var its = function(property) {
	return jasmine.getEnv().its(property);
};
jasmine.its = context.its = its;
if (isCommonJS) exports.its = its;

/* vim:set ts=2 sw=2 noet fdm=marker: */
