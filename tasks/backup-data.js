const ncp = require('ncp')
const paths = require('../config').paths
const time = Math.floor(Date.now() / 1000)
const fs = require('fs')
const backupFolder = '_backup'

if (!fs.existsSync(`${paths.data}/current`)) {
  // no data excists yet
  return
}

if (!fs.existsSync(`${paths.data}/${backupFolder}`)){
  fs.mkdirSync(`${paths.data}/${backupFolder}`)
}

ncp(`${paths.data}/current` , `${paths.data}/_backup/${time}`, (err) => {
  if (err) { return console.error(`Error making data backup: ${err}`) }
  console.log(`Finsihed making backup. Copied files in ${time}`)
})
