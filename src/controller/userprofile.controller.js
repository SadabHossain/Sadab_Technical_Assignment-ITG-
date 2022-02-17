const userprofileService = require('../service/userprofile.service')
const utils = require('../utils/utils')
const messages = require('../utils/meassages')
const userProfileBL = require('../businesslogics/userprofile.bl')
class UserProfileController {

    /**
     * Save Or Update User Profile Details
     * checkUserProfileValidation function is check all validation 
     * @param {*} req 
     * @param {*} res 
     */
    saveOrUpdate = async (req, res) => {
        let validated = userProfileBL.checkUserProfileValidation(req.body)
        if (validated == true || validated == 'true') {
            await userprofileService.saveOrUpdate(req.body)
                .then((data) => { return utils.sendResponse(true, messages.SUCCESS, data, res) })
                .catch((err) => { return utils.sendResponse(false, messages.FAILURE, err, res) })
        } else {
            utils.sendResponse(false, validated, null, res)
        }
    }

}
module.exports = new UserProfileController();