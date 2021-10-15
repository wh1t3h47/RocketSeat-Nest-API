import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';
import { Admin, AdminDocument } from './entities/admin.entity';

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admin.name) private readonly adminModel: Model<AdminDocument>,
  ) {}
  /** This action adds a new admin */
  create(createAdminInput: CreateAdminInput) {
    try {
      const admin = new this.adminModel(createAdminInput);
      return admin.save();
    } catch (error) {
      console.error(error.message);
      throw new Error('Error creating admin input :^(');
    }
  }

  /** This action returns all admins */
  findAll() {
    try {
      return this.adminModel.find().lean();
    } catch (error) {
      console.error(error.message);
      throw new Error('Error finding all admins :^(');
    }
  }

  /** This action returns a #${id} admin */
  findOne(id: string) {
    try {
      return this.adminModel.findById(String(id)).lean();
    } catch (error) {
      console.error(error.message);
      throw new Error('Error finding admin :^(');
    }
  }

  /** This action updates a #${id} admin */
  update(id: string, updateAdminInput: UpdateAdminInput) {
    try {
      return this.adminModel
        .findByIdAndUpdate(String(id), updateAdminInput, { new: true })
        .lean();
    } catch (error) {
      console.error(error.message);
      throw new Error('Error updating admin :^(');
    }
  }

  /** This action removes a #${id} admin */
  remove(id: string) {
    try {
      return this.adminModel.findByIdAndRemove(String(id)).lean();
    } catch (error) {
      console.error(error.message);
      throw new Error('Error removing admin :^(');
    }
  }

  /** This action removes all admins */
  removeAll() {
    try {
      return this.adminModel.deleteMany({}).lean();
    } catch (error) {
      console.error(error.message);
      throw new Error('Error removing all admins :^(');
    }
  }
}
