import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryDocument } from 'src/database/schemas/category.schema';
import { Model } from "mongoose";
import mongoose from 'mongoose';
import { Any } from 'typeorm';
import { Comment, CommentDocument } from 'src/database/schemas/comment.schema';
import { IComment, INewComment, INewUser, IUser } from 'src/config/interface';
@Injectable()
export class CommentService {
}
