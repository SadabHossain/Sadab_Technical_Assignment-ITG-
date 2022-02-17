

/**
 * We will only change the require section here to point to different settings
 * The config files will hold the settings for the database connection and will comprise of
 * host, user, password, database, multipleStatements and timezone properties
 */

const { settings } = require("./local.config")

module.exports.dbSettings = {
    connectionLimit: settings.CONNECTIONLIMIT,
    host: settings.HOST,
    user: settings.USER,
    password: settings.PASSWORD,
    database: settings.DATABASE,
    multipleStatements: settings.MULTIPLESTATEMENTS,
    timezone: settings.TIMEZONE
}