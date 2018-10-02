import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { MessagingService } from '../services/messaging.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Notification } from '../models/notification.model';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss'],
})
export class MessageInputComponent implements OnInit {
  inputForm: FormGroup;

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      'message': new FormControl('', Validators.required),
      'priority': new FormControl(1, [Validators.required, this.validPriority])
    });
  }

  onSubmit(): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(this.inputForm.value);
    this.messagingService.sendMessage(new Notification(this.inputForm.get('message').value, this.inputForm.get('priority').value));
  }

  validPriority(priorityControl: FormControl): {[key: string]: string} {
    const priority: number = Number(priorityControl.value);
    if (priority >= 1 && priority <= 10) {
      return null;
    }

    return {'priority': 'Priority not in range 1-10'};
  }

}
