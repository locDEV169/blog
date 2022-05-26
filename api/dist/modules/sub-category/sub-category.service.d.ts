import { SubCategory } from 'src/database/entities/sub-category.entity';
import { Repository } from 'typeorm';
export declare class SubCategoryService {
    private subCategoryRepository;
    constructor(subCategoryRepository: Repository<SubCategory>);
    createSubCategory(data: any): Promise<{
        msg: string;
    }>;
    getSubCategories(): Promise<{
        subCategories: SubCategory[];
    }>;
    updateSubCategory(id: string, title: string): Promise<{
        msg: string;
    }>;
    deleteSubCategory(id: string): Promise<{
        msg: string;
    }>;
}
