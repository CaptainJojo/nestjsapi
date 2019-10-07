import { Module } from '@nestjs/common';
import { PlayersController } from './players/players.controller';
import { PlayersService } from './players/players.service';

@Module({
  imports: [],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class AppModule { }
