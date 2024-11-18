import { PermissionBean } from "./PermissionBean";

export class PermissionCategoryBean {
    constructor(
        public id: string = null,
        public subject: number = null,
        public label: string = null,
        public guardName: string = null,
        public permissions: PermissionBean[],

    ) {
    }
}
