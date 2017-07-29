/**
 * Created by yitala on 2017/7/29.
 */
export class Address{

    id:number;
    username:string;
    phone:string;
    address:string;

    constructor(id?:number,username?:string,phone?:string,address?:string){
        this.id = id;
        this.username = username;
        this.phone = phone;
        this.address = address;
    }
}