import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Userd } from 'src/user details/userd.schema';

export type UserDocument = User & Document;

@Schema()

export class User {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Userd' })
  userddss: Userd;
  @Prop({
    unique:true,
    required: true,
    type:String,
  })
  email: string;

  @Prop()
  password: string;

  
}

export const UserSchema = SchemaFactory.createForClass(User);