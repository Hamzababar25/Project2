import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { StringSchemaDefinition } from "mongoose";
import { Userd, } from "./userd.schema";
import { UserDService } from "./userd.service";

export class CreateUserdDto {
    phonenumber: number;
    address: string;

    fname:string;
lname:string;
dob:string;
location:{
  lat:string;
  long:string;
};

    
    


    userdss: Userd;
   
  
  }

  @Controller('Userd')
export class UserdController {
    constructor(private readonly userdService: UserDService) {}

    @Post()
async create(@Body() createuserdDto: CreateUserdDto) {
   return this.userdService.createuserd(createuserdDto)

}
@Get()
  async findAll(): Promise<Userd[]> {
    return this.userdService.findAll();
  }
@Get(':id')
async findOne(@Param('id') id: string): Promise<Userd> {
  return this.userdService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userdService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.userdService.update({id,...bd});
  }
}