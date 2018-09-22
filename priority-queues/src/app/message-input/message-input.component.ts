import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss'],
})
export class MessageInputComponent implements OnInit {
  message: string;

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
  }

  onClick(): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(this.message);
    this.messagingService.sendMessage(this.message);
  }

}
