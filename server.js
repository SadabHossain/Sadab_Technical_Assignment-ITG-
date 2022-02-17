const app = require('express')()
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const allRouter = require('./src/routes/allRoutes.route')
const utils = require('./src/utils/utils')

dotenv.config()
const PORT = process.env.PORT
const API = '/itg/api/v1'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true, limit: '50mb' }))

app.use(cors())
app.options('*', cors())

app.use(fileUpload())

app.get('/', (req, res) => {
    utils.sendResponse(true, 'ITG system is running on ' + PORT, null, res)
})

/* route registry, all routes will be specified through here */
app.use(API, allRouter.NEWSFEEDARTICAL)
app.use(API, allRouter.USERPROFILE)


app.listen(PORT, () => {
    console.log(`ITG server is listening to port ${PORT}`)
})