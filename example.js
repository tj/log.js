
/**
 * Module dependencies.
 */

var Log = require('./lib/log')
  , log = new Log(Log.INFO);

log.debug('preparing email');
log.info('sending email');
log.error('failed to send email');
