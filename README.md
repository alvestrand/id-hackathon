# WebRTC Identity hackathon

Notes, code and pointers for the IETF Hackathon project "WebRTC Identity" at London IETF 101, March 2018

Instant comms channel: #webrtc on irc.w3.org

The following repos contain interesting code for the hackathon:

## CoSMo's code:

- https://github.com/CoSMoSoftware/idp
- https://github.com/CoSMoSoftware/idp-scaffolding
- modified appRTC using those IN PROGRESS

I (sergio) have put together some code to create a p2p server integrated with idp: https://github.com/CoSMoSoftware/idp-p2p
I have also setup so you can test it online easily:
https://p2p-cosmo.ddns.net/
When testing with Firefox nightly I sometimes get an "unreadable" error on gUM, and I get sometimes an ice connection error which I have not yet been able to debug, but idp works.

## Mozilla's Martin's code

## Cisco's Fluffy's code

- https://github.com/fluffy/rtcweb-identity
- Presentation on RTCWeb Identity https://github.com/alvestrand/id-hackathon/blob/master/WebRTC_Identity_v42.pdf

## Google's Hta: The Shortest Possible IdP
  * subdirectory "clienthack"
  * running demo: call by
     - pc.setIdentityProvider("www.alvestrand.no", "identity-provider.js", "hint-anonymous");
* Add Your Code HERE 

## Other pages

* [Mozilla spec differences](https://github.com/alvestrand/id-hackathon/blob/master/mozilla-spec-diffs.md)

