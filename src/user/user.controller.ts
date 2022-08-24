import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "./user.schema";
import { UserService } from "./user.service";

export class CreateUserDto {
    name: string;
    email: number;
    
    userdss: User;
   
  
  }

  @Controller('User')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
async create(@Body() createusertDto: CreateUserDto) {
   return this.userService.createuser(createusertDto)

}
@Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
@Get(':id')
async findOne(@Param('id') id: string): Promise<User> {
  return this.userService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.userService.update({id,...bd});
  }
}