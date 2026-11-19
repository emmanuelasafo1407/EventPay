
import {
  Controller,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';

import { UsersService } from './users.service.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { UserRole } from '../generated/prisma/client.js';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Patch(':id/promote-to-organizer')
  promoteToOrganizer(@Param('id') id: string) {
    return this.usersService.promoteToOrganizer(id);
  }
}
