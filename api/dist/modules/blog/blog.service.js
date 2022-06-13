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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const blog_entity_1 = require("../../database/entities/blog.entity");
const typeorm_2 = require("typeorm");
let BlogService = class BlogService {
    constructor(blogRepository) {
        this.blogRepository = blogRepository;
        this.pagination = (page, limit) => {
            let newPage = Number(page) * 1 || 1;
            let newLimit = Number(limit) * 1 || 3;
            let skip = (newPage - 1) * newLimit;
            return { page: newPage, limit: newLimit, skip };
        };
    }
    async createBlog(user, newBlogDto) {
        try {
            const { title, content, description, thumbnail, subCategory } = newBlogDto;
            const newBlog = await this.blogRepository.save({
                user: user.id,
                title: title.toLowerCase(),
                content,
                description,
                thumbnail,
                subCategory,
            });
            return { newBlog };
        }
        catch (error) {
            throw new common_1.BadRequestException({ msg: error.message });
        }
    }
    async getAllBlogs(number = 0) {
        if (number === 0) {
            return await this.blogRepository.find({
                relations: ['subCategory', 'subCategory.category'],
            });
        }
        return await this.blogRepository.find({
            relations: ['subCategory', 'subCategory.category'],
            take: number
        });
    }
    async getBlogById(id) {
        return await this.blogRepository.findOne({
            relations: ['subCategory', 'subCategory.category'],
            where: { id: id }
        });
    }
    async updateBlog(id, user, body) {
        const check = await this.blogRepository.findOne({ id, user: user.id });
        if (!check) {
            throw new common_1.BadRequestException('Invalid credential');
        }
        await this.blogRepository.update({ id }, body);
        return { msg: 'Update blog success' };
    }
    async deleteBlog(id, user) {
        const check = await this.blogRepository.findOne({ id, user: user.id });
        if (!check) {
            throw new common_1.BadRequestException('Invalid credential or blog is not exists');
        }
        await this.blogRepository.delete(id);
        return { msg: 'Delete blog success' };
    }
    async getBlogByNewest(number = 0) {
        if (number === 0) {
            return await this.blogRepository.find({ order: { created_at: 'DESC' } });
        }
        return await this.blogRepository.find({ order: { created_at: 'DESC' }, take: number });
    }
    async getBlogByView(number = 0) {
        if (number === 0) {
            return await this.blogRepository.find({ order: { view: 'DESC' } });
        }
        return await this.blogRepository.find({ order: { view: 'DESC' }, take: number });
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blog_entity_1.Blog)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map