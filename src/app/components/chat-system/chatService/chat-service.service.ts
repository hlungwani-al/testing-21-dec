import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Client, Message} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  private client!: Client; //not sure about this..
  public messages: BehaviorSubject<string[]> = new BehaviorSubject<string[]> ([]);

  private initializeWebSocketConnection() {
    this.client = new Client({
      brokerURL: 'ws://localhost:8080/ws', // WebSocket URL
      connectHeaders: {},
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    this.client.webSocketFactory = () => new SockJS('http://localhost:8080/ws'); // the socks library is not found, so for now we don't use it

    this.client.onConnect = () => {
      console.log('Connected to WebSocket');
      this.subscribeToMessages();
    };

    this.client.onDisconnect = () => {
      console.log('Disconnected from WebSocket');
    };

    this.client.activate();
  }

  private subscribeToMessages() {
    this.client.subscribe('/topic/messages', (message: Message) => {
      const messageBody = JSON.parse(message.body);
      const currentMessages = this.messages.value;
      this.messages.next([...currentMessages, messageBody]);
    });
  }

  public sendMessage(senderId: string, receiverId: string, content: string) {
    const message = { senderId, receiverId, content };
    this.client.publish({ destination: '/app/chat', body: JSON.stringify(message) });
  }



  }




