import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
@Injectable()
export class PostgresConfigService {
  constructor(private readonly configService: ConfigService<Record<string, unknown>, true>) {
  }

  get host(): string {
    return this.configService.get<string>('postgres.host');
  }

  get port(): number {
    return this.configService.get<number>('postgres.port');
  }

  get name(): string {
    return this.configService.get<string>('postgres.name');
  }

  get username(): string {
    return this.configService.get<string>('postgres.username');
  }

  get password(): string {
    return this.configService.get<string>('postgres.password');
  }
}
