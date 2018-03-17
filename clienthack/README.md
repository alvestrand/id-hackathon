# Simple IdP provider
This is intended to be the simplest possible IdP provider.

The file ".well-known/idp-proxy/identity-provider.js" is the provider itself.
You can serve it from localhost by using the "generate-ssl-cert.sh" to generate a cert, and serve HTTPS by running "ssl-server.py" - this serves on port 8124.
The client code in "set-identity-provider.html" exercises the API (and shows nothing).

To access the local version:
pc.setIdentityProvider("localhost:8124", "identity-provider.js",
		      "hint-anonymous");
          
To acces a version off the Net:
pc.setIdentityProvider("www.alvestrand.no", "identity-provider.js",
		      "hint-anonymous");
