import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      success: true,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}
