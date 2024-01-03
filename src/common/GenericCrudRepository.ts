import { log } from 'console';
import { HydratedDocument, Model } from 'mongoose';

export interface GenericCrudRepository<T> {
  findAll(query?: Record<string, any>): Promise<T[]>;
  create(item: T): Promise<T>;
  delete(id: string): Promise<void>;
  update(id: string, item: T): Promise<T>;
}

export class GenericCrudRepositoryImpl<T> implements GenericCrudRepository<T> {
  constructor(private model: Model<T>) {}

  async update(id: string, item: T): Promise<T> {
    return;
    //this.model.updateOne();
  }

  async delete(id: string): Promise<void> {
    await this.model.deleteOne({ _id: id });
  }

  async findAll(query: Record<string, any> = {}): Promise<T[]> {
    return (await this.model.find(query)).map((i) => i.toObject()); //jsona dondermek icin
  }

  async create(item: T): Promise<T> {
    return this.model.create(item);
  }
}
