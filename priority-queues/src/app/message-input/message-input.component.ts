import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { MessagingService } from '../services/messaging.service';
import { FormGroup, FormControl } from '@angular/forms';

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
      'message': new FormControl(''),
      'priority': new FormControl(1)
    });
  }

  onSubmit(): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(this.inputForm.value);
    this.messagingService.sendMessage(this.inputForm.get('message').value, this.inputForm.get('priority').value);
  }

}
