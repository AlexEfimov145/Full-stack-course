import Model from "./model";
import CredentialsDTO from './credentials-dto';
import UserDTO, { Roles } from './user-dto';
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import config from "config";
import { hashPassword } from "../../utils/crypto";

class User implements Model {

    private async getOne(id: number): Promise<UserDTO> {
        const user = (await query(`
            SELECT  userId AS id,
                    username,
                    password,
                    firstName,
                    lastName,
                    roleId
            FROM    users 
            WHERE   userID = ?
        `, [id]))[0];
        return user;
    }

    public async login(credentials: CredentialsDTO): Promise<UserDTO> {
        const { username,password} = credentials;
        const user = (await query(`
            SELECT  userId AS id,
                    username,
                    password,
                    firstName,
                    lastName,
                    roleId
            FROM    users 
            WHERE   username = ?
            and     password = ?
        `,[username,hashPassword(password, config.get<string>('app.secret'))]))[0];
        return user;
    }
    public async signup(user: UserDTO): Promise<UserDTO> {
        const { firstName, lastName, username, password } = user;
        const result: OkPacketParams = await query(`
            INSERT INTO users(firstName, lastName, username, password, roleId) 
            VALUES(?,?,?,?,?) 
        `, [firstName, lastName, username, hashPassword(password, config.get<string>('app.secret')), Roles.USER]);
        return this.getOne(result.insertId);
    }
}

const user = new User();
export default user;