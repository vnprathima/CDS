// Generated by CoffeeScript 1.9.2
(function() {
  var getTimezoneSeparatorFromString, normalizeMillisecondsField, normalizeMillisecondsFieldInString, typeIsArray;

  module.exports.compact = function(things) {
    return things.filter(function(x) {
      return x != null;
    });
  };

  module.exports.numerical_sort = function(things, direction) {
    if (direction == null) {
      direction = "asc";
    }
    return things.sort(function(a, b) {
      if (direction === "asc") {
        return a - b;
      } else {
        return b - a;
      }
    });
  };

  module.exports.isNull = function(value) {
    return value === null;
  };

  module.exports.typeIsArray = typeIsArray = Array.isArray || function(value) {
    return {}.toString.call(value) === '[object Array]';
  };

  module.exports.allTrue = function(things) {
    if (typeIsArray(things)) {
      return things.every(function(x) {
        return x;
      });
    } else {
      return things;
    }
  };

  module.exports.anyTrue = function(things) {
    if (typeIsArray(things)) {
      return things.some(function(x) {
        return x;
      });
    } else {
      return things;
    }
  };

  module.exports.jsDate = Date;

  module.exports.normalizeMillisecondsFieldInString = normalizeMillisecondsFieldInString = function(string, msString) {
    var beforeMs, msAndAfter, ref, timezoneField, timezoneSeparator;
    msString = normalizeMillisecondsField(msString);
    ref = string.split('.'), beforeMs = ref[0], msAndAfter = ref[1];
    timezoneSeparator = getTimezoneSeparatorFromString(msAndAfter);
    if (!!timezoneSeparator) {
      timezoneField = msAndAfter != null ? msAndAfter.split(timezoneSeparator)[1] : void 0;
    }
    if (timezoneField == null) {
      timezoneField = '';
    }
    return string = beforeMs + '.' + msString + timezoneSeparator + timezoneField;
  };

  module.exports.normalizeMillisecondsField = normalizeMillisecondsField = function(msString) {
    return msString = (msString + "00").substring(0, 3);
  };

  module.exports.getTimezoneSeparatorFromString = getTimezoneSeparatorFromString = function(string) {
    var ref, ref1, timezoneSeparator;
    if ((string != null ? (ref = string.match(/-/)) != null ? ref.length : void 0 : void 0) === 1) {
      return timezoneSeparator = '-';
    } else if ((string != null ? (ref1 = string.match(/\+/)) != null ? ref1.length : void 0 : void 0) === 1) {
      return timezoneSeparator = '+';
    } else {
      return timezoneSeparator = '';
    }
  };

}).call(this);

//# sourceMappingURL=util.js.map
