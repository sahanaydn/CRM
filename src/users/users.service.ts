import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schema/users.schema';
import { GenericCrudRepositoryImpl } from 'src/common/GenericCrudRepository';

@Injectable()
export class UsersService extends GenericCrudRepositoryImpl<UserDocument> {
  constructor(
    @InjectModel('User')
    private userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }
}
