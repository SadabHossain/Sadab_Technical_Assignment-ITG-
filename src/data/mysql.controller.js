const mysql = require('mysql2')
const dbConfig = require('./mysql.config')

/**
 * This class's methods or properties will be accessed through a singleton instance
 * the name of the instance is dbInstance and can be found at the bottom of this file
 */
class MySqlController {

    /**
     * Constructor, that will create a connection pool, we will use it in such a way while exporting,
     * so it gets created only once
     */
    constructor() {
        this.conPool = mysql.createPool(dbConfig)
        if (!MySqlController.instance) {
            MySqlController.instance = this
        }
        return MySqlController.instance
    }

    getConPool() { return this.conPool }

    /**
     * A query executor method, a master query runs inside a transaction
     * @param {*} queryString
     * @param {*} onDoneCallback, a callback
     */
    transactionalQuery = async (queryString) => {
        return new Promise((resolve, reject) => {
            this.conPool.getConnection((err, connection) => {
                if (err) { reject({ error: err, response: null, fields: null }) }
                else {
                    connection.beginTransaction((err) => {
                        if (err) { connection.release(); reject({ error: err, response: null, fields: null }) }
                        else {
                            connection.query(queryString, (error, res, fld) => {
                                if (error) {
                                    connection.rollback((err) => {
                                        if (err) { connection.release(); reject({ error: err, response: null, fields: null }) }
                                        else { connection.release(); reject({ error: error, response: null, fields: null }) }
                                    })
                                } else {
                                    connection.commit((errOut) => {
                                        if (errOut) {
                                            connection.rollback((err) => {
                                                if (err) { connection.release(); reject({ error: err, response: null, fields: null }) }
                                                else { connection.release(); reject({ error: errOut, response: null, fields: null }) }
                                            })
                                        } else {
                                            connection.release()
                                            resolve({ error: err, response: res, fields: fld })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        })
    }

    /**
     * A simple query executor method, just non transactional in nature
     * @param {*} queryString 
     * @returns 
     */
    query = async (queryString) => {
        return new Promise((resolve, reject) => {
            try {
                this.conPool.getConnection((err, connection) => {
                    if (err) throw err
                    else {
                        connection.query(queryString, (err, res, fld) => {
                            if (err) { connection.release(); throw err }
                            else { connection.release(); resolve({ error: err, response: res, fields: fld }) }
                        })
                    }
                })
            } catch (err) { reject({ error: err, response: null, fields: null }) }
        })
    }
}

const dbInstance = new MySqlController()
Object.freeze(dbInstance)

module.exports = dbInstance