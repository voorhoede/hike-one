const { join } = require('path');
const { tmpdir } = require('os');
const dumpRoot = join(tmpdir(), 'hike-one')
const dataDir = join(dumpRoot, 'data', 'current')

module.exports = {
  dumpRoot,
  dataDir
}
