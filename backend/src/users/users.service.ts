
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { UserRole } from '../generated/prisma/client.js';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async promoteToOrganizer(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.role === UserRole.ADMIN) {
      throw new BadRequestException(
        'An administrator cannot be changed through organizer promotion',
      );
    }

    if (user.role === UserRole.ORGANIZER) {
      throw new BadRequestException('User is already an organizer');
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: { role: UserRole.ORGANIZER },
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        updatedAt: true,
      },
    });

    return {
      message: 'User successfully promoted to organizer',
      user: updatedUser,
    };
  }
}
