import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-notification-snackbar',
  templateUrl: './notification-snackbar.component.html',
  styleUrls: ['./notification-snackbar.component.scss']
})
export class NotificationSnackbarComponent implements OnInit {
  notification = '';

  constructor(private notificationService: NotificationService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.notificationService.notificationObs.subscribe((notification) => {
      this.notification = notification;
      console.log(this.notification);
      setTimeout(() => {
        if (notification !== '') {
          this.snackBar.open(notification, '', { duration: 2000 });
        }
      }, 1000);
    });
  }

}
