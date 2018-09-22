import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-messaging-home',
  templateUrl: './messaging-home.component.html',
  styleUrls: ['./messaging-home.component.scss']
})
export class MessagingHomeComponent implements OnInit {
  currentMessage: string;

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    this.messagingService.messageObs.subscribe((message) => {
      this.currentMessage = message;
    });
  }

}
