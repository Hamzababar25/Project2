import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ContactController } from "./contacts.controller";
import { Contact, ContactSchema } from "./contacts.schema";
import { ContactService } from "./contacts.sevice";

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }])],
    controllers: [ContactController],
    providers: [ContactService],
  })
  export class ContactModule {}