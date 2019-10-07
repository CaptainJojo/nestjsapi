import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {

    constructor(private readonly playersService: PlayersService) { }

    @Get()
    findAll(): {} {
        return this.playersService.findAll();
    }

    @Get(':id')
    findOne(@Param() params): {} {
        const res = this.playersService.findOne(params.id);

        if (!res) {
            throw new NotFoundException;
        }

        return res;
    }
}
