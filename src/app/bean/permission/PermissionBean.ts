import {PermissionCategoryBean} from './PermissionCategoryBean';

export class PermissionBean {
    constructor(
        public id: string = null,
        public label: string = null,
        public action: string = null,
        public url: string = null,
        public permissionCategoryId: string = null,
        public statusList: boolean[]
    ) {
    }
}
