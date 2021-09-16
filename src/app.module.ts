import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemModule } from './api/system/system.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://minhdu_loggerdb:minhdu_loggerdb@localhost:27017/minhdu_loggerdb'), SystemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
