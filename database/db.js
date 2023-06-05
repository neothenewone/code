import { Sequelize } from "sequelize";

const db=new Sequelize('isepsantafe_s','isepsantafe_s','Iamneo01!',{
    host:'localhost:3306',
    dialect:'mysql'
});
export default db;