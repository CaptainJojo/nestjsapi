import { Test, TestingModule } from '@nestjs/testing';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { NotFoundException, HttpModule } from '@nestjs/common';

describe('Players Controller', () => {
  let controller: PlayersController;
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [PlayersController],
      providers: [PlayersService],
    }).compile();

    controller = module.get<PlayersController>(PlayersController);
    service = module.get<PlayersService>(PlayersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('route', () => {
    it('should return players', async () => {

      const result = [{ 'id': 2 }, { 'id': 1 }];
      jest.spyOn(service, 'findAll').mockImplementation(() => Promise.resolve(result));

      expect(await controller.findAll()).toBe(result);
    });

    it('should return one player', async () => {

      const result = { 'id': 2 };
      jest.spyOn(service, 'findOne').mockImplementation(() => Promise.resolve(result));

      expect(await controller.findOne(2)).toBe(result);
    });
  });
});
