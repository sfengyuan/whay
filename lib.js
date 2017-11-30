const got = require('got')
/* eslint-disable no-unused-vars */
const colors = require('colors')
const d = require('./dictionary.js')
const fs = require('fs')
const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
}

const options = {
  timeout: 3000,
  headers
}

const lookup = async (word, debug, cb) => {
  try {
    const resp = await got(d.yd.url(word), options)
    if (debug) {
      fs.writeFile(`whay-debug-${word}-${Date.now()}.html`, resp.body, err => { if (err) console.log(err) })
    }
    cb(null, d.yd.extract(resp.body))
  } catch (error) {
    cb(error.message)
  }
}

const display = (entry, logger) => {
  logger('\n')
  logger(entry.keyword.bold.white.bgRed)
  logger('============================================================='.gray)
  logger(entry.phonetic.gray)
  entry.trans.forEach(i => logger(i.green))
  logger('============================================================='.gray)
}

module.exports = {
  lookup,
  display
}
