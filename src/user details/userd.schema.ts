import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { type } from 'os';
import { User } from 'src/user/user.schema';

export type UserdDocument = Userd & Document;

@Schema()
export class Userd {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userdss: User;

  @Prop()
  phonenumber: number;

  @Prop()
address: string;
@Prop()
fname: string;
@Prop()
lname: string;
@Prop()
dob: string;
@Prop({type:mongoose.Schema.Types.Mixed})
location:{
  lat:string,
  long:string
}

  
}

export const UserdSchema = SchemaFactory.createForClass(Userd);