import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreateUserDto } from "./user.controller";
import { User, UserDocument } from "./user.schema";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

    async createuser(createuserDto:CreateUserDto): Promise<User> {
        const createduser = await this.userModel.create(createuserDto);
        return createduser;
      }
      async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
      }
      async findOne(id: string): Promise<User> {
        return this.userModel.findOne({ _id: id }).exec();
      }
      async delete(id: string) {
        const deleteduser = await this.userModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deleteduser;
      }
      async update({id,email,password}) {
        const updateuser = await this.userModel
          .findByIdAndUpdate(id,{ email,password })
          .exec();
        return await this.findOne(updateuser._id);
      }

  }