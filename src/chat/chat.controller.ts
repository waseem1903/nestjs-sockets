import { Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from 'src/_schemas/chat.schema';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  async getHello(): Promise<Chat[]> {
    return await this.chatService.getChats();
  }
}
