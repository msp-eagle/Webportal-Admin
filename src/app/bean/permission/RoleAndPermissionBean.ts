export class RoleAndPermissionBean {
    constructor(
        public guardName: string = null,
        public roleId: string = null,
        public permissionId: string = null,
        public permissionCategoryId: string = null,
        public status: boolean = null,
    ) {
    }
}
