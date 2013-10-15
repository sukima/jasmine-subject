var isCommonJS = typeof window == "undefined" && typeof exports == "object";
var context = (typeof window == "undefined") ? global : window;

jasmine.Env.prototype.subject = function(varname, setter) {
	/*jshint eqnull:true */
	if (setter == null) {
		setter = varname;
		varname = null;
	}
	if (typeof setter === 'function') {
		this.currentSpec.subjectObject = setter.call(this.currentSpec);
	}
	else {
		this.currentSpec.subjectObject = setter;
	}
	if (varname != null) {
		this.currentSpec[varname] = this.currentSpec.subjectObject;
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

var subject = function(name, setter) {
	return jasmine.getEnv().subject(name, setter);
};
jasmine.subject = context.subject = subject;
if (isCommonJS) exports.subject = subject;

var its = function(property) {
	return jasmine.getEnv().its(property);
};
jasmine.its = context.its = its;
if (isCommonJS) exports.its = its;

/* vim:set ts=2 sw=2 noet fdm=marker: */
