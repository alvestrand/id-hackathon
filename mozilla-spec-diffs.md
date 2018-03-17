# Differences between Mozilla's IdP and the spec

* Options to setIdpProvider aren't parsed - it takes a string
    * If passing a dictionary, "[object Object]" gets inserted in the URL
* A lot of errors, including wrongly formatted responses, result in the process hanging - the result is dropped, not rejected.

    
