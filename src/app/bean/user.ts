import { Role } from "./role";

export class User {
    constructor(
        public id: string = null, 
        public userId: string = null,
        public cityName: string = null,
        public phoneNum:string = null,
        public userName:string = null,
        public email:string = null,
        public password:string = null,
        public confirmPassword:string = null,
        public city:string = null,
        public isActive:string = null,
        public isAccountLocked:string = null,
        public userRoles:string = null,
        public createdAt:string = null,
        public roles:Role = null,


   
    ) {
    }
  }