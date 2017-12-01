#!/usr/bin/env node
const lookup = require('./lib.js').lookup
const display = require('./lib.js').display
const help = require('./lib.js').help
const ora = require('ora')

const argv = require('minimist')(process.argv.slice(2))
const log = console.log
const args = argv._
const debug = argv.debug
delete argv._
delete argv.debug
if (args.length !== 1 || Object.keys(argv).length > 0 || argv.help) {
  help(log)
  process.exit(1)
}


const spinner = ora('正在查询').start()

lookup(args[0], debug, (err, results) => {
  if (err) {
    log(err)
  }
  spinner.stop()
  display(results, log)
})
