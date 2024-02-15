import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import DTO from "./dto";
import Model from "./model";

class Employees implements Model {
    public async getAll(): Promise<DTO[]> {
        const employees = await query(`
        SELECT EmployeeID as id,
                FirstName,
                LastName
        FROM employees
        `)
        return employees;
    }

    public async getOne(id:number): Promise<DTO> {
        const employee = await query(`
        SELECT EmployeeID as id,
                FirstName,
                LastName
        FROM employees
        WHERE EmployeeID = ?
        `, [id]);
        return employee;
    }

    public async add(employee: DTO): Promise<DTO> {
        const {FirstName,LastName} = employee;
        const result: OkPacketParams = await query(`
            INSERT INTO employees (FirstName, LastName)
            VALUES (?,?)
        `,[FirstName, LastName]);
        return this.getOne(result.insertId);   
    }
    
    public async update(employeeData: DTO): Promise<DTO> {
        const { id, FirstName, LastName } = employeeData;
        await query(`
            UPDATE employees
            SET FirstName = ?, LastName = ?
            WHERE EmployeeId = ?
        `, [FirstName, LastName, id]);
        return this.getOne(id);
    }

    
    
    public async delete(employeeId: number): Promise<void> {
        await query(`
            DELETE FROM employees
            WHERE EmployeeID = ?
        `, [employeeId]);
    }
}


const employee = new Employees();
export default employee;