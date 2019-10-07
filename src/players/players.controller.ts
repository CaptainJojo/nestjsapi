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
    async findOne(@Param() params): Promise<{}> {
        const res = await this.playersService.findOne(params.id);

        if (!res) {
            throw new NotFoundException;
        }

        return res;
    }
}
