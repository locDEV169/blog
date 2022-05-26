import { SubCategory } from "./sub-category.entity";
export declare class Category {
    id: string;
    title: string;
    subCategories: SubCategory[];
    created_at: Date;
    updated_at: Date;
}
