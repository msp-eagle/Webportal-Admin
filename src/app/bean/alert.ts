export class Alert {
    constructor(
        public id: string = null,
        public alertName: string = null,
        public alertType: string = null,
        public latitude: number = null,
        public longitude: number = null,
        public mapLink: string = null,
        public remarks: string = null,
        public createdAt: string = null

    ) {
    }
}