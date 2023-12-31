import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    return this.postsRepository.findOneBy({ id: id });
  }

  async create(postData: Partial<Post>): Promise<Post> {
    const post = this.postsRepository.create(postData);
    return this.postsRepository.save(post);
  }

  async update(id: number, postData: Partial<Post>): Promise<Post> {
    await this.postsRepository.update(id, postData);
    return this.postsRepository.findOneBy({ id: id });
  }

  async remove(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }
}
