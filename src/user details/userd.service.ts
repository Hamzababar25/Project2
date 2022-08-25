import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { User, UserDocument } from "src/user/user.schema";
import { CreateUserdDto } from "./userd.controller";
import { Userd, UserdDocument } from "./userd.schema";

@Injectable()
export class UserDService {
  constructor(
    @InjectModel(Userd.name) private readonly userdModel: Model<UserdDocument>,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

    async createuserd(createuserDto:CreateUserdDto): Promise<Userd> {
        const createduserd = await this.userdModel.create(createuserDto);
        return createduserd;
      }
      async findAll(): Promise<Userd[]> {
        return this.userdModel.find().exec();
      }
      async findOne(id: string) {
        return await this.userdModel.findOne({ _id: id }).populate('userdss', '', this.userModel).exec();
      }
      async delete(id: string) {
        const deleteduserd = await this.userdModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deleteduserd;
      }
      async update({id,phonenumber,address,fname,lname,dob,location}) {
        const updateuserd = await this.userdModel
          .findByIdAndUpdate(id,{ phonenumber,address,fname,lname,dob,location })
          .exec();
        return await this.findOne(updateuserd._id);
      }

  }