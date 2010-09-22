
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