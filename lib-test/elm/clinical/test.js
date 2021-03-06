// Generated by CoffeeScript 1.9.2
(function() {
  var DT, PatientContext, PatientSource, Uncertainty, data, p1, p2, p3, ref, setup, should, vsets;

  should = require('should');

  setup = require('../../setup');

  data = require('./data');

  vsets = require('./valuesets');

  DT = require('../../../lib/datatypes/datatypes');

  PatientContext = require('../../../lib/cql').PatientContext;

  Uncertainty = require('../../../lib/datatypes/uncertainty').Uncertainty;

  ref = require('./patients'), p1 = ref.p1, p2 = ref.p2, p3 = ref.p3;

  PatientSource = require('../../../lib/cql-patient').PatientSource;

  describe('ValueSetDef', function() {
    this.beforeEach(function() {
      return setup(this, data, [], vsets);
    });
    it('should return a resolved value set when the codeService knows about it', function() {
      var vs;
      vs = this.known.exec(this.ctx);
      vs.oid.should.equal('2.16.840.1.113883.3.464.1003.101.12.1061');
      vs.version.should.equal('20140501');
      return vs.codes.length.should.equal(3);
    });
    it('should execute one-arg to ValueSet with ID', function() {
      var vs;
      vs = this['unknown One Arg'].exec(this.ctx);
      vs.oid.should.equal('1.2.3.4.5.6.7.8.9');
      return should.not.exist(vs.version);
    });
    return it('should execute two-arg to ValueSet with ID and version', function() {
      var vs;
      vs = this['unknown Two Arg'].exec(this.ctx);
      vs.oid.should.equal('1.2.3.4.5.6.7.8.9');
      return vs.version.should.equal('1');
    });
  });

  describe('ValueSetRef', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should have a name', function() {
      return this.foo.name.should.equal('Acute Pharyngitis');
    });
    return it('should execute to the defined value set', function() {
      return this.foo.exec(this.ctx).oid.should.equal('2.16.840.1.113883.3.464.1003.101.12.1001');
    });
  });

  describe('InValueSet', function() {
    this.beforeEach(function() {
      return setup(this, data, [], vsets);
    });
    it('should find string code in value set', function() {
      return this.string.exec(this.ctx).should.be["true"]();
    });
    it('should throw an error when codes are in several codesystems', function() {
      return should((function(_this) {
        return function() {
          return _this.sharedCodesFoo.exec(_this.ctx);
        };
      })(this))["throw"]('In (valueset) is ambiguous -- multiple codes with multiple code systems exist in value set.');
    });
    it('should return false when there are multiple codesystems in a valueset but the string does not match any codes in valueset', function() {
      return this.sharedCodesNoMatch.exec(this.ctx).should.be["false"]();
    });
    it('should throw an error if not all codes have the same codesystem', function() {
      return should((function(_this) {
        return function() {
          return _this.improperSharedCodesCodeValue.exec(_this.ctx);
        };
      })(this))["throw"]('In (valueset) is ambiguous -- multiple codes with multiple code systems exist in value set.');
    });
    it('should find string code in versioned value set', function() {
      return this.stringInVersionedValueSet.exec(this.ctx).should.be["true"]();
    });
    it('should not find short code in value set (missing code system)', function() {
      return this.shortCode.exec(this.ctx).should.be["false"]();
    });
    it('should find medium code in value set', function() {
      return this.mediumCode.exec(this.ctx).should.be["true"]();
    });
    it('should find long code in value set', function() {
      return this.longCode.exec(this.ctx).should.be["true"]();
    });
    it('should not find string code in value set', function() {
      return this.wrongString.exec(this.ctx).should.be["false"]();
    });
    it('should not find string code in versioned value set', function() {
      return this.wrongStringInVersionedValueSet.exec(this.ctx).should.be["false"]();
    });
    it('should not find short code in value set (missing code system)', function() {
      return this.wrongShortCode.exec(this.ctx).should.be["false"]();
    });
    it('should not find medium code in value set', function() {
      return this.wrongMediumCode.exec(this.ctx).should.be["false"]();
    });
    it('should find long code with different version in value set', function() {
      return this.longCodeDifferentVersion.exec(this.ctx).should.be["true"]();
    });
    it('should not find code if it is null', function() {
      return this.nullCode.exec(this.ctx).should.be["false"]();
    });
    it('should return true if code in list is equivalent', function() {
      return this.inListOfCodes.exec(this.ctx).should.be["true"]();
    });
    it('should return true if code in list is equivalent using ExpressionRef', function() {
      return this.inListOfCodesExpressionRef.exec(this.ctx).should.be["true"]();
    });
    it('should return false if no code in list is equivalent', function() {
      return this.inWrongListOfCodes.exec(this.ctx).should.be["false"]();
    });
    return it('should ignore null codes in list', function() {
      return this.listOfCodesWithNull.exec(this.ctx).should.be["true"]();
    });
  });

  describe('Patient Property In ValueSet', function() {
    this.beforeEach(function() {
      return setup(this, data, [], vsets);
    });
    it('should find that John is not female', function() {
      this.ctx.patient = new PatientSource([p1]).currentPatient();
      return this.isFemale.exec(this.ctx).should.be["false"]();
    });
    return it('should find that Sally is female', function() {
      this.ctx.patient = new PatientSource([p2]).currentPatient();
      return this.isFemale.exec(this.ctx).should.be["true"]();
    });
  });

  describe('CodeDef', function() {
    this.beforeEach(function() {
      return setup(this, data, []);
    });
    it('should return a CodeDef', function() {
      var codeDef;
      codeDef = this.lib.getCode('Tobacco smoking status code');
      codeDef.constructor.name.should.equal('CodeDef');
      return codeDef.name.should.equal('Tobacco smoking status code');
    });
    return it('should execute to a Code datatype', function() {
      var code, codeDef;
      codeDef = this.lib.getCode('Tobacco smoking status code');
      code = codeDef.exec(this.ctx);
      code.code.should.equal('72166-2');
      code.system.should.equal('http://loinc.org');
      should.not.exist(code.version);
      return code.display.should.equal('Tobacco smoking status');
    });
  });

  describe('CodeRef', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should have a name', function() {
      return this.foo.name.should.equal('Tobacco smoking status code');
    });
    return it('should execute to the defined code', function() {
      var code;
      code = this.foo.exec(this.ctx);
      code.code.should.equal('72166-2');
      code.system.should.equal('http://loinc.org');
      should.not.exist(code.version);
      return code.display.should.equal('Tobacco smoking status');
    });
  });

  describe('ConceptDef', function() {
    this.beforeEach(function() {
      return setup(this, data, []);
    });
    it('should return a ConceptDef', function() {
      var conceptDef;
      conceptDef = this.lib.getConcept('Tobacco smoking status');
      conceptDef.constructor.name.should.equal('ConceptDef');
      return conceptDef.name.should.equal('Tobacco smoking status');
    });
    return it('should execute to a Concept datatype', function() {
      var concept, conceptDef;
      conceptDef = this.lib.getConcept('Tobacco smoking status');
      concept = conceptDef.exec(this.ctx);
      concept.display.should.equal('Tobacco smoking status');
      concept.codes.should.have.length(1);
      concept.codes[0].code.should.equal('72166-2');
      concept.codes[0].system.should.equal('http://loinc.org');
      should.not.exist(concept.codes[0].version);
      return concept.codes[0].display.should.equal('Tobacco smoking status');
    });
  });

  describe('ConceptRef', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should have a name', function() {
      return this.foo.name.should.equal('Tobacco smoking status');
    });
    return it('should execute to the defined concept', function() {
      var concept;
      concept = this.foo.exec(this.ctx);
      concept.display.should.equal('Tobacco smoking status');
      concept.codes.should.have.length(1);
      concept.codes[0].code.should.equal('72166-2');
      concept.codes[0].system.should.equal('http://loinc.org');
      should.not.exist(concept.codes[0].version);
      return concept.codes[0].display.should.equal('Tobacco smoking status');
    });
  });

  describe('CalculateAge', function() {
    this.beforeEach(function() {
      var month_offset, offsetDiff;
      setup(this, data, [p1]);
      this.bday = new Date(1980, 5, 17);
      this.bdayPlus20 = new Date(2000, 5, 18);
      this.ctx = new PatientContext(this.ctx.library, this.ctx.patient, this.ctx.codeService, this.ctx.parameters, DT.DateTime.fromJSDate(this.bdayPlus20));
      this.today = this.ctx.getExecutionDateTime();
      offsetDiff = this.today.toJSDate().getTimezoneOffset() - this.bday.getTimezoneOffset();
      this.bday.setMinutes(this.bday.getMinutes() + offsetDiff);
      month_offset = this.today.month === 5 && this.today.getDate() < 17 ? 6 : 5;
      this.full_months = ((this.today.year - 1980) * 12) + (this.today.month - month_offset);
      return this.timediff = this.today.toJSDate() - this.bday;
    });
    it('should execute age in years', function() {
      return this.years.exec(this.ctx).should.equal(Math.floor(this.full_months / 12));
    });
    it.skip('should execute age in months', function() {
      var dayOfMonth, full_months, i, j, month_offset, results;
      dayOfMonth = this.today;
      results = [];
      for (i = j = 1; j <= 28; i = ++j) {
        dayOfMonth.setDate(i);
        month_offset = dayOfMonth.getMonth() === 5 && dayOfMonth.getDate() < 17 ? 6 : 5;
        full_months = ((dayOfMonth.getFullYear() - 1980) * 12) + (dayOfMonth.getMonth() - month_offset);
        results.push([full_months, full_months + 1].indexOf(this.months.exec(this.ctx)).should.not.equal(-1));
      }
      return results;
    });
    it.skip('should execute age in weeks', function() {
      return this.weeks.exec(this.ctx).should.eql(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(this.timediff / 1000) / 60) / 60) / 24) / 7)));
    });
    it('should execute age in days', function() {
      var days;
      days = Math.floor(Math.floor(Math.floor(Math.floor(this.timediff / 1000) / 60) / 60) / 24);
      return this.days.exec(this.ctx).should.eql(new Uncertainty(days - 1, days));
    });
    it('should execute age in hours', function() {
      var hours;
      hours = Math.floor(Math.floor(Math.floor(this.timediff / 1000) / 60) / 60);
      return this.hours.exec(this.ctx).should.eql(new Uncertainty(hours - 24, hours));
    });
    it('should execute age in minutes', function() {
      var minutes;
      minutes = Math.floor(Math.floor(this.timediff / 1000) / 60);
      return this.minutes.exec(this.ctx).should.eql(new Uncertainty(minutes - (24 * 60), minutes));
    });
    return it('should execute age in seconds', function() {
      var seconds;
      seconds = Math.floor(this.timediff / 1000);
      return this.seconds.exec(this.ctx).should.eql(new Uncertainty(seconds - (24 * 60 * 60), seconds));
    });
  });

  describe('CalculateAgeAt', function() {
    this.beforeEach(function() {
      return setup(this, data, [p1]);
    });
    it('should execute age at 2012 as 31 - 32 (since 2012 is not precise to days)', function() {
      return this.ageAt2012.exec(this.ctx).should.eql(new Uncertainty(31, 32));
    });
    it('should execute age at 19810216 as 0', function() {
      return this.ageAt19810216.exec(this.ctx).should.equal(0);
    });
    it('should execute age at 1975 as -5 to -4 (since 1975 is not precise to days)', function() {
      return this.ageAt1975.exec(this.ctx).should.eql(new Uncertainty(-5, -4));
    });
    it('should give an uncertainty due to birthdate time component with (using AgeInYearsAt)', function() {
      setup(this, data, [p3]);
      return this.ageInYearsDateTimeArg.exec(this.ctx).should.eql(new Uncertainty(17, 18));
    });
    it('should give an uncertainty due to birthdate time component (using CalculateAgeInYearsAt)', function() {
      setup(this, data, [p3]);
      return this.calculateAgeInYearsDateTimeArg.exec(this.ctx).should.eql(new Uncertainty(17, 18));
    });
    xit('should convert birthdate to date, give 18 (using AgeInYearsAt)', function() {
      setup(this, data, [p3]);
      return this.ageInYearsDateArg.exec(this.ctx).should.eql(18);
    });
    return xit('should convert birthdate to date, give 18 (using CalculateAgeInYearsAt)', function() {
      setup(this, data, [p3]);
      return this.calculateAgeInYearsDateArg.exec(this.ctx).should.eql(18);
    });
  });

}).call(this);

//# sourceMappingURL=test.js.map
