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
      assertion: JSON.stringify({content: content,
				 origin: origin,
				 usernameHint: usernameHint}),
    });
  },
  validateAssertion: function(assertion_string) {
    assertion = JSON.parse(assertion_string);
    return Promise.resolve({
      identity: 'evil.genius.verified',
      contents: assertion.content
    });
  }
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
      rtcIdentityProvider = reg;
    }
  };
} else {
  init();
}
