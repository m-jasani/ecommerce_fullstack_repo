const mysql=require("mysql");
const config=require("../configs/config.js")

const db=mysql.createPool({
    host:config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    multipleStatements: true,
})

module.exports = db;