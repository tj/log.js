# Log.js

Lightweight logging for [NodeJS](http://nodejs.org). Includes a streaming log reader.


## Installation

```bash
$ npm install log
```


## Example

By default, a Log’s stream is `stdout`, and its log level defaults is `DEBUG`. 

Instead of `DEBUG`,  let’s create a log with the `info` level:

```javascript
var Log = require('log')
  , log = new Log('info');

log.debug('preparing email');
log.info('sending email');
log.error('failed to send email');
```

Specifying a specific stream:

```javascript
var fs = require('fs')
 , Log = require('log')
 , log = new Log('debug', fs.createWriteStream('my.log'));
```

Instead of the log level constants, you can just supply a string:

```javascript
var Log = require('log')
  , log = new Log('warning');
```
 
You can use `%s` to pass arguments (much like `console.log()`):
 
```javascript
log.error('oh no, failed to send mail to %s.', user.email);
```


## Reader

To stream a log, simply pass a readable stream instead of a writable:

```javascript
var Log    = require('log')
  , fs     = require('fs')
  , stream = fs.createReadStream(__dirname + '/file.log')
  , log    = new Log('debug', stream);

log.on('line', function(line){
  console.log(line);
});
```

(**Note:** `log.js` assumes utf8 encoded data.)

Example output:

```javascript
{ date: Sun, 26 Sep 2010 01:26:14 GMT
, level: 1
, levelString: 'ALERT'
, msg: 'a alert message'
}
{ date: Sun, 26 Sep 2010 01:26:14 GMT
, level: 0
, levelString: 'EMERGENCY'
, msg: 'a emergency message'
}
```
    
## Log Levels

 Mirror that of syslog:
 
  - `0` `EMERGENCY`   system unusable
  - `1` `ALERT`       immediate action required
  - `2` `CRITICAL`    condition critical
  - `3` `ERROR`       condition error
  - `4` `WARNING`     condition warning
  - `5` `NOTICE`      condition normal, but significant 
  - `6` `INFO`        a purely informational message
  - `7` `DEBUG`       debugging information

## License 

(The MIT License)

Copyright (c) 2009-2010 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
