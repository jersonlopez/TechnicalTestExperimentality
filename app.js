'use strict'

const { moon } = require('./conection')


let app = require('./server')

require('http').Server(app)

app.listen(app.get('port'), () => {
    console.log(`It's the best app running in... http://localhost:${app.get('port')}`)
})

moon

module.exports = app;
