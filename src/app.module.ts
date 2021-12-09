import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path/posix';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transaction } from './transactions/entities/transaction.entity';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    TransactionsModule,
    SequelizeModule.forRoot({
      dialect : 'sqlite',
      autoLoadModels : true,
      models : [Transaction],
      sync : {
        alter : true,
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
