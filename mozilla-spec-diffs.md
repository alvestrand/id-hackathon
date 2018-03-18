# Differences between Mozilla's IdP and the spec

* Options to setIdpProvider aren't parsed - it takes a string
    * If passing a dictionary, "[object Object]" gets inserted in the URL
* A lot of errors, including wrongly formatted responses, result in the process hanging - the result is dropped, not rejected. (This seems likely to be a problem I had with understanding how errors were handled in "await")
* The IDP login error is of name "IdpLoginError", while spec says it should be "RTCError" with "errorDetail" set to "idp-need-login"


    
