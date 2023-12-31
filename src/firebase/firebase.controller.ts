// firebase.controller.ts

import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Get('get-firebase-id-token/:uid')
  async getFirebaseIdToken(@Param('uid') uid: string): Promise<string> {
    return this.firebaseService.getFirebaseIdToken(uid);
  }

  @Post('verify-id-token')
  async verifyIdToken(@Body() { idToken }: { idToken: string }): Promise<any> {
    return this.firebaseService.verifyIdToken(idToken);
  }

  @Get('user/:uid')
  @UseGuards(AuthGuard('firebase-jwt'))
  async getUser(@Param('uid') uid: string): Promise<any> {
    return this.firebaseService.getUser(uid);
  }

  @Post('create-user')
  async createUser(
    @Body() { email, password }: { email: string; password: string },
  ): Promise<any> {
    return this.firebaseService.createUser(email, password);
  }

  @Post('update-user/:uid')
  async updateUser(
    @Param('uid') uid: string,
    @Body() propertiesToUpdate: any,
  ): Promise<any> {
    return this.firebaseService.updateUser(uid, propertiesToUpdate);
  }

  @Post('delete-user/:uid')
  async deleteUser(@Param('uid') uid: string): Promise<void> {
    return this.firebaseService.deleteUser(uid);
  }
}
