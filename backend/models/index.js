import path from "path";
import Sequelize from "sequelize";
import { fileURLToPath } from "url";
import sequelizeConfig from "../config/config.js";
import initModels from "./init-models.js";

const __dirname = path.resolve();
const __filename = fileURLToPath(import.meta.url);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = sequelizeConfig[env];

let sequelize = new Sequelize({
    host: config.host,
    username: config.username,
    password: config.password,
    port: config.port,
    database: config.database,
    dialect: config.dialect,
});

const connectionTest = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

// const sequelize = new Sequelize(sequelize);
const db = initModels(sequelize);
db.sequelize = sequelize;
db.Sequelize = Sequelize;


const init = async () => {
    await connectionTest();
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
    await sequelize.drop();
    await sequelize.sync();
};

init();
export default db;
