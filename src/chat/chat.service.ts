import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Chat } from '../_schemas/chat.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private chatModel: Model<Chat>) {}

  async getChats(): Promise<Chat[]> {
    return await this.chatModel.find({});
  }

  async saveChat(chat: Chat): Promise<void> {
    console.log('I am Here?');
    const createdChat = new this.chatModel(chat);
    await createdChat.save();
  }
}
