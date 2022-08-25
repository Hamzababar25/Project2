import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { User, UserDocument } from "src/user/user.schema";
//import { Contact, ContactDocument } from "src/user/user.schema";
import { CreateContactDto } from "./contacts.controller";
//import { User, UserDocument } from "./user.schema";
import { Contact, ContactDocument } from "./contacts.schema";

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private readonly contactModel: Model<ContactDocument>,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

    async createcontact(createcontacttDto:CreateContactDto): Promise<Contact> {
        const createdcontact = await this.contactModel.create(createcontacttDto);
        return createdcontact;
      }
      async findAll(): Promise<Contact[]> {
        return this.contactModel.find().exec();
      }
      async findOne(id: string) {
        return await this.contactModel.findOne({ _id: id }).populate('userdss', '', this.userModel).exec();
      }
      async delete(id: string) {
        const deletedcontact = await this.contactModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deletedcontact;
      }
      async update({id,name,phonenumber,status,email,relationship}) {
        const updatecontact = await this.contactModel
          .findByIdAndUpdate(id,{ name,phonenumber,status,email,relationship })
          .exec();
        return await this.findOne(updatecontact._id);
      }

  }