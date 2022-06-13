import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { INewComment, IUser } from 'src/config/interface';
import { GetUser } from 'src/decorators/get-user.decorator';
import RoleGuard from 'src/guards/role.guard';
import { CommentService } from './comment.service';

@Controller()
export class CommentController {
}
