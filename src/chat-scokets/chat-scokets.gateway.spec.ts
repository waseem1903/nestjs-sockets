import { Test, TestingModule } from '@nestjs/testing';
import { ChatScoketsGateway } from './chat-scokets.gateway';

describe('ChatScoketsGateway', () => {
  let gateway: ChatScoketsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatScoketsGateway],
    }).compile();

    gateway = module.get<ChatScoketsGateway>(ChatScoketsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
