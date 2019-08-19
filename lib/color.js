/**
 * Colors code
 */
const COLORS = {
  green: "\033[32m",
  deepGreen: "\033[36m",
  yellow: "\033[33m",
  red: "\033[31m",
  deepRed: "\033[41m"
}

/**
 * It'll provite different colors according dfferent log type
 * @param {String} type log type
 */
function color(type) {
  let typeColor = {
    debug: COLORS.green,
    info: COLORS.deepGreen,
    warn: COLORS.yellow,
    error: COLORS.red,
    fatal: COLORS.deepRed,
  };

  return typeColor[type];
}

module.exports = {
  color
} 