module.exports = {
    HOST:'localhost',
    USER :'root',
    PASSWORD :'zanele@97',
    DB :'dlonra_academy',
    dialect:'mysql',

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}