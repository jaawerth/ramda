var _curry2 = require('./internal/_curry2');
var _hasMethod = require('./internal/_hasMethod');
var equals = require('./equals');


/**
 * Returns the position of the last occurrence of an item in
 * an array, or -1 if the item is not included in the array.
 * `R.equals` is used to determine equality.
 *
 * @func
 * @memberOf R
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 *
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */
module.exports = _curry2(function lastIndexOf(target, xs) {
  if (_hasMethod('lastIndexOf', xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (equals(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});
