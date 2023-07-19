import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
import { Message } from '../models/message';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public message: Subject<Message>;

  constructor(private service: WebsocketService) { 
    this.message = <Subject<Message>>this.service
    .connect(
      'wss://localhost:7117'
    )
    .pipe(
      map((response: MessageEvent): Message => {
        debugger
        // let data = JSON.parse(response.data);
        return{
          from: '',
          to: '',
          message: response.data
        }
      })
    )
  }

  send(msg: string): void{

  }
}
