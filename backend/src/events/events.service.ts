
import {
  Injectable,
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateEventDto } from './dto/create-event.dto.js';
import { EventStatus, UserRole } from '../generated/prisma/client.js';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateEventDto, userId: string, userRole: UserRole) {
    const startsAt = new Date(dto.startsAt);
    const endsAt = new Date(dto.endsAt);

    if (endsAt <= startsAt) {
      throw new BadRequestException('Event end time must be after start time');
    }

    const slug = dto.slug.trim().toLowerCase();

    const existingEvent = await this.prisma.event.findUnique({
      where: { slug },
    });

    if (existingEvent) {
      throw new BadRequestException('This event slug is already in use');
    }

    return this.prisma.event.create({
      data: {
        organizerId: userId,
        title: dto.title.trim(),
        slug,
        description: dto.description,
        category: dto.category.trim(),
        imageUrl: dto.imageUrl,
        venue: dto.venue.trim(),
        city: dto.city.trim(),
        country: dto.country?.trim() || 'Ghana',
        startsAt,
        endsAt,
        timezone: dto.timezone || 'Africa/Accra',
        status: EventStatus.DRAFT,
      },
    });
  }
}
