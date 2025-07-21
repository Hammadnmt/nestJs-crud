import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async addUser({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<any> {
    try {
      const id = Date.now().toString();
      return await this.userModel.create({ id, name, email, password });
    } catch (error) {
      console.log(error);
    }
  }
  async findUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User | null> {
    try {
      return await this.userModel
        .findOne({ email: email, password: password })
        .select('-__v -_id -id');
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async verifyUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User | null> {
    try {
      const user = await this.userModel
        .findOne({
          email: email,
          password: password,
        })
        .select('-__v -_id -id-password-name');
      if (!user) return null;
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
