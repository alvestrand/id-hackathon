// Identity provider implementation
//
// Note: console is not available for this context.
// This file can also be run under node.js - mostly for syntax check.
//

const idp = {
  generateAssertion: function(content, origin, usernameHint) {
    return Promise.resolve({
      idp: {
	domain: location.origin,
	protocol: 'identity-provider.js',
      },
      assertion: 'assertion(' + content + ', '
	  + origin + ', ' + usernameHint + ')',
    });
  },
  validateAssertion: function(assertion, origin) {
    return Promise.resolve({
      identity: 'evil.genius.verified',
      contents: 'validated assertion'
    });
  },
};

function init() {
  if (typeof(console) !== 'undefined') {
    console.log('Init called');
  }
  if (rtcIdentityProvider) {
    rtcIdentityProvider.register(idp);
  } else {
    // console.log('Provider is null');
  }
}

// For testing environment
if (typeof(module) !== 'undefined') {
  module.exports = {
    init: init,
    setRegistrar: function(reg) {
      rtcIdentityProvider = reg; }
  };
} else {
  init();
}
