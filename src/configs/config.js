const dotenv=require("dotenv")
dotenv.config();

const port=process.env.PORT;
const host=process.env.HOST;
const user=process.env.USER;
const password=process.env.PASSWORD;
const database=process.env.DATABASE;
const JWTSECRETE=process.env.JWTSECRETE;

module.exports={
    port,
    host,
    user,
    password,
    database,
    JWTSECRETE
};
