import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { PrismaService } from 'src/database/database.service';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService, PrismaService],
})
export class EmployeesModule {}
