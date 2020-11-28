import { User } from './user.model';

export class LoginUser {
    loginUserID: number;
    email: string;
    username: string;
    token: string;
    userID: number;
    roleID: number
    user: User;
    constructor(email: string, username: string,token: string,  roleID: number,  userID: number, ){
        this.email = email;
        this.username = username;
        this.token = token;
        this.roleID= roleID;
        this.userID = userID;
    }
}
