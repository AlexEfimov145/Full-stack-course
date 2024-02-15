import express, { Router } from "express";
import { add, getAll, getOne, remove, update } from "../controllers/employees/controller";

const router = Router();

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', add)
router.put('/:id', update) 
router.delete('/:id', remove ) 


export default router;