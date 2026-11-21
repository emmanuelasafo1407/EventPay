
import { Module } from '@nestjs/common';
import { EventsController } from './events.controller.js';
import { EventsService } from './events.service.js';
import { AuthModule } from '../auth/auth.module.js';
import { RolesGuard } from '../auth/roles.guard.js';

@Module({
  imports: [AuthModule],
  controllers: [EventsController],
  providers: [EventsService, RolesGuard],
  exports: [EventsService],
})
export class EventsModule {}
