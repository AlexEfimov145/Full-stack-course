import DTO from "./dto";

export default interface Model {
    getAll(): Promise<DTO[]>;
    getOne(id: number): Promise<DTO>;
    add(employee:DTO): Promise<DTO>;
    update(employeeData: DTO): Promise<DTO>;
    delete(employeeId: number): Promise<void>;
}