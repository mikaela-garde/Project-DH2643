import express from 'express';
import { User } from '../models/types';

const CheckUserAuthType = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    /*
    if(){
    // user will be authenticated
    next();
    }
    else
    {
    // return unauthorized user
    res.send (401, ‘Unauthorized’);
    }*/
}


/*
function isUser(object: any): object is User {
    return object;
}*/