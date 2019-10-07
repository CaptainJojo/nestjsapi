import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class PlayersService {

    constructor(private readonly httpService: HttpService) { }
    getOnApi(): any {
        return this.httpService.get('https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json').toPromise();
    }

    async findAll(): Promise<{}> {
        const response = await this.getOnApi();
        return response.data.players.sort((a, b) => (a.id > b.id) ? 1 : -1);
    }

    async findOne(id): Promise<{}> {
        const response = await this.getOnApi();
        return response.data.players.find((a) => { return a.id == id });
    }
}
