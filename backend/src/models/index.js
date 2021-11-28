import Sequelize from 'sequelize';
import sequelizeConfig from '@config/config.js';
import { insertDummy } from './initDummy.js';
import initModels from './initModels.js';

const env = process.env.NODE_ENV || 'development';
const config = sequelizeConfig[env];

let sequelize = new Sequelize({
    host: config.host,
    username: config.username,
    password: config.password,
    port: config.port,
    database: config.database,
    dialect: config.dialect,
    supportBigNumbers: true,
});

const connectionTest = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

const db = initModels(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const init = async () => {
    await connectionTest();
    if (process.env.NODE_ENV === 'production') {
        await sequelize.sync();
    } else {
        await sequelize.drop();
        await sequelize.sync();
        insertDummy(db);
    }
};

db.init = init;

export default db;
