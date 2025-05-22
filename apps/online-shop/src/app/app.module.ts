import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  PostgresConfigService
} from '@online-shop/shared-data-access';
import { PostgresConfigModule } from '@online-shop/shared-data-access';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule],
    useFactory: (postgresService: PostgresConfigService) => {
        return { 
          type: 'postgres',
          synchronize: true, 
          database: postgresService.name,
          host: postgresService.host, 
          port: postgresService.port,
          username: postgresService.username, 
          password: postgresService.password,
          autoLoadEntities: true
        };
    },
      inject: [PostgresConfigService]
  })],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
