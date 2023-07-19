import { Component } from '@angular/core';
import { Message } from 'src/app/models/message';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'websocket-example',
  templateUrl: './websocket-example.component.html',
  styleUrls: ['./websocket-example.component.scss']
})
export class WebsocketExampleComponent {
  messages: string[] = [];
  sent: Message[] = [];
  public message: Message = {
    from: '',
    to: '',
    message: ''
  };

  constructor(private chatService: ChatService) {
    this.chatService.message.subscribe(msg => {
      if (msg.message.includes('ConnID')){
        this.message.from = msg.message.split(' ')[1];
      }
      this.messages.push(msg.message);
      console.log("Response from websocket: " + msg);
    })
  }

  send(): void {
    console.log(`new message from: ${this.message.from} to: ${this.message.to} message: ${this.message.message}`);
    this.chatService.message.next(this.message);
    this.sent.push({...this.message});
    this.message.message = '';
  }
}
