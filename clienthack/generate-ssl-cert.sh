#!/bin/bash

openssl req -new -x509 -keyout certificate.pem -out certificate.pem -days 365 -nodes
