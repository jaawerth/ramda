var chain = require('./chain');
var compose = require('./compose');
var map = require('./map');


/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.
 *
 * @func
 * @memberOf R
 * @category Function
 * @see R.pipeK
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (m a -> m z)
 * @param {...Function}
 * @return {Function}
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.composeK(
 *        R.compose(Maybe.of, R.toUpper),
 *        get('state'),
 *        get('address'),
 *        get('user'),
 *        parseJson
 *      );
 *
 *      getStateCode(Maybe.of('{"user":{"address":{"state":"ny"}}}'));
 *      //=> Just('NY')
 *      getStateCode(Maybe.of('[Invalid JSON]'));
 *      //=> Nothing()
 */
module.exports = function composeK() {
  return compose.apply(this, map(chain, arguments));
};
