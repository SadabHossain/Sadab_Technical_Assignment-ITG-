const moment = require('moment')


const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss'
const dateFormat = 'YYYY-MM-DD'


/**
 * converts a long value to a date string
 * @param {*} date 
 * @returns 
 */
module.exports.dateFormat = (date) => {
    return moment(date).format('LL')
}

module.exports.sendResponse = (success, message, data, res) => {
    return res.send({
        sessionDTO: {
            "status": success,
            "reasonCode": (success == true) ? 'success' : 'failure'
        }
        , status: success
        , message: (message == null) ? (success == true) ? 'Success' : 'Failure' : message
        , responseObject: data
    })
}
