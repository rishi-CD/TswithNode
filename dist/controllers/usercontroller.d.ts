import { Request, Response } from 'express';
import { User, CreateUserDTO } from '../types/userType';
export declare const getUsers: (req: Request, res: Response<User[]>) => void;
export declare const createUser: (req: Request<{}, {}, CreateUserDTO>, res: Response<User | {
    error: string;
}>) => Response<User | {
    error: string;
}, Record<string, any>> | undefined;
//# sourceMappingURL=usercontroller.d.ts.map