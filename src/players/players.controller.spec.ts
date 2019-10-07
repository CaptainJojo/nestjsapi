import { Test, TestingModule } from '@nestjs/testing';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { NotFoundException } from '@nestjs/common';

describe('Players Controller', () => {
  let controller: PlayersController;
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
    it('should return players', () => {

      const result = [{ 'id': 2 }, { 'id': 1 }];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(controller.findAll()).toBe(result);
    });

    it('should return one player', () => {

      const result = { 'id': 2 };
      jest.spyOn(service, 'findOne').mockImplementation(() => result);

      expect(controller.findOne(2)).toBe(result);
    });
  });
});
