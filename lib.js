const got = require('got')
const chalk = require('chalk')
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

const display = (entry, log) => {
  log('\n')
  log(chalk.bgRed.white.bold(entry.keyword))
  log(chalk.gray('============================================================='))
  log(chalk.gray(entry.phonetic))
  entry.trans.forEach(i => log(chalk.green(i)))
  log(chalk.gray('============================================================='))
}

const help = (log) => {
  log(chalk.gray('============================================================='))
  log(chalk.green.bold('帮助'))
  log('语法: whay <my-word> [--debug]')
  log('例子: whay my-word')
  log('命令: whay')
  log('参数: 要查询的单词,必选, 唯一')
  log('选项:')
  log('--debug          开启调试, 可选')
  log('--help           查看帮助')
}

module.exports = {
  lookup,
  display,
  help
}
