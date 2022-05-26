import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/decorators/get-user.decorator';
import RoleGuard from 'src/guards/role.guard';
import { SubCategoryService } from './sub-category.service';

@Controller('sub-category')
export class SubCategoryController {
    constructor(
    private readonly subCategoryService: SubCategoryService,
  ) { }

  @Get()
  getSubCategories() {
    return this.subCategoryService.getSubCategories();
  }

  @Post()
  @UseGuards(RoleGuard('admin'))
  createSubCategory(
    @GetUser() user: any,
    @Body() data: any
  ) {
    return this.subCategoryService.createSubCategory(data);
  }

  @Patch(':id')
  @UseGuards(RoleGuard('admin'))
  updateSubCategory(
    @Param('id') id: string,
    @Body('title') title: string,
  ) {
    return this.subCategoryService.updateSubCategory(id, title);
  }

  @Delete(':id')
  @UseGuards(RoleGuard('admin'))
  deleteSubCategory(
    @Param('id') id: string,
  ) {
    return this.subCategoryService.deleteSubCategory(id);
  }

}
