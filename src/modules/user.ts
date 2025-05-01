import { count } from "console";

export class User
{
    username:string;
    email:string;
    password:string;
    static count:number = 0;
    constructor(username:string , email:string , password:string)
    {
        this.username = username;
        this.email = email;
        this.password = password;
        User.count++;
    }
    toJSON() {
        return {
            username: this.username,
            email: this.email,
            password: this.password
        };
    }
}