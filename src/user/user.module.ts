import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ContactController } from "src/contacts/contacts.controller";
import { Contact, ContactSchema } from "src/contacts/contacts.schema";
import { ContactService } from "src/contacts/contacts.sevice";
import { UserdController } from "src/user details/userd.controller";
import { Userd, UserdSchema } from "src/user details/userd.schema";
import { UserDService } from "src/user details/userd.service";
import { UserController } from "./user.controller";
import { User, UserSchema } from "./user.schema";
import { UserService } from "./user.service";

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/testPro'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema },{name: Userd.name,schema:UserdSchema},{name:Contact.name
    ,schema:ContactSchema}])],
    controllers: [UserController,UserdController,ContactController],
    providers: [UserService,UserDService,ContactService],
  })
  export class UserModule {}