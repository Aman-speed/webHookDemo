const express = require('express')
const { getUserDetails, gitWebHookCallback } = require('../controller/webhook.controller')

const route = express.Router()

route.post('/webHook',getUserDetails)
route.post('/gitWebHook',gitWebHookCallback)

module.exports = route