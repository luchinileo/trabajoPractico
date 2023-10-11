import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { EscuelasModule } from './escuelas/escuelas.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('HOST'),
        port: configService.get('PORT'),
        username: configService.get('USER'),
        password: configService.get('PASS'),
        database: configService.get('DB'),
        entities: [__dirname + '/**/**.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    EscuelasModule,
    EstudiantesModule,
    ProfesoresModule,
    EscuelasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
