// firebase.dto.ts

import { IsString } from 'class-validator';

export class VerifyIdTokenDto {
  @IsString()
  idToken: string;
}

export class CreateUserDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
