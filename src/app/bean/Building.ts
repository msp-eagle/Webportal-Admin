export class Building {
 
    constructor(
        public id: number = null, 
        public buildingName: string = null,
        public buildingType: string = null,
        public latitude:string = null,
        public longitude:string = null,
        public description:string = null,
        public file:string = null,
        public image:string=null

    ) {
    }
}