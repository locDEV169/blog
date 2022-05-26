import { SubCategoryService } from './sub-category.service';
export declare class SubCategoryController {
    private readonly subCategoryService;
    constructor(subCategoryService: SubCategoryService);
    getSubCategories(): Promise<{
        subCategories: import("../../database/entities/sub-category.entity").SubCategory[];
    }>;
    createSubCategory(user: any, data: any): Promise<{
        msg: string;
    }>;
    updateSubCategory(id: string, title: string): Promise<{
        msg: string;
    }>;
    deleteSubCategory(id: string): Promise<{
        msg: string;
    }>;
}
