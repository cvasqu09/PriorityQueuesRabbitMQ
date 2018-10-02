import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageInputComponent } from './message-input/message-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagingService } from './services/messaging.service';
import { MessagingHomeComponent } from './messaging-home/messaging-home.component';
import { MessagingViewComponent } from './messaging-view/messaging-view.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationSnackbarComponent } from './notification-snackbar/notification-snackbar.component';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageInputComponent,
    MessagingHomeComponent,
    MessagingViewComponent,
    NotificationSnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MessagingService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
