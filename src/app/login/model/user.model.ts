import { Role } from './role.model';

export class User {
    userID: number;
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string;
    token: string;
    roleID: number;
    role: Role;
    constructor(name: string, firstname: string, lastname: string, email: string, username: string, password: string, roleID: number){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.roleID = roleID;
    }
}