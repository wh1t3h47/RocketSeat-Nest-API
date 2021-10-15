import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';
import { AdminDocument } from './entities/admin.entity';

@Controller()
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get()
  getAll(): unknown {
    return this.adminsService.findAll();
  }

  @Get('/:id')
  getOne(id: string): unknown {
    return this.adminsService.findOne(id).lean();
  }

  @Post()
  create(@Body() createAdminInput: CreateAdminInput) {
    return (
      this.adminsService.create(createAdminInput) || 'Failed to create admin'
    );
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateAdminInput: UpdateAdminInput) {
    return this.adminsService.update(id, updateAdminInput);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.adminsService.remove(id);
  }
}
