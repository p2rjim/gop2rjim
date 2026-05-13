const path = require('path')

process.env.HOST = '0.0.0.0'
process.env.HOSTNAME = '0.0.0.0'
process.env.PORT = process.env.PORT || '3000'
process.env.APP_DATA_DIR = process.env.APP_DATA_DIR || process.env.RENDER_DISK_MOUNT_PATH || '/tmp/gop2rjim'

require(path.join(__dirname, 'frontend', 'dist', 'standalone', 'server.js'))