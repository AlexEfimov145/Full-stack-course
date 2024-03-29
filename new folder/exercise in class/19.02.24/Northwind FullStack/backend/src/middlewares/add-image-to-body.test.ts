import { v4 } from "uuid";
import addImageToBody from "./add-image-to-body"
import { NextFunction, Request, Response } from "express";

describe("addImageToBody middleware unit tests",  ()=>{
    test('adds image to body', ()=>{
        const req = {
            body: {

            },
            files:{
                image: v4()
            }
        } as unknown as Request
        const res = {} as Response;
        const next = (() => {}) as NextFunction;
        addImageToBody(req, res, next);
        expect(req.body).toHaveProperty('image')
        expect(req.body.image).toEqual(req.body.image)
    });
    test('does not add image to body', ()=>{
        const req = {
            body: {  
            },
            files:{
                image: v4()
            }
        } as unknown as Request
        const res = {} as Response;
        const next = (() => {}) as NextFunction;
        addImageToBody(req, res, next);
        expect(req.body).toHaveProperty('image')
        expect(req.body.image).not.toBeDefined
    });

})