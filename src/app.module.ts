import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { Module } from '@nestjs/common';
// typeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';


@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
