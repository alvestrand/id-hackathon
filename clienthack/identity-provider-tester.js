// Simulated context for an Identity Provider.
// Intended to be run under node.js.
//
const provider = require('./.well-known/idp-proxy/identity-provider.js');
global.location = { origin: 'test-origin' };

var rtcIdentityProvider = {
  register: function(idp) {
    console.log('Registration called');
    this.generate = idp.generateAssertion;
    this.validate = idp.validateAssertion;
  }
}

console.log('provider: ', provider);
provider.setRegistrar(rtcIdentityProvider);
provider.init();

async function tryGenerate() {
  x = await rtcIdentityProvider.generate('foo', 'bar', 'baz');
  console.log(x);
  try {
    y = await rtcIdentityProvider.validate(x.assertion);
    console.log(y);
  } catch (e) {
    console.log('error ' + JSON.stringify(e));
  }
}

tryGenerate();
