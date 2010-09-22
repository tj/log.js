
# Log.js

 Light-weight logging for [NodeJS](http://nodejs.org).

## Installation

    $ npm install log

## Example

Log level defaults to __DEBUG__ however here we specify __INFO__, and the stream defaults to _stdout_:

    var Log = require('log')
      , log = new Log(Log.INFO);

    log.debug('preparing email');
    log.info('sending email');
    log.error('failed to send email');

Specifying a specific stream:

    var fs = require('fs')
      , Log = require('log')
      , log = new Log(Log.DEBUG, fs.createWriteStream('my.log'));

## Log Levels

 Mirror that of syslog:
 
  - 0 __EMERGENCY__  system is unusable
  - 1 __ALERT__ action must be taken immediately
  - 2 __CRITICAL__ the system is in critical condition
  - 3 __ERROR__ error condition
  - 4 __WARNING__ warning condition
  - 5 __NOTICE__ a normal but significant condition
  - 6 __NOTICE__ a purely informational message
  - 7 __DEBUG__ messages to debug an application