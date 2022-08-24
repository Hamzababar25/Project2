import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserdController } from "./userd.controller";
import { Userd, UserdSchema } from "./userd.schema";
import { UserDService } from "./userd.service";

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Userd.name, schema: UserdSchema }])],
    controllers: [UserdController],
    providers: [UserDService],
  })
  export class UserdModule {}