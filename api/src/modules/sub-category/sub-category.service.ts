import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubCategory } from 'src/database/entities/sub-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubCategoryService {
    constructor(
    @InjectRepository(SubCategory) private subCategoryRepository:Repository<SubCategory>
  ) { }

  async createSubCategory(data) {

    const {title,category} = data; 

    const check = await this.subCategoryRepository.findOne( {title} ).catch((error)=>{
      throw new InternalServerErrorException(error.message);
    });
    
    if (check) {
      throw new BadRequestException({ msg: 'This category is already exists' });
    }

    try {
      await this.subCategoryRepository.save({title,category});
      return { msg:'done' };

    } catch (error) {
      throw new InternalServerErrorException({ msg: error.message });
    }
  }

  async getSubCategories() {
    try {
      const subCategories = await this.subCategoryRepository.find({
          relations:['category','blogs']
      })
      return { subCategories };
    } catch (error) {
      throw new InternalServerErrorException({ msg: error.message });
    }
  }

  async updateSubCategory(id: string, title: string) {
    
    const check = await this.subCategoryRepository.findOne(id);
    if(!check){
      throw new BadRequestException('Category does not exist.');
    }

    try {
      await this.subCategoryRepository.update({
        id: id
      }, {
        title: title.toLowerCase()
      });

      return { msg: 'Update Success!' };
    } catch (error) {
      throw new InternalServerErrorException({ msg: error.message });
    }
  }

  async deleteSubCategory(id: string) {
    try {
      await this.subCategoryRepository.delete(id);
      return {msg:'success'};
    } catch (error) {
      throw new InternalServerErrorException({ msg: error.message });
    }
  }
}
