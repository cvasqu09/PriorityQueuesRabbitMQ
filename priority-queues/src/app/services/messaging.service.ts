import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private message: BehaviorSubject<string> = new BehaviorSubject<string>('');
  messageObs = this.message.asObservable();

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  sendMessage(msg: string) {
    return this.http.post('http://localhost:3000/send/', {message: msg}).subscribe((res: any) => {
      this.notificationService.notify(res.message);
    });
  }
}
