import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostEntity> {
    return this.postsService.findOne(+id);
  }

  @Post()
  async create(@Body() postData: Partial<PostEntity>): Promise<PostEntity> {
    return this.postsService.create(postData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() postData: Partial<PostEntity>,
  ): Promise<PostEntity> {
    return this.postsService.update(+id, postData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.postsService.remove(+id);
  }
}
