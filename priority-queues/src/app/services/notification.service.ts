import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notification: BehaviorSubject<string> = new BehaviorSubject<string>('');
  notificationObs = this.notification.asObservable();

  constructor() { }

  notify(message: string) {
    this.notification.next(message);
  }
}
