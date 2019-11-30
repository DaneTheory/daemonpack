const { random } = require('lodash')

/**
 * get random string
 */
const getRandomString = () => {
  const strings = ['Donut 🍩', 'Strawbery 🍓', 'Pizza 🍕', 'Daemonpack 👹']

  return strings[random(0, strings.length - 1)]
}

module.exports = getRandomString
