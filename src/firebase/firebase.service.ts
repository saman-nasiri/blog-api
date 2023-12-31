// firebase.service.ts

import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as serviceAccount from './hakankhan-ec72c-firebase-adminsdk-752fo-11eb2c87ac.json';

@Injectable()
export class FirebaseService {
  private firebaseAdmin: admin.app.App;

  constructor() {
    this.firebaseAdmin = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
  }

  async getFirebaseIdToken(uid: string): Promise<string> {
    try {
      const userRecord = await this.firebaseAdmin.auth().getUser(uid);
      const idToken = await this.firebaseAdmin.auth().createCustomToken(uid);
      return idToken;
    } catch (error) {
      console.error('Error getting Firebase ID token:', error);
      throw error; // Handle the error appropriately in your application
    }
  }

  async verifyIdToken(idToken: string): Promise<admin.auth.DecodedIdToken> {
    try {
      const decodedToken = await this.firebaseAdmin
        .auth()
        .verifyIdToken(idToken);
      return decodedToken;
    } catch (error) {
      console.error('Error verifying ID token:', error);
      throw error; // You might want to handle this error more gracefully
    }
  }

  async getUser(uid: string): Promise<admin.auth.UserRecord> {
    try {
      const user = await this.firebaseAdmin.auth().getUser(uid);
      return user;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error; // You might want to handle this error more gracefully
    }
  }

  async createUser(
    email: string,
    password: string,
  ): Promise<admin.auth.UserRecord> {
    try {
      const user = await this.firebaseAdmin.auth().createUser({
        email,
        password,
      });
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error; // You might want to handle this error more gracefully
    }
  }

  async updateUser(
    uid: string,
    propertiesToUpdate: any,
  ): Promise<admin.auth.UserRecord> {
    try {
      const user = await this.firebaseAdmin
        .auth()
        .updateUser(uid, propertiesToUpdate);
      return user;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error; // You might want to handle this error more gracefully
    }
  }

  async deleteUser(uid: string): Promise<void> {
    try {
      await this.firebaseAdmin.auth().deleteUser(uid);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error; // You might want to handle this error more gracefully
    }
  }

  // You can add more authentication-related methods as needed
}
