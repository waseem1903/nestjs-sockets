import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatScoketsGateway {
  @WebSocketServer() server: Server;
  @SubscribeMessage('received message')
  handleMessage(client: Socket, payload: string): void {
    this.server.emit('sent message', payload);
    // return { event: 'sent message', data: payload };
  }
}
