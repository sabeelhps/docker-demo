const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('demo', 'root', 'root', {
    host: 'mysqldb',
    dialect: 'mysql'
});

async function connectdb() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectdb();

module.exports = {
    sequelize
}