import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from './notification.service';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private message: BehaviorSubject<string> = new BehaviorSubject<string>('');
  messageObs = this.message.asObservable();

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  sendMessage(notification: Notification) {
    return this.http.post('http://localhost:3000/send/', {message: notification.message, priority: notification.priority})
      .subscribe((res: any) => {
        this.notificationService.notify(notification);
      });
  }

  receiveMessage(): Subscription {
    return this.http.get('http://localhost:3000/receive/').subscribe((res: any) => {
      this.message.next(res.message);
    });
  }
}
