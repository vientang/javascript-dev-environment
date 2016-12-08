// Use required b/c this file isn't transpiled

// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
// this says, if Mocha sees a css file, treat it like an empty function
require.extensions['.css'] = function() {};