import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { MatSnackBar } from '@angular/material';
import { Notification } from '../models/notification.model';

@Component({
  selector: 'app-notification-snackbar',
  templateUrl: './notification-snackbar.component.html',
  styleUrls: ['./notification-snackbar.component.scss']
})
export class NotificationSnackbarComponent implements OnInit {
  notification: Notification = null;

  constructor(private notificationService: NotificationService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.notificationService.notificationObs.subscribe((notification: Notification) => {
      this.notification = notification;
      console.log(this.notification);
      setTimeout(() => {
        if (notification != null) {
          this.snackBar.open(`${notification.message} with priority: ${notification.priority}`, '', { duration: 2000 });
        }
      }, 1000);
    });
  }

}
