#!/usr/bin/env node
const prog = require('caporal')
const lookup = require('./lib.js').lookup
const display = require('./lib.js').display

prog
  .version('1.0.0')
  .description('A simple terminal dictionary')
  .argument('<word>', 'Word to lookup')
  .option('--debug [debug]', 'Save results to current directory.')
  .action(({word}, options, logger) => {
    lookup(word, options.debug, (err, results) => {
      if (err) {
        logger.error(err)
        process.exit(1)
      }
      display(results, logger.info)
    })
  })

prog.parse(process.argv)
