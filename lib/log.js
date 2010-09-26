
/*!
* Log.js
* Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
* MIT Licensed
*/

/**
 * Initialize a `Loggeer` with the given log `level` defaulting
 * to __DEBUG__ and `stream` defaulting to _stdout_.
 * 
 * @param {Number} level 
 * @param {Object} stream 
 * @api public
 */

var Log = exports = module.exports = function Log(level, stream){
  if ('string' == typeof level) level = exports[level.toUpperCase()];
  this.level = level || exports.DEBUG;
  this.stream = stream || process.stdout;
};

/**
 * System is unusable.
 * 
 * @type Number
 */

exports.EMERGENCY = 0;

/**
 * Action must be taken immediately.
 * 
 * @type Number 
 */

exports.ALERT = 1;

/**
 * Critical condition.
 *
 * @type Number
 */

exports.CRITICAL = 2;

/**
 * Error condition.
 * 
 * @type Number
 */

exports.ERROR = 3;

/**
 * Warning condition.
 * 
 * @type Number
 */

exports.WARNING = 4;

/**
 * Normal but significant condition.
 * 
 * @type Number
 */

exports.NOTICE = 5;

/**
 * Purely informational message.
 * 
 * @type Number
 */

exports.INFO = 6;

/**
 * Application debug messages.
 * 
 * @type Number
 */

exports.DEBUG = 7;

/**
 * prototype.
 */ 

Log.prototype = {

  /**
   * Log output message.
   *
   * @param  {String} levelStr
   * @param  {String} msg
   * @api private
   */

  log: function(levelStr, msg) {
    if (exports[levelStr] <= this.level) {
      this.stream.write(
          '[' + new Date().toUTCString() + ']'
        + ' ' + levelStr
        + ' ' + msg
        + '\n'
      );
    }
  },

  /**
   * Log emergency `msg`.
   *
   * @param  {String} msg
   * @api public
   */

  emergency: function(msg){
    this.log('EMERGENCY', msg);
  },

  /**
   * Log alert `msg`.
   *
   * @param  {String} msg
   * @api public
   */

  alert: function(msg){
    this.log('ALERT', msg);
  },

  /**
   * Log critical `msg`.
   *
   * @param  {String} msg
   * @api public
   */

  critical: function(msg){
    this.log('CRITICAL', msg);
  },

  /**
   * Log error `msg`.
   *
   * @param  {String} msg
   * @api public
   */

  error: function(msg){
    this.log('ERROR', msg);
  },

  /**
   * Log warning `msg`.
   *
   * @param  {String} msg
   * @api public
   */

  warning: function(msg){
    this.log('WARNING', msg);
  },

  /**
   * Log notice `msg`.
   *
   * @param  {String} msg
   * @api public
   */

  notice: function(msg){
    this.log('NOTICE', msg);
  },

  /**
   * Log info `msg`.
   *
   * @param  {String} msg
   * @api public
   */ 

  info: function(msg){
    this.log('INFO', msg);
  },

  /**
   * Log debug `msg`.
   *
   * @param  {String} msg
   * @api public
   */

  debug: function(msg){
    this.log('DEBUG', msg);
  }
};