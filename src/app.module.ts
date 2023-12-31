// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './jwt.strategy';
import { AuthGuard } from './auth.guard';
import { PostsModule } from './posts/posts.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Saman@1993',
      database: 'blog-api',
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    PostsModule,
    FirebaseModule,
  ],
  providers: [JwtStrategy, AuthGuard],
})
export class AppModule {}
