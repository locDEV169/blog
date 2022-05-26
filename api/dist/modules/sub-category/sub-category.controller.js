"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryController = void 0;
const common_1 = require("@nestjs/common");
const get_user_decorator_1 = require("../../decorators/get-user.decorator");
const role_guard_1 = require("../../guards/role.guard");
const sub_category_service_1 = require("./sub-category.service");
let SubCategoryController = class SubCategoryController {
    constructor(subCategoryService) {
        this.subCategoryService = subCategoryService;
    }
    getSubCategories() {
        return this.subCategoryService.getSubCategories();
    }
    createSubCategory(user, data) {
        return this.subCategoryService.createSubCategory(data);
    }
    updateSubCategory(id, title) {
        return this.subCategoryService.updateSubCategory(id, title);
    }
    deleteSubCategory(id) {
        return this.subCategoryService.deleteSubCategory(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubCategoryController.prototype, "getSubCategories", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, role_guard_1.default)('admin')),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SubCategoryController.prototype, "createSubCategory", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)((0, role_guard_1.default)('admin')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SubCategoryController.prototype, "updateSubCategory", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, role_guard_1.default)('admin')),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubCategoryController.prototype, "deleteSubCategory", null);
SubCategoryController = __decorate([
    (0, common_1.Controller)('sub-category'),
    __metadata("design:paramtypes", [sub_category_service_1.SubCategoryService])
], SubCategoryController);
exports.SubCategoryController = SubCategoryController;
//# sourceMappingURL=sub-category.controller.js.map