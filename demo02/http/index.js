const api = require('./api1')
const proxy = require('./proxy')
api.listen(4000)
proxy.listen(3001)