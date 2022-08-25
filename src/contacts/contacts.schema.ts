import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/user/user.schema';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userdss: User;

  @Prop()
 name: string;

  @Prop()
  phonenumber: string;
  @Prop()
  status: string;
  @Prop()
  email: string;
  @Prop()
  relationship: string;


  
}

export const ContactSchema = SchemaFactory.createForClass(Contact);