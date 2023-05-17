import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { ChatScoketsModule } from './chat-scokets/chat-scokets.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/chat-app'),
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
