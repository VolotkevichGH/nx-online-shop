import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration, validationSchema } from './postgres.configuration';
import { PostgresConfigService } from './postgres.config.service';

@Module({
  imports: [ConfigModule.forRoot({
    load: [configuration],
    cache: true,
    isGlobal: true,
    validationSchema: validationSchema,
    validationOptions: {
      abortEarly: false,
      allowUnknown: true,
    }
  })],
  providers: [PostgresConfigService],
  exports: [PostgresConfigService],
})
export class PostgresConfigModule {}
