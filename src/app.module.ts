import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminsModule } from './admins/admins.module';

@Module({
  // imports: [AdminsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
