const newsfeedarticalRoute = require('express').Router()
const newsfeedarticalController = require('../controller/newsfeedartical.controller')

const NEWSFEEDARTICAL = '/newsfeedartical'

newsfeedarticalRoute.post(`${NEWSFEEDARTICAL}/view`, newsfeedarticalController.view)

module.exports = newsfeedarticalRoute