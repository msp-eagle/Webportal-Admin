import { RoleType } from "./auth/roleType";

export class Role {
    constructor(
        public role: string = null, 
        public roleType: RoleType = null,
        public id: string = null,
        public status:string = null

   
    ) {
    }
  }