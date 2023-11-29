const express = require('express')
const motorcyclesRouter = require('./motorcycles.router')

function routerApi(app){
    const router = express.Router()

    app.use('/api/v1', router)

    router.use('/motorcycles', motorcyclesRouter)
}

module.exports = routerApi