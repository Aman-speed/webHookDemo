const express = require('express')
const { getUserDetails } = require('../controller/webhook.controller')

const route = express.Router()

route.post('/webHook',getUserDetails)

module.exports = route