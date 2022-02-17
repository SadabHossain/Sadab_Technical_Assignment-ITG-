const messages = require('../utils/meassages')
const utils = require('../utils/utils')

class UserProfileBL {

    checkUserProfileValidation = (userinfo) => {

        if (!userinfo.userName)
            return messages.userName
        else if (!userinfo.email)
            return messages.email
        else if (!userinfo.password)
            return messages.password
        else if (!userinfo.phoneNumber)
            return messages.phoneNumber
        else if (!userinfo.dateOfBirth)
            return messages.dateOfBirth
        else if (!userinfo.timeOfBirth)
            return messages.timeOfBirth
        else if (!userinfo.gender)
            return messages.gender
        else if (!userinfo.maritalStatus)
            return messages.maritalStatus
        else if (!userinfo.language)
            return messages.language
        else if (!userinfo.profilePicture)
            return messages.profilePicture
        else return true

    }

}
module.exports = new UserProfileBL()