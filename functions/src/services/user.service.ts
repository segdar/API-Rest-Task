import { User } from "../Models/user.model";
import db from "../config/dbnote.config";

export class UserService {

    private collection = db.collection('user');

    async createUser(data: Omit<User, 'id'>): Promise<string> {
        const usertmp = await this.collection.add(data);
        return usertmp.id;
    }

    async getUser(email: string): Promise<User | null> {
        const usertmp = await this.collection.where('email', '==', email).limit(1).get();
        if (usertmp.empty) return null;
        const value = usertmp.docs[0];
        return { id:value.id, ...value.data() } as User;
    }


}