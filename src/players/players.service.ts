import { Injectable } from '@nestjs/common';
import data from '../headtohead.json';

@Injectable()
export class PlayersService {
    findAll(): {} {
        return data.players.sort((a, b) => (a.id > b.id) ? 1 : -1);
    }

    findOne(id): {} {
        return data.players.find((a) => { return a.id == id });
    }
}
