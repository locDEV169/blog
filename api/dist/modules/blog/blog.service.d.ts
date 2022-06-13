import { Blog } from 'src/database/entities/blog.entity';
import { Repository } from 'typeorm';
export declare class BlogService {
    private blogRepository;
    constructor(blogRepository: Repository<Blog>);
    pagination: (page: number, limit: number) => {
        page: number;
        limit: number;
        skip: number;
    };
    createBlog(user: any, newBlogDto: any): Promise<{
        newBlog: {
            user: any;
            title: any;
            content: any;
            description: any;
            thumbnail: any;
            subCategory: any;
        } & Blog;
    }>;
    getAllBlogs(number?: number): Promise<Blog[]>;
    getBlogById(id: string): Promise<Blog>;
    updateBlog(id: string, user: any, body: any): Promise<{
        msg: string;
    }>;
    deleteBlog(id: string, user: any): Promise<{
        msg: string;
    }>;
    getBlogByNewest(number?: number): Promise<Blog[]>;
    getBlogByView(number?: number): Promise<Blog[]>;
}
