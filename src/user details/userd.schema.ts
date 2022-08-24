import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/user/user.schema';

export type UserdDocument = Userd & Document;

@Schema()
export class Userd {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userdss: User;

  @Prop()
  phonenumber: any;

  @Prop()
address: string;
@Prop()
fname: string;
@Prop()
lname: string;
@Prop()
dob: string;
@Prop()
location: any;

  
}

export const UserdSchema = SchemaFactory.createForClass(Userd);