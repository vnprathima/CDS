// Generated by CoffeeScript 1.9.2
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, DT, DomainResource, Element, ElementDefinition, Extension, FamilyHistory, FamilyHistoryRelationComponent, FamilyHistoryRelationConditionComponent, HumanName, Identifier, Narrative, Parameters, Period, Quantity, Range, Ratio, Reference, Resource, SampledData, Timing,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  DT = require('../cql-datatypes');

  CORE = require('./core');

  Element = CORE.Element;

  Resource = CORE.Resource;

  Timing = CORE.Timing;

  Period = CORE.Period;

  Parameters = CORE.Parameters;

  Coding = CORE.Coding;

  Resource = CORE.Resource;

  Range = CORE.Range;

  Quantity = CORE.Quantity;

  Attachment = CORE.Attachment;

  BackboneElement = CORE.BackboneElement;

  DomainResource = CORE.DomainResource;

  ContactPoint = CORE.ContactPoint;

  ElementDefinition = CORE.ElementDefinition;

  Extension = CORE.Extension;

  HumanName = CORE.HumanName;

  Address = CORE.Address;

  Ratio = CORE.Ratio;

  SampledData = CORE.SampledData;

  Reference = CORE.Reference;

  CodeableConcept = CORE.CodeableConcept;

  Identifier = CORE.Identifier;

  Narrative = CORE.Narrative;

  Element = CORE.Element;


  /** 
  Embedded class
  @class FamilyHistoryRelationConditionComponent
  @exports  FamilyHistoryRelationConditionComponent as FamilyHistoryRelationConditionComponent
   */

  FamilyHistoryRelationConditionComponent = (function(superClass) {
    extend(FamilyHistoryRelationConditionComponent, superClass);

    function FamilyHistoryRelationConditionComponent(json) {
      this.json = json;
      FamilyHistoryRelationConditionComponent.__super__.constructor.call(this, this.json);
    }


    /**
    The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
    @returns {CodeableConcept}
     */

    FamilyHistoryRelationConditionComponent.prototype.type = function() {
      if (this.json['type']) {
        return new CodeableConcept(this.json['type']);
      }
    };


    /**
    Indicates what happened as a result of this condition.  If the condition resulted in death, deceased date is captured on the relation.
    @returns {CodeableConcept}
     */

    FamilyHistoryRelationConditionComponent.prototype.outcome = function() {
      if (this.json['outcome']) {
        return new CodeableConcept(this.json['outcome']);
      }
    };

    FamilyHistoryRelationConditionComponent.prototype.onsetAge = function() {
      return new Quantity(this.json['onsetAge']);
    };


    /**
    Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
    @returns {Range}
     */

    FamilyHistoryRelationConditionComponent.prototype.onsetRange = function() {
      if (this.json['onsetRange']) {
        return new Range(this.json['onsetRange']);
      }
    };


    /**
    Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
    @returns {Array} an array of {@link String} objects
     */

    FamilyHistoryRelationConditionComponent.prototype.onsetString = function() {
      return this.json['onsetString'];
    };


    /**
    An area where general notes can be placed about this specific condition.
    @returns {Array} an array of {@link String} objects
     */

    FamilyHistoryRelationConditionComponent.prototype.note = function() {
      return this.json['note'];
    };

    return FamilyHistoryRelationConditionComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class FamilyHistoryRelationComponent
  @exports  FamilyHistoryRelationComponent as FamilyHistoryRelationComponent
   */

  FamilyHistoryRelationComponent = (function(superClass) {
    extend(FamilyHistoryRelationComponent, superClass);

    function FamilyHistoryRelationComponent(json) {
      this.json = json;
      FamilyHistoryRelationComponent.__super__.constructor.call(this, this.json);
    }


    /**
    This will either be a name or a description.  E.g. "Aunt Susan", "my cousin with the red hair".
    @returns {Array} an array of {@link String} objects
     */

    FamilyHistoryRelationComponent.prototype.name = function() {
      return this.json['name'];
    };


    /**
    The type of relationship this person has to the patient (father, mother, brother etc.).
    @returns {CodeableConcept}
     */

    FamilyHistoryRelationComponent.prototype.relationship = function() {
      if (this.json['relationship']) {
        return new CodeableConcept(this.json['relationship']);
      }
    };


    /**
    The actual or approximate date of birth of the relative.
    @returns {Period}
     */

    FamilyHistoryRelationComponent.prototype.bornPeriod = function() {
      if (this.json['bornPeriod']) {
        return new Period(this.json['bornPeriod']);
      }
    };


    /**
    The actual or approximate date of birth of the relative.
    @returns {Array} an array of {@link Date} objects
     */

    FamilyHistoryRelationComponent.prototype.bornDate = function() {
      if (this.json['bornDate']) {
        return DT.DateTime.parse(this.json['bornDate']);
      }
    };


    /**
    The actual or approximate date of birth of the relative.
    @returns {Array} an array of {@link String} objects
     */

    FamilyHistoryRelationComponent.prototype.bornString = function() {
      return this.json['bornString'];
    };

    FamilyHistoryRelationComponent.prototype.ageAge = function() {
      return new Quantity(this.json['ageAge']);
    };


    /**
    The actual or approximate age of the relative at the time the family history is recorded.
    @returns {Range}
     */

    FamilyHistoryRelationComponent.prototype.ageRange = function() {
      if (this.json['ageRange']) {
        return new Range(this.json['ageRange']);
      }
    };


    /**
    The actual or approximate age of the relative at the time the family history is recorded.
    @returns {Array} an array of {@link String} objects
     */

    FamilyHistoryRelationComponent.prototype.ageString = function() {
      return this.json['ageString'];
    };


    /**
    If this resource is indicating that the related person is deceased, then an indicator of whether the person is deceased (yes) or not (no) or the age or age range or description of age at death - can be indicated here. If the reason for death is known, then it can be indicated in the outcome code of the condition - in this case the deceased property should still be set.
    @returns {Array} an array of {@link boolean} objects
     */

    FamilyHistoryRelationComponent.prototype.deceasedBoolean = function() {
      return this.json['deceasedBoolean'];
    };

    FamilyHistoryRelationComponent.prototype.deceasedAge = function() {
      return new Quantity(this.json['deceasedAge']);
    };


    /**
    If this resource is indicating that the related person is deceased, then an indicator of whether the person is deceased (yes) or not (no) or the age or age range or description of age at death - can be indicated here. If the reason for death is known, then it can be indicated in the outcome code of the condition - in this case the deceased property should still be set.
    @returns {Range}
     */

    FamilyHistoryRelationComponent.prototype.deceasedRange = function() {
      if (this.json['deceasedRange']) {
        return new Range(this.json['deceasedRange']);
      }
    };


    /**
    If this resource is indicating that the related person is deceased, then an indicator of whether the person is deceased (yes) or not (no) or the age or age range or description of age at death - can be indicated here. If the reason for death is known, then it can be indicated in the outcome code of the condition - in this case the deceased property should still be set.
    @returns {Array} an array of {@link Date} objects
     */

    FamilyHistoryRelationComponent.prototype.deceasedDate = function() {
      if (this.json['deceasedDate']) {
        return DT.DateTime.parse(this.json['deceasedDate']);
      }
    };


    /**
    If this resource is indicating that the related person is deceased, then an indicator of whether the person is deceased (yes) or not (no) or the age or age range or description of age at death - can be indicated here. If the reason for death is known, then it can be indicated in the outcome code of the condition - in this case the deceased property should still be set.
    @returns {Array} an array of {@link String} objects
     */

    FamilyHistoryRelationComponent.prototype.deceasedString = function() {
      return this.json['deceasedString'];
    };


    /**
    This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
    @returns {Array} an array of {@link String} objects
     */

    FamilyHistoryRelationComponent.prototype.note = function() {
      return this.json['note'];
    };


    /**
    The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
    @returns {Array} an array of {@link FamilyHistoryRelationConditionComponent} objects
     */

    FamilyHistoryRelationComponent.prototype.condition = function() {
      var i, item, len, ref, results;
      if (this.json['condition']) {
        ref = this.json['condition'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new FamilyHistoryRelationConditionComponent(item));
        }
        return results;
      }
    };

    return FamilyHistoryRelationComponent;

  })(BackboneElement);


  /**
  Significant health events and conditions for people related to the subject relevant in the context of care for the subject.
  @class FamilyHistory
  @exports FamilyHistory as FamilyHistory
   */

  FamilyHistory = (function(superClass) {
    extend(FamilyHistory, superClass);

    function FamilyHistory(json) {
      this.json = json;
      FamilyHistory.__super__.constructor.call(this, this.json);
    }


    /**
    This records identifiers associated with this family history record that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
    @returns {Array} an array of {@link Identifier} objects
     */

    FamilyHistory.prototype.identifier = function() {
      var i, item, len, ref, results;
      if (this.json['identifier']) {
        ref = this.json['identifier'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Identifier(item));
        }
        return results;
      }
    };


    /**
    The person who this history concerns.
    @returns {Reference}
     */

    FamilyHistory.prototype.patient = function() {
      if (this.json['patient']) {
        return new Reference(this.json['patient']);
      }
    };


    /**
    The date (and possibly time) when the family history was taken.
    @returns {Array} an array of {@link Date} objects
     */

    FamilyHistory.prototype.date = function() {
      if (this.json['date']) {
        return DT.DateTime.parse(this.json['date']);
      }
    };


    /**
    Conveys information about family history not specific to individual relations.
    @returns {Array} an array of {@link String} objects
     */

    FamilyHistory.prototype.note = function() {
      return this.json['note'];
    };


    /**
    The related person. Each FamilyHistory resource contains the entire family history for a single person.
    @returns {Array} an array of {@link FamilyHistoryRelationComponent} objects
     */

    FamilyHistory.prototype.relation = function() {
      var i, item, len, ref, results;
      if (this.json['relation']) {
        ref = this.json['relation'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new FamilyHistoryRelationComponent(item));
        }
        return results;
      }
    };

    return FamilyHistory;

  })(DomainResource);

  module.exports.FamilyHistory = FamilyHistory;

}).call(this);

//# sourceMappingURL=familyhistory.js.map
