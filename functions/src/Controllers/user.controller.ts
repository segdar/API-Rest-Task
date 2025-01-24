import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

const userService = new UserService();

export class UserController {

     static async getUser(req: Request, res: Response):Promise<any>  {
        try {
            const email = req.params.email as string;
            const infouser = await userService.getUser(email);
            console.log("test", email);
            if (infouser === null) {
                return res.status(200).json({value:"", status:false, error:""}); 
            }

            
            return res.status(200).json({value:infouser, status:true, error:""} );
        } catch (error){
            return res.status(400).json({value:"", status:false, error} );
        }
    }

    static async createUser(req: Request, res: Response): Promise<any>  {
        try {
            const email = req.body.email as string;

            const id = await userService.createUser({ email });

            return res.status(200).json({value:id , status:true, error:""});    

        } catch (error) {
            return res.status(400).json({value:"",status:false, error});
        }
    }
}


