const signale = require('signale');

function echo(text) {
    signale.watch(`🦄 ${text}`);
}

module.exports = echo;
