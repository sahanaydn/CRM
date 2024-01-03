import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IsEmail } from '@nestjs/class-validator';

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  @IsEmail()
  email: string;

  @Prop()
  password: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
