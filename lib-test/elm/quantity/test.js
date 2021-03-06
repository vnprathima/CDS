// Generated by CoffeeScript 1.9.2
(function() {
  var Quantity, doAddition, doDivision, doMultiplication, doSubtraction, ref, setup, should;

  should = require('should');

  setup = require('../../setup');

  ref = require('../../../lib/elm/quantity'), Quantity = ref.Quantity, doAddition = ref.doAddition, doSubtraction = ref.doSubtraction, doMultiplication = ref.doMultiplication, doDivision = ref.doDivision;

  describe('Quantity', function() {
    var ref1, results, unitName, unitValue;
    it('should allow creation of Quantity with valid ucum units', function() {
      return should.doesNotThrow(function() {
        return new Quantity({
          unit: "mm",
          value: 42.424242
        });
      });
    });
    it('should allow creation of Quantity with valid ucum units on multiple uses of same unit', function() {
      return should.doesNotThrow(function() {
        new Quantity({
          unit: "cm",
          value: 42.424242
        });
        return new Quantity({
          unit: "cm",
          value: 43.434242
        });
      });
    });
    it('should allow creation of Quantity with valid ucum converted time units', function() {
      return should.doesNotThrow(function() {
        return new Quantity({
          unit: "years",
          value: 3
        });
      });
    });
    it('should throw error when creating Quantity with invalid ucum units', function() {
      return should.throws(function() {
        return new Quantity({
          unit: "quacks",
          value: 42.424242
        });
      });
    });
    it('should throw error when creating Quantity with invalid ucum units on multiple uses of same unit', function() {
      should.throws(function() {
        return new Quantity({
          unit: "caches",
          value: 42.424242
        });
      });
      return should.throws(function() {
        return new Quantity({
          unit: "caches",
          value: 44.4242242
        });
      });
    });
    it('should allow creation of Quantity with no unit', function() {
      return should.doesNotThrow(function() {
        return new Quantity({
          value: 9
        });
      });
    });
    it('should allow creation of Quantity with empty string unit', function() {
      return should.doesNotThrow(function() {
        return new Quantity({
          unit: "",
          value: 9
        });
      });
    });
    it('should allow for the value of the quantity to be null', function() {
      return should.throws(function() {
        var q;
        q = new Quantity({
          unit: "mg",
          value: null
        });
        return should.equal(q.value, null);
      });
    });
    it('should convert undefined values to null', function() {
      return should.throws(function() {
        var q;
        q = new Quantity({
          unit: "mg",
          value: void 0
        });
        return should.equal(q.value, null);
      });
    });
    it('should throw an error if value is a string that is not a number', function() {
      return should.throws(function() {
        return new Quantity({
          unit: "mg",
          value: "twenty"
        });
      });
    });
    it('should throw an error if value is NaN', function() {
      return should.throws(function() {
        return new Quantity({
          unit: "mg",
          value: NaN
        });
      });
    });
    it('should handle cql temporal keywords with ucum units', function() {
      var a, b;
      a = new Quantity({
        unit: "d",
        value: 1
      });
      b = new Quantity({
        unit: "day",
        value: 1
      });
      return a.equals(b).should.equal(true);
    });
    it('dividing identical units should result in default unit', function() {
      var denominator, numerator, result;
      numerator = new Quantity({
        unit: "mg",
        value: -5.5
      });
      denominator = new Quantity({
        unit: "mg",
        value: 2.0
      });
      result = numerator.dividedBy(denominator);
      result.unit.should.equal("1");
      return result.value.should.equal(-2.75);
    });
    it('should allow for singular time units', function() {
      var day, hour, millisecond, minute, month, second, year;
      year = new Quantity({
        unit: "year",
        value: 4
      });
      month = new Quantity({
        unit: "month",
        value: 4
      });
      day = new Quantity({
        unit: "day",
        value: 4
      });
      hour = new Quantity({
        unit: "hour",
        value: 4
      });
      minute = new Quantity({
        unit: "minute",
        value: 4
      });
      second = new Quantity({
        unit: "second",
        value: 4
      });
      millisecond = new Quantity({
        unit: "millisecond",
        value: 4
      });
      year.equals(new Quantity({
        unit: "years",
        value: 4
      })).should.be["true"]();
      month.equals(new Quantity({
        unit: "months",
        value: 4
      })).should.be["true"]();
      day.equals(new Quantity({
        unit: "days",
        value: 4
      })).should.be["true"]();
      hour.equals(new Quantity({
        unit: "hours",
        value: 4
      })).should.be["true"]();
      minute.equals(new Quantity({
        unit: "minutes",
        value: 4
      })).should.be["true"]();
      second.equals(new Quantity({
        unit: "seconds",
        value: 4
      })).should.be["true"]();
      return millisecond.equals(new Quantity({
        unit: "milliseconds",
        value: 4
      })).should.be["true"]();
    });
    it('added to Quantity with invalid ucum units results in null', function() {
      var quantity1, quantity2;
      quantity1 = new Quantity({
        unit: "m",
        value: 2
      });
      quantity2 = new Quantity({
        unit: "m",
        value: 2
      });
      quantity2.unit = "fakeUnit";
      return should(doAddition(quantity1, quantity2)).be["null"]();
    });
    it('subtracted from Quantity with invalid ucum units results in null', function() {
      var quantity1, quantity2;
      quantity1 = new Quantity({
        unit: "m",
        value: 2
      });
      quantity2 = new Quantity({
        unit: "m",
        value: 2
      });
      quantity2.unit = "fakeUnit";
      return should(doSubtraction(quantity1, quantity2)).be["null"]();
    });
    it('multiplied by Quantity with invalid ucum units results in null', function() {
      var quantity1, quantity2;
      quantity1 = new Quantity({
        unit: "m",
        value: 2
      });
      quantity2 = new Quantity({
        unit: "m",
        value: 2
      });
      quantity2.unit = "fakeUnit";
      return should(doMultiplication(quantity1, ".")).be["null"]();
    });
    it('divided by Quantity with invalid ucum units results in null', function() {
      var quantity1, quantity2;
      quantity1 = new Quantity({
        unit: "m",
        value: 2
      });
      quantity2 = new Quantity({
        unit: "m",
        value: 2
      });
      quantity2.unit = "fakeUnit";
      return should(doDivision(quantity1, "/")).be["null"]();
    });
    it('should convert units when possible to perform arithmetic', function() {
      var add, divide, multiply, subtract;
      divide = new Quantity({
        unit: "m",
        value: 8
      }).dividedBy(new Quantity({
        unit: "cm",
        value: 50
      }));
      divide.equals(new Quantity({
        unit: "1",
        value: 16
      })).should.be["true"]();
      multiply = new Quantity({
        unit: "cm",
        value: 8
      }).multiplyBy(new Quantity({
        unit: "m",
        value: 2
      }));
      multiply.equals(new Quantity({
        unit: "m2",
        value: 0.16
      })).should.be["true"]();
      add = doAddition(new Quantity({
        unit: "cm",
        value: 8
      }), new Quantity({
        unit: "m",
        value: 2
      }));
      add.equals(new Quantity({
        unit: "m",
        value: 2.08
      })).should.be["true"]();
      subtract = doSubtraction(new Quantity({
        unit: "cm",
        value: 150
      }), new Quantity({
        unit: "m",
        value: 1
      }));
      return subtract.equals(new Quantity({
        unit: "m",
        value: 0.5
      })).should.be["true"]();
    });
    it('should return null when units are mismatched and cannot be converted', function() {
      var add, subtract;
      add = doAddition(new Quantity({
        unit: "cm",
        value: 8
      }), new Quantity({
        unit: "g",
        value: 2
      }));
      should.not.exist(add);
      subtract = doSubtraction(new Quantity({
        unit: "cm",
        value: 150
      }), new Quantity({
        unit: "mg",
        value: 1
      }));
      return should.not.exist(subtract);
    });
    ref1 = {
      Undefined: void 0,
      Null: null,
      EmptyString: ""
    };
    results = [];
    for (unitName in ref1) {
      unitValue = ref1[unitName];
      results.push(it('should treat unit:' + unitName + ' the same as a unit:"1" in calculations', function() {
        var addWithNullOnLeft, addWithNullOnRight, addWithOneOnLeft, addWithOneOnRight, divideWithNullOnLeft, divideWithNullOnRight, divideWithOneOnLeft, divideWithOneOnRight, multiplyWithNullOnLeft, multiplyWithNullOnRight, multiplyWithOneOnLeft, multiplyWithOneOnRight, subtractWithNullOnLeft, subtractWithNullOnRight, subtractWithOneOnLeft, subtractWithOneOnRight;
        divideWithOneOnRight = new Quantity({
          unit: "m",
          value: 8
        }).dividedBy(new Quantity({
          unit: "1",
          value: 2
        }));
        divideWithNullOnRight = new Quantity({
          unit: "m",
          value: 8
        }).dividedBy(new Quantity({
          unit: unitValue,
          value: 2
        }));
        divideWithOneOnRight.should.deepEqual(divideWithNullOnRight);
        multiplyWithOneOnRight = new Quantity({
          unit: "m",
          value: 8
        }).multiplyBy(new Quantity({
          unit: "1",
          value: 2
        }));
        multiplyWithNullOnRight = new Quantity({
          unit: "m",
          value: 8
        }).multiplyBy(new Quantity({
          unit: unitValue,
          value: 2
        }));
        multiplyWithOneOnRight.should.deepEqual(multiplyWithNullOnRight);
        addWithOneOnRight = doAddition(new Quantity({
          unit: "1",
          value: 8
        }), new Quantity({
          unit: "1",
          value: 2
        }));
        addWithNullOnRight = doAddition(new Quantity({
          unit: "1",
          value: 8
        }), new Quantity({
          unit: unitValue,
          value: 2
        }));
        addWithOneOnRight.should.deepEqual(addWithNullOnRight);
        subtractWithOneOnRight = doSubtraction(new Quantity({
          unit: "1",
          value: 8
        }), new Quantity({
          unit: "1",
          value: 2
        }));
        subtractWithNullOnRight = doSubtraction(new Quantity({
          unit: "1",
          value: 8
        }), new Quantity({
          unit: unitValue,
          value: 2
        }));
        subtractWithOneOnRight.should.deepEqual(subtractWithNullOnRight);
        divideWithOneOnLeft = new Quantity({
          unit: "1",
          value: 8
        }).dividedBy(new Quantity({
          unit: "m",
          value: 2
        }));
        divideWithNullOnLeft = new Quantity({
          unit: unitValue,
          value: 8
        }).dividedBy(new Quantity({
          unit: "m",
          value: 2
        }));
        divideWithOneOnLeft.should.deepEqual(divideWithNullOnLeft);
        multiplyWithOneOnLeft = new Quantity({
          unit: "1",
          value: 8
        }).multiplyBy(new Quantity({
          unit: "m",
          value: 2
        }));
        multiplyWithNullOnLeft = new Quantity({
          unit: unitValue,
          value: 8
        }).multiplyBy(new Quantity({
          unit: "m",
          value: 2
        }));
        multiplyWithOneOnLeft.should.deepEqual(multiplyWithNullOnLeft);
        addWithOneOnLeft = doAddition(new Quantity({
          unit: "1",
          value: 8
        }), new Quantity({
          unit: "1",
          value: 2
        }));
        addWithNullOnLeft = doAddition(new Quantity({
          unit: unitValue,
          value: 8
        }), new Quantity({
          unit: "1",
          value: 2
        }));
        addWithOneOnLeft.should.deepEqual(addWithNullOnLeft);
        subtractWithOneOnLeft = doSubtraction(new Quantity({
          unit: "1",
          value: 8
        }), new Quantity({
          unit: "1",
          value: 2
        }));
        subtractWithNullOnLeft = doSubtraction(new Quantity({
          unit: unitValue,
          value: 8
        }), new Quantity({
          unit: "1",
          value: 2
        }));
        return subtractWithOneOnLeft.should.deepEqual(subtractWithNullOnLeft);
      }));
    }
    return results;
  });

}).call(this);

//# sourceMappingURL=test.js.map
