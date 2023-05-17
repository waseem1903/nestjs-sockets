import { Module } from '@nestjs/common';
import { ChatScoketsGateway } from './chat-scokets.gateway';

@Module({
  providers: [ChatScoketsGateway]
})
export class ChatScoketsModule {}
