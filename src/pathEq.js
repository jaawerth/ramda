var _curry3 = require('./internal/_curry3');
var _path = require('./internal/_path');
var equals = require('./equals');


/**
 * Determines whether a nested path on an object has a specific value,
 * in `R.equals` terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @category Relation
 * @sig [String] -> * -> {String: *} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
module.exports = _curry3(function pathEq(path, val, obj) {
  return equals(_path(path, obj), val);
});
