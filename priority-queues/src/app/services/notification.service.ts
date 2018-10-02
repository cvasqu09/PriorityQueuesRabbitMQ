import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject: BehaviorSubject<Notification> = new BehaviorSubject<Notification>(null);
  notificationObs = this.notificationSubject.asObservable();

  constructor() { }

  notify(notification: Notification) {
    this.notificationSubject.next(notification);
  }
}
