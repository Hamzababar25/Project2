import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "src/user/user.schema";
import { Contact, } from "./contacts.schema";
import { ContactService } from "./contacts.sevice";

export class CreateContactDto {
    name: string;
    phonenumber: string;
    status:string;
    email:string;
    relationship:string;
    userdss: User;
   
  
  }

  @Controller('Contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Post()
async create(@Body() createcontactDto: CreateContactDto) {
   return this.contactService.createcontact(createcontactDto)

}
@Get()
  async findAll(): Promise<Contact[]> {
    return this.contactService.findAll();
  }
@Get(':id')
async findOne(@Param('id') id: string): Promise<Contact> {
  return this.contactService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: string) {
    return this.contactService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.contactService.update({id,...bd});
  }
}