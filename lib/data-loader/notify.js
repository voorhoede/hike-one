const EventEmitter = require('events')

class UpdateNotifier extends EventEmitter {
  notify () {
    this.emit('contentupdate')
  }
}

module.exports = new UpdateNotifier()
