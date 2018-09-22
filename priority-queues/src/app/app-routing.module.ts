import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageInputComponent } from './message-input/message-input.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MessageInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
