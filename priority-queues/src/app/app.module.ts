import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageInputComponent } from './message-input/message-input.component';
import { FormsModule } from '@angular/forms';
import { MessagingService } from './services/messaging.service';
import { MessagingHomeComponent } from './messaging-home/messaging-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageInputComponent,
    MessagingHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
