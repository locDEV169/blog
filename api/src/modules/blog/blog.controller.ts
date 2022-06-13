import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { INewBlog, IUser } from 'src/config/interface';
import { User } from 'src/database/entities/user.entity';
import { GetUser } from 'src/decorators/get-user.decorator';
import RoleGuard from 'src/guards/role.guard';
import { UpdateDateColumn } from 'typeorm';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
    constructor(
        private blogService: BlogService
    ) { }

    @Get('newest')
    getBlogByNewest(
        @Query('number') number:number
    ){
        return this.blogService.getBlogByNewest(number);
    }

    @Get('view')
    getBlogByView(
        @Query('number') number:number
    ){
        return this.blogService.getBlogByView(number);
    }

    @Post()
    @UseGuards(RoleGuard('user'))
    createBlog(
        @GetUser() user,
        @Body() newBlogDto
    ) {
        return this.blogService.createBlog(user, newBlogDto);
    }

    @Get()
    getAllBlog(
        @Query('number') number:number
    ) {
        return this.blogService.getAllBlogs(number);
    }

    @Get(':id')
    getBlogById(
        @Param('id') id:string
    ){
        return this.blogService.getBlogById(id);
    }

    @Patch(':id')
    @UseGuards(RoleGuard('user'))
    updateBlog(
        @Param('id') id:string,
        @GetUser() user,
        @Body() body,
    ){
        return this.blogService.updateBlog(id,user,body);
    }

    @Delete(':id')
    @UseGuards(RoleGuard('user'))
    deleteBlog(
        @Param('id') id:string,
        @GetUser() user,
        @Body() body,
    ){
        return this.blogService.deleteBlog(id,user);
    }

}
