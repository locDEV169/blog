import { BlogService } from './blog.service';
export declare class BlogController {
    private blogService;
    constructor(blogService: BlogService);
    createBlog(user: any, newBlogDto: any): Promise<{
        newBlog: {
            user: any;
            title: any;
            content: any;
            description: any;
            thumbnail: any;
            subCategory: any;
        } & import("../../database/entities/blog.entity").Blog;
    }>;
    getAllBlog(): Promise<import("../../database/entities/blog.entity").Blog[]>;
    getBlogById(id: string): Promise<import("../../database/entities/blog.entity").Blog>;
    updateBlog(id: string, user: any, body: any): Promise<{
        msg: string;
    }>;
    deleteBlog(id: string, user: any, body: any): Promise<{
        msg: string;
    }>;
}
