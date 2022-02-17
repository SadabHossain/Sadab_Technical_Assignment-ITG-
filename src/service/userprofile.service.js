const dbInstance = require('../data/mysql.controller')
const userprofilequeryFactory = require('../queryfactory/userprofilequery.factory')

class UserProfileService {

    /**
     *  Save or Update User Profile details
     * @param {*} userInfo 
     * @returns 
     */
    saveOrUpdate = async (userInfo) => {
        return new Promise((resolve, reject) => {
            let userQuery = ``;
            if (userInfo.userProfileId == 0) {
                userQuery = userprofilequeryFactory.CREATE_USER_PROFILE
                    .replace('%userName%', userInfo.userName)
                    .replace('%email%', userInfo.email)
                    .replace('%password%', userInfo.password)
                    .replace('%phoneNumber%', userInfo.phoneNumber)
                    .replace('%dateOfBirth%', userInfo.dateOfBirth)
                    .replace('%timeOfBirth%', userInfo.timeOfBirth)
                    .replace('%gender%', userInfo.gender)
                    .replace('%maritalStatus%', userInfo.maritalStatus)
                    .replace('%language%', userInfo.language)
                    .replace('%profilePicture%', userInfo.profilePicture)
            } else {
                userQuery = userprofilequeryFactory.UPDATE_USER_PROFILE
                    .replace('%userName%', userInfo.userName)
                    .replace('%email%', userInfo.email)
                    .replace('%password%', userInfo.password)
                    .replace('%phoneNumber%', userInfo.phoneNumber)
                    .replace('%dateOfBirth%', userInfo.dateOfBirth)
                    .replace('%timeOfBirth%', userInfo.timeOfBirth)
                    .replace('%gender%', userInfo.gender)
                    .replace('%maritalStatus%', userInfo.maritalStatus)
                    .replace('%language%', userInfo.language)
                    .replace('%profilePicture%', userInfo.profilePicture)
                    .replace('%userProfileId%', userInfo.userProfileId)
            }
            dbInstance.query(userQuery)
                .then((data) => resolve())
        }).catch((err) => reject(err))


    }

}
module.exports = new UserProfileService();