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
exports.SubCategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sub_category_entity_1 = require("../../database/entities/sub-category.entity");
const typeorm_2 = require("typeorm");
let SubCategoryService = class SubCategoryService {
    constructor(subCategoryRepository) {
        this.subCategoryRepository = subCategoryRepository;
    }
    async createSubCategory(data) {
        const { title, category } = data;
        const check = await this.subCategoryRepository.findOne({ title }).catch((error) => {
            throw new common_1.InternalServerErrorException(error.message);
        });
        if (check) {
            throw new common_1.BadRequestException({ msg: 'This category is already exists' });
        }
        try {
            await this.subCategoryRepository.save({ title, category });
            return { msg: 'done' };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({ msg: error.message });
        }
    }
    async getSubCategories() {
        try {
            const subCategories = await this.subCategoryRepository.find({
                relations: ['category', 'blogs']
            });
            return { subCategories };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({ msg: error.message });
        }
    }
    async updateSubCategory(id, title) {
        const check = await this.subCategoryRepository.findOne(id);
        if (!check) {
            throw new common_1.BadRequestException('Category does not exist.');
        }
        try {
            await this.subCategoryRepository.update({
                id: id
            }, {
                title: title.toLowerCase()
            });
            return { msg: 'Update Success!' };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({ msg: error.message });
        }
    }
    async deleteSubCategory(id) {
        try {
            await this.subCategoryRepository.delete(id);
            return { msg: 'success' };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({ msg: error.message });
        }
    }
};
SubCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sub_category_entity_1.SubCategory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SubCategoryService);
exports.SubCategoryService = SubCategoryService;
//# sourceMappingURL=sub-category.service.js.map