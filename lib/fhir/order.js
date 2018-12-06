// Generated by CoffeeScript 1.9.2
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, DT, DomainResource, Element, ElementDefinition, Extension, HumanName, Identifier, Narrative, Order, OrderWhenComponent, Parameters, Period, Quantity, Range, Ratio, Reference, Resource, SampledData, Timing,
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
  @class OrderWhenComponent
  @exports  OrderWhenComponent as OrderWhenComponent
   */

  OrderWhenComponent = (function(superClass) {
    extend(OrderWhenComponent, superClass);

    function OrderWhenComponent(json) {
      this.json = json;
      OrderWhenComponent.__super__.constructor.call(this, this.json);
    }


    /**
    Code specifies when request should be done. The code may simply be a priority code.
    @returns {CodeableConcept}
     */

    OrderWhenComponent.prototype.code = function() {
      if (this.json['code']) {
        return new CodeableConcept(this.json['code']);
      }
    };


    /**
    A formal schedule.
    @returns {Timing}
     */

    OrderWhenComponent.prototype.schedule = function() {
      if (this.json['schedule']) {
        return new Timing(this.json['schedule']);
      }
    };

    return OrderWhenComponent;

  })(BackboneElement);


  /**
  A request to perform an action.
  @class Order
  @exports Order as Order
   */

  Order = (function(superClass) {
    extend(Order, superClass);

    function Order(json) {
      this.json = json;
      Order.__super__.constructor.call(this, this.json);
    }


    /**
    Identifiers assigned to this order by the orderer or by the receiver.
    @returns {Array} an array of {@link Identifier} objects
     */

    Order.prototype.identifier = function() {
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
    When the order was made.
    @returns {Array} an array of {@link Date} objects
     */

    Order.prototype.date = function() {
      if (this.json['date']) {
        return DT.DateTime.parse(this.json['date']);
      }
    };


    /**
    Patient this order is about.
    @returns {Reference}
     */

    Order.prototype.subject = function() {
      if (this.json['subject']) {
        return new Reference(this.json['subject']);
      }
    };


    /**
    Who initiated the order.
    @returns {Reference}
     */

    Order.prototype.source = function() {
      if (this.json['source']) {
        return new Reference(this.json['source']);
      }
    };


    /**
    Who is intended to fulfill the order.
    @returns {Reference}
     */

    Order.prototype.target = function() {
      if (this.json['target']) {
        return new Reference(this.json['target']);
      }
    };


    /**
    Text - why the order was made.
    @returns {CodeableConcept}
     */

    Order.prototype.reasonCodeableConcept = function() {
      if (this.json['reasonCodeableConcept']) {
        return new CodeableConcept(this.json['reasonCodeableConcept']);
      }
    };


    /**
    Text - why the order was made.
    @returns {Reference}
     */

    Order.prototype.reasonReference = function() {
      if (this.json['reasonReference']) {
        return new Reference(this.json['reasonReference']);
      }
    };


    /**
    If required by policy.
    @returns {Reference}
     */

    Order.prototype.authority = function() {
      if (this.json['authority']) {
        return new Reference(this.json['authority']);
      }
    };


    /**
    When order should be fulfilled.
    @returns {OrderWhenComponent}
     */

    Order.prototype.when = function() {
      if (this.json['when']) {
        return new OrderWhenComponent(this.json['when']);
      }
    };


    /**
    What action is being ordered.
    @returns {Array} an array of {@link Reference} objects
     */

    Order.prototype.detail = function() {
      var i, item, len, ref, results;
      if (this.json['detail']) {
        ref = this.json['detail'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Reference(item));
        }
        return results;
      }
    };

    return Order;

  })(DomainResource);

  module.exports.Order = Order;

}).call(this);

//# sourceMappingURL=order.js.map