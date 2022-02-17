const newsfeedarticalService = require('../service/newsfeedartical.service')
const utils = require('../utils/utils')
const messages = require('../utils/meassages')

class NewsFeedArticalController {
    /**
     * This Method Fetch all news feed articals
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    view = async (req, res) => {
        await newsfeedarticalService.View(req.body)
            .then((data) => utils.sendResponse(true, messages.SUCCESS, data, res))
            .catch((err) => utils.sendResponse(false, messages.FAILURE, err, res))
    }

}
module.exports = new NewsFeedArticalController();