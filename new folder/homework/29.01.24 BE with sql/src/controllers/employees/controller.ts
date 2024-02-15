import { NextFunction, Request, Response } from "express";
import getModel from "../../models/employees/factory"

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const employee = await getModel().getAll();
    res.json(employee);
}

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
    const employee = await getModel().getOne(+req.params.id);
    res.json(employee);
}

export const add = async (req: Request, res: Response, next: NextFunction) => {
    const employee = await getModel().add(req.body);
    res.json(employee);
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    const employeeData = req.body; 
    const updatedEmployee = await getModel().update({id, ...employeeData});
    res.json(updatedEmployee);
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    const employeeId = parseInt(req.params.id);
    await getModel().delete(employeeId);
    res.status(200).send({ message: "Employee deleted successfully" });
}

