# HackShots

This is an HTTPS wrapper for the [PinkyUrl](http://pinkyurl.com/) URL screenshot service.

## Usage

Any requests to `/api/v1/i` will be passed along to the appropriate pinkyurl API endpoint.  So for example if you wanted to request the following url:

 > http://pinkyurl.com/i?url=http://clean.alltheragefaces.com/img/faces/large/misc-true-story-realistic-l.png&out-format=png&resize=266x173

You would make a request to:

 > [/api/v1/i?url=http://clean.alltheragefaces.com/img/faces/large/misc-true-story-realistic-l.png&out-format=png&resize=266x173](https://www.hackshots.com/api/v1/i?url=http://clean.alltheragefaces.com/img/faces/large/misc-true-story-realistic-l.png&out-format=png&resize=266x173).

![https://www.hackshots.com/api/v1/i?url=http://clean.alltheragefaces.com/img/faces/large/misc-true-story-realistic-l.png&out-format=png](https://www.hackshots.com/api/v1/i?url=http://clean.alltheragefaces.com/img/faces/large/misc-true-story-realistic-l.png&out-format=png)
