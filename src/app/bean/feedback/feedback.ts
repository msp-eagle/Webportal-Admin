export class Feedback {
    constructor(
        public id: string = null, 
        public name: string = null,
        public email: string = null,
        public comments:string = null,
        public attachments:string[] = null,
        public createdDate:string = null,


   
    ) {
    }
  }