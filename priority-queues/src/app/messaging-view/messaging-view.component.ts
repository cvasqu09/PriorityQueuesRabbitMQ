import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-messaging-view',
  templateUrl: './messaging-view.component.html',
  styleUrls: ['./messaging-view.component.scss']
})
export class MessagingViewComponent implements OnInit {
  message: string = null;
  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    this.messagingService.messageObs.subscribe(message => {
      this.message = message;
    });
  }

  onClick() {
    this.messagingService.receiveMessage();
  }

  messageExists(): Boolean {
    return (this.message != null || this.message !== '') ? false : true;
  }

}
