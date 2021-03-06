import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { Category } from 'src/database/entities/category.entity';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Category, CategorySchema } from 'src/database/schemas/category.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    // MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
    AuthModule,
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule { }
