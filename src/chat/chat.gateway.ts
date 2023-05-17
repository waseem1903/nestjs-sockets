import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { Chat } from '../_schemas/chat.schema';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer() server: Server;
  constructor(private chatService: ChatService) {}

  @SubscribeMessage('received message')
  async handleMessage(client: Socket, payload: Chat): Promise<void> {
    this.chatService.saveChat(payload);
    this.server.emit('sent message', payload.message);
    // return { event: 'sent message', data: payload.message };
  }
}
