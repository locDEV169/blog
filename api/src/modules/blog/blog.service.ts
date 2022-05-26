import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from 'src/database/entities/blog.entity';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog) private blogRepository:Repository<Blog>
    ){}
    // constructor(
    //     @InjectModel(Blog.name) private blogModel: Model<BlogDocument>,
    //     @InjectModel(Comment.name) private commentModel: Model<CommentDocument>
    // ) { }

    pagination = (page:number, limit:number) => {
        let newPage = Number(page) * 1 || 1;
        let newLimit = Number(limit) * 1 || 3;
        let skip = (newPage - 1) * newLimit;
        return { page: newPage, limit: newLimit, skip };
    }

    async createBlog(user, newBlogDto) {
        try {
            const { title, content, description, thumbnail, subCategory } = newBlogDto

            const newBlog = await this.blogRepository.save({
                user: user.id,
                title: title.toLowerCase(),
                content,
                description,
                thumbnail,
                subCategory, 
            });

            return { newBlog }

        } catch (error) {
            throw new BadRequestException({ msg: error.message });
        }
    }

    async getAllBlogs(){
        return await this.blogRepository.find({
            relations:['subCategory','subCategory.category']
        })
    }

    async getBlogById(id:string){
        return await this.blogRepository.findOne({
            relations:['subCategory','subCategory.category']
        })
    }

    async updateBlog(id:string,user,body){
        const check = await this.blogRepository.findOne({id,user:user.id})
        if(!check){
            throw new BadRequestException('Invalid credential');
        }
        await this.blogRepository.update({id},body);
        return {msg:'Update blog success'};
    }

    async deleteBlog(id:string,user){

        const check = await this.blogRepository.findOne({id,user:user.id})
        
        if(!check){
            throw new BadRequestException('Invalid credential or blog is not exists');
        }
        await this.blogRepository.delete(id);
        return {msg:'Delete blog success'};
    }


    // async getHomeBlogs() {
    //     try {
    //         const blogs = await this.blogModel.aggregate([
    //             // User
    //             {
    //                 $lookup: {
    //                     from: "users",
    //                     let: { user_id: "$user" },
    //                     pipeline: [
    //                         { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },
    //                         { $project: { password: 0 } }
    //                     ],
    //                     as: "user"
    //                 }
    //             },
    //             // array -> object
    //             { $unwind: "$user" },
    //             // Category
    //             {
    //                 $lookup: {
    //                     "from": "categories",
    //                     "localField": "category",
    //                     "foreignField": "_id",
    //                     "as": "category"
    //                 }
    //             },
    //             // array -> object
    //             { $unwind: "$category" },
    //             // Sorting
    //             { $sort: { "createdAt": -1 } },
    //             // Group by category
    //             {
    //                 $group: {
    //                     _id: "$category._id",
    //                     name: { $first: "$category.name" },
    //                     blogs: { $push: "$$ROOT" },
    //                     count: { $sum: 1 }
    //                 }
    //             },
    //             // Pagination for blogs
    //             {
    //                 $project: {
    //                     blogs: {
    //                         $slice: ['$blogs', 0, 3]
    //                     },
    //                     count: 1,
    //                     name: 1
    //                 }
    //             }
    //         ]);
    //         return blogs;
    //     } catch (error) {
    //         throw new InternalServerErrorException({ msg: error.message });
    //     }
    // }

    // async getBlogsByCategory(newPage:number, newLimit:number, id:string) {
    //     const { limit, skip } = this.pagination(newPage, newLimit);
    //     try {
    //         const Data = await this.blogModel.aggregate([
    //             {
    //                 $facet: {
    //                     totalData: [
    //                         {
    //                             $match: {
    //                                 category: new mongoose.Types.ObjectId(id)
    //                             }
    //                         },
    //                         // User
    //                         {
    //                             $lookup: {
    //                                 from: "users",
    //                                 let: { user_id: "$user" },
    //                                 pipeline: [
    //                                     { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },
    //                                     { $project: { password: 0 } }
    //                                 ],
    //                                 as: "user"
    //                             }
    //                         },
    //                         // array -> object
    //                         { $unwind: "$user" },
    //                         // Sorting
    //                         { $sort: { createdAt: -1 } },
    //                         { $skip: skip },
    //                         { $limit: limit }
    //                     ],
    //                     totalCount: [
    //                         {
    //                             $match: {
    //                                 category: new mongoose.Types.ObjectId(id)
    //                             }
    //                         },
    //                         { $count: 'count' }
    //                     ]
    //                 }
    //             },
    //             {
    //                 $project: {
    //                     count: { $arrayElemAt: ["$totalCount.count", 0] },
    //                     totalData: 1
    //                 }
    //             }
    //         ])


    //         const blogs = Data[0].totalData;
    //         const count = Data[0].count;

    //         let total = 0;

    //         if (count % limit === 0) {
    //             total = count / limit;
    //         } else {
    //             total = Math.floor(count / limit) + 1;
    //         }

    //         return { blogs, total }
    //     } catch (error) {
    //         throw new InternalServerErrorException({ msg: error.message });
    //     }
    // }

    // async getBlogByUser(newPage:number, newLimit:number, id:string) {
    //     const { limit, skip } = this.pagination(newPage, newLimit);
    //     try {
    //         const Data = await this.blogModel.aggregate([
    //             {
    //                 $facet: {
    //                     totalData: [
    //                         {
    //                             $match: {
    //                                 user: new mongoose.Types.ObjectId(id)
    //                             }
    //                         },
    //                         // User
    //                         {
    //                             $lookup: {
    //                                 from: "users",
    //                                 let: { user_id: "$user" },
    //                                 pipeline: [
    //                                     { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },
    //                                     { $project: { password: 0 } }
    //                                 ],
    //                                 as: "user"
    //                             }
    //                         },
    //                         // array -> object
    //                         { $unwind: "$user" },
    //                         // Sorting
    //                         { $sort: { createdAt: -1 } },
    //                         { $skip: skip },
    //                         { $limit: limit }
    //                     ],
    //                     totalCount: [
    //                         {
    //                             $match: {
    //                                 user: new mongoose.Types.ObjectId(id)
    //                             }
    //                         },
    //                         { $count: 'count' }
    //                     ]
    //                 }
    //             },
    //             {
    //                 $project: {
    //                     count: { $arrayElemAt: ["$totalCount.count", 0] },
    //                     totalData: 1
    //                 }
    //             }
    //         ])

    //         const blogs = Data[0].totalData;
    //         const count = Data[0].count;

    //         // Pagination
    //         let total = 0;

    //         if (count % limit === 0) {
    //             total = count / limit;
    //         } else {
    //             total = Math.floor(count / limit) + 1;
    //         }

    //         return { blogs, total }
    //     } catch (error) {
    //         throw new InternalServerErrorException({ msg: error.message });
    //     }
    // }

    // async getBlog(id:string) {
    //     try {
    //         const blog = await this.blogModel.findById(id)
    //             .populate("user", "-password")

    //         if (!blog) {
    //             throw new BadRequestException({ msg: "Blog does not exist." })
    //         }
    //         return blog

    //     } catch (error) {
    //         throw new InternalServerErrorException({ msg: error.message });
    //     }
    // }

    // async updateBlog(user: IUser, updateBlogDto: INewBlog, id: string) {
    //     try {
    //         const blog = await this.blogModel.findOneAndUpdate({
    //             _id: id, user: user._id
    //         },
    //             {
    //                 title: updateBlogDto.title,
    //                 content: updateBlogDto.content,
    //                 description: updateBlogDto.description,
    //                 thumbnail: updateBlogDto.thumbnail,
    //                 category: new mongoose.Types.ObjectId(updateBlogDto.category)
    //             }
    //         )

    //         if (!blog) {
    //             throw new BadRequestException({ msg: 'Invalid Authentication.' });
    //         }

    //         return { msg: 'Update Success!', blog };

    //     } catch (error) {
    //         throw new InternalServerErrorException({ msg: error.message });
    //     }
    // }

    // async deleteBlog(user: IUser, id: string) {
    //     try {

    //         const check = await this.blogModel.findOne({
    //             user:user._id
    //         })

    //         let blog ;
    //         if(check || user.role ==='admin'){
    //             blog = await this.blogModel.findOneAndDelete({
    //                 _id: id,
    //             })
    //         }

    //         if (!blog) {
    //             throw new BadRequestException({ msg: 'Invalid Authentication.' });
    //         }

    //         await this.commentModel.deleteMany({
    //             blog_id: blog._id
    //         });

    //         return { msg: 'Delete Success!' }

    //     } catch (error) {
    //         throw new InternalServerErrorException({ msg: error.message });
    //     }
    // }

    // async searchBlogs(title:string){
    //     try {
    //         const blogs = await this.blogModel.find({name: { $regex: '.*' + title + '.*' } })
    //             .populate('user')
            
    //         if(!blogs.length){
    //             throw new BadRequestException({msg:'No blogs'});
    //         }
      
    //         return blogs;
      
    //       } catch (error: any) {
    //         throw new InternalServerErrorException(error.message);
    //       }
    // }
   
}
