// Generated by CoffeeScript 1.9.2
(function() {
  var DateTime, Uncertainty, areDateTimesOrQuantities, areNumbers, classesEqual, codesAreEquivalent, compareEveryItemInArrays, compareObjects, deepCompareKeysAndValues, equals, equivalent, getClassOfObjects, getKeysFromObject, isCode, isFunction, isUncertainty;

  DateTime = require('../datatypes/datetime').DateTime;

  Uncertainty = require('../datatypes/uncertainty').Uncertainty;

  areNumbers = function(a, b) {
    return typeof a === 'number' && typeof b === 'number';
  };

  areDateTimesOrQuantities = function(a, b) {
    return (a instanceof DateTime && b instanceof DateTime) || ((a != null ? a.isQuantity : void 0) && (b != null ? b.isQuantity : void 0));
  };

  isUncertainty = function(x) {
    return x instanceof Uncertainty;
  };

  module.exports.lessThan = function(a, b, precision) {
    switch (false) {
      case !areNumbers(a, b):
        return a < b;
      case !areDateTimesOrQuantities(a, b):
        return a.before(b, precision);
      case !isUncertainty(a):
        return a.lessThan(b);
      case !isUncertainty(b):
        return Uncertainty.from(a).lessThan(b);
      default:
        return null;
    }
  };

  module.exports.lessThanOrEquals = function(a, b, precision) {
    switch (false) {
      case !areNumbers(a, b):
        return a <= b;
      case !areDateTimesOrQuantities(a, b):
        return a.sameOrBefore(b, precision);
      case !isUncertainty(a):
        return a.lessThanOrEquals(b);
      case !isUncertainty(b):
        return Uncertainty.from(a).lessThanOrEquals(b);
      default:
        return null;
    }
  };

  module.exports.greaterThan = function(a, b, precision) {
    switch (false) {
      case !areNumbers(a, b):
        return a > b;
      case !areDateTimesOrQuantities(a, b):
        return a.after(b, precision);
      case !isUncertainty(a):
        return a.greaterThan(b);
      case !isUncertainty(b):
        return Uncertainty.from(a).greaterThan(b);
      default:
        return null;
    }
  };

  module.exports.greaterThanOrEquals = function(a, b, precision) {
    switch (false) {
      case !areNumbers(a, b):
        return a >= b;
      case !areDateTimesOrQuantities(a, b):
        return a.sameOrAfter(b, precision);
      case !isUncertainty(a):
        return a.greaterThanOrEquals(b);
      case !isUncertainty(b):
        return Uncertainty.from(a).greaterThanOrEquals(b);
      default:
        return null;
    }
  };

  module.exports.equivalent = equivalent = function(a, b) {
    var aClass, bClass, ref;
    if ((a == null) && (b == null)) {
      return true;
    }
    if (!((a != null) && (b != null))) {
      return false;
    }
    if (isCode(a)) {
      return codesAreEquivalent(a, b);
    }
    if (a != null ? a.isRatio : void 0) {
      return a.equivalent(b);
    }
    ref = getClassOfObjects(a, b), aClass = ref[0], bClass = ref[1];
    switch (aClass) {
      case '[object Array]':
        return compareEveryItemInArrays(a, b, equivalent);
      case '[object Object]':
        return compareObjects(a, b, equivalent);
      case '[object String]':
        if (bClass === '[object String]') {
          return (a.localeCompare(b, 'en', {
            sensitivity: 'base'
          })) === 0;
        }
    }
    return equals(a, b);
  };

  isCode = function(object) {
    return object.hasMatch && typeof object.hasMatch === 'function';
  };

  codesAreEquivalent = function(code1, code2) {
    return code1.hasMatch(code2);
  };

  getClassOfObjects = function(object1, object2) {
    var obj;
    return (function() {
      var j, len, ref, results;
      ref = [object1, object2];
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        obj = ref[j];
        results.push({}.toString.call(obj));
      }
      return results;
    })();
  };

  compareEveryItemInArrays = function(array1, array2, comparisonFunction) {
    return array1.length === array2.length && array1.every(function(item, i) {
      return comparisonFunction(item, array2[i]);
    });
  };

  compareObjects = function(a, b, comparisonFunction) {
    if (!classesEqual(a, b)) {
      return false;
    }
    return deepCompareKeysAndValues(a, b, comparisonFunction);
  };

  classesEqual = function(object1, object2) {
    return object2 instanceof object1.constructor && object1 instanceof object2.constructor;
  };

  deepCompareKeysAndValues = function(a, b, comparisonFunction) {
    var aKeys, bKeys, finalComparisonResult, shouldReturnNull;
    aKeys = getKeysFromObject(a).sort();
    bKeys = getKeysFromObject(b).sort();
    shouldReturnNull = false;
    if (aKeys.length === bKeys.length && aKeys.every((function(_this) {
      return function(value, index) {
        return value === bKeys[index];
      };
    })(this))) {
      finalComparisonResult = aKeys.every(function(key) {
        var comparisonResult;
        if ((a[key] == null) && (b[key] == null)) {
          return true;
        }
        comparisonResult = comparisonFunction(a[key], b[key]);
        if (comparisonResult === null) {
          shouldReturnNull = true;
        }
        return comparisonResult;
      });
    } else {
      finalComparisonResult = false;
    }
    if (shouldReturnNull) {
      return null;
    }
    return finalComparisonResult;
  };

  getKeysFromObject = function(object) {
    var key, objectClass;
    objectClass = {}.toString.call(object);
    return ((function() {
      var results;
      if (!isFunction(key)) {
        results = [];
        for (key in object) {
          results.push(key);
        }
        return results;
      }
    })());
  };

  isFunction = function(input) {
    return input instanceof Function || {}.toString.call(input) === '[object Function]';
  };

  module.exports.equals = equals = function(a, b) {
    var aClass, bClass, ref;
    if (!((a != null) && (b != null))) {
      return null;
    }
    if (a != null ? a.isQuantity : void 0) {
      return a.equals(b);
    }
    if (a != null ? a.isRatio : void 0) {
      return a.equals(b);
    }
    if (a instanceof Uncertainty) {
      b = Uncertainty.from(b);
    } else if (b instanceof Uncertainty) {
      a = Uncertainty.from(a);
    }
    if (typeof a.equals === 'function') {
      return a.equals(b);
    }
    if (typeof a === typeof b && typeof a === 'string' || typeof a === 'number' || typeof a === 'boolean') {
      return a === b;
    }
    ref = getClassOfObjects(a, b), aClass = ref[0], bClass = ref[1];
    if (aClass !== bClass) {
      return false;
    }
    switch (aClass) {
      case '[object Date]':
        return a.getTime() === b.getTime();
      case '[object RegExp]':
        return ['source', 'global', 'ignoreCase', 'multiline'].every(function(p) {
          return a[p] === b[p];
        });
      case '[object Array]':
        if (a.indexOf(null) >= 0 || a.indexOf(void 0) >= 0 || b.indexOf(null) >= 0 || b.indexOf(void 0) >= 0) {
          return null;
        }
        return compareEveryItemInArrays(a, b, equals);
      case '[object Object]':
        return compareObjects(a, b, equals);
      case '[object Function]':
        return a === b;
    }
    return false;
  };

}).call(this);

//# sourceMappingURL=comparison.js.map