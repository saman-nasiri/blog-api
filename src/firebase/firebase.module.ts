// firebase.module.ts

import { Module } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import { FirebaseController } from './firebase.controller';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule if needed

@Module({
  imports: [TypeOrmModule.forFeature([])], // Include TypeOrmModule if you have entity repositories
  controllers: [FirebaseController],
  providers: [FirebaseService],
  exports: [FirebaseService],
})
export class FirebaseModule {}
