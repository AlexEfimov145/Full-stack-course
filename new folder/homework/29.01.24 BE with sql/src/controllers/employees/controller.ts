import { NextFunction, Request, Response } from "express";
import getModel from "../../models/employees/factory"

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const employees = await getModel().getAll();
    res.json(employees);
}

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
    const product = await getModel().getOne(+req.params.id);
    res.json(product);
}

export const add = async (req: Request, res: Response, next: NextFunction) => {
    const product = await getModel().add(req.body);
    res.json(product);
}

