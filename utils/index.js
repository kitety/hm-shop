/**
 * Gets params from url as an object
 * @param {String} url
 * @return {Object}
 */
export function getParams(url) {
  var params = {};
  var match = url.match(/\?(.*)$/);

  if (match && match[1]) {
    match[1].split('&').forEach(function(pair) {
      pair = pair.split('=');
      params[pair[0]] = pair[1];
    });
  }

  return params;
};
