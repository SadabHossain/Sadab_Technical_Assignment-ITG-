const userprofileRoute = require('express').Router()
const userprofileController = require('../controller/userprofile.controller')

const USERPROFILE = '/userprofile'

userprofileRoute.post(`${USERPROFILE}/saveOrUpdate`, userprofileController.saveOrUpdate)

module.exports = userprofileRoute