// import { Module } from '@nestjs/common';
// import { AdminsService } from './admins.service';
// import { AdminsResolver } from './admins.resolver';
//
// @Module({
//   providers: [AdminsResolver, AdminsService]
// })
// export class AdminsModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { Admin, AdminSchema } from './entities/admin.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }]),
  ],
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AdminsModule {}
