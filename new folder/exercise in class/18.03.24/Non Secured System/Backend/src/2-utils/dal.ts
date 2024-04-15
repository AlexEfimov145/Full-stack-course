import mysql from "mysql2";
import appConfig from "./app-config";

const connection = mysql.createPool({
    host: appConfig.host,
    user: appConfig.user,
    password: appConfig.password,
    database: appConfig.database,
    port:3309
});

function execute(sql: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        connection.query(sql, (err, result)=>{
            if(err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

export default {
    execute
};

