import { Connection } from 'mongoose';
import { ChatSchema } from '../_schemas/chat.schema';

export const chatsProvider = [
  {
    provide: 'CHAT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Chat', ChatSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
