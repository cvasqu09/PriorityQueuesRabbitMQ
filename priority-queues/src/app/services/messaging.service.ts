import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private message: BehaviorSubject<string> = new BehaviorSubject<string>('');
  messageObs = this.message.asObservable();

  constructor() { }

  sendMessage(message: string) {
    this.message.next(message);
  }
}
