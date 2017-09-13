#!/usr/bin/env node
const chalk = require('chalk')
const dumpData = require('../lib/data-loader/dump-data')

dumpData()
  .then(() => console.log(chalk.green(`✓ CMS data saved to ${chalk.bold('data/')}`)))
  .catch(err => console.error(chalk.red('❌ Error dumping data'), err))
